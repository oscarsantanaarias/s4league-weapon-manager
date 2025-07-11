const fs = require('fs/promises');
const { DOMParser, XMLSerializer } = require('@xmldom/xmldom');
const iconv = require('iconv-lite');
const pd = require('pretty-data').pd;
const fsp = require('fs/promises');

// Basic binary writer class, we store info and then merge them at the end
class BinaryWriter {
  constructor() {
    this.buffers = [];
  }
  writeInt32(value) {
    const buf = Buffer.alloc(4);
    buf.writeInt32LE(value);
    this.buffers.push(buf);
  }
  writeFloat32(value) {
    const buf = Buffer.alloc(4);
    buf.writeFloatLE(value);
    this.buffers.push(buf);
  }
  writeUInt16(value) {
    const buf = Buffer.alloc(2);
    buf.writeUInt16LE(value);
    this.buffers.push(buf);
  }
  writeBuffer(buffer) {
    this.buffers.push(buffer);
  }
  toBuffer() {
    return Buffer.concat(this.buffers);
  }
}

// Converts a JS string to encoded xbn buffer
function encodeXbnValue(str) {
  const bytes = iconv.encode(str, 'windows-1252');
  for (let i = 0; i < bytes.length; i++) {
    let b = ((bytes[i] >> 6) | (bytes[i] << 2)) & 0xff;
    b = (~b) & 0xff;
    bytes[i] = b;
  }
  return bytes;
}

// Converts encoded xbn buffer back to JS string
function decodeXbnValue(buffer) {
  const decoded = Buffer.from(buffer);
  for (let i = 0; i < decoded.length; i++) {
    let b = (~decoded[i]) & 0xff;
    b = ((b << 6) | (b >> 2)) & 0xff;
    decoded[i] = b;
  }
  return iconv.decode(decoded, 'windows-1252');
}

// Recursively gets unique node names from XML DOM
function getNodeNames(node, names = new Set()) {
  if (node.nodeType === 1) {
    names.add(node.nodeName);
    for (let i = 0; i < node.childNodes.length; i++) {
      getNodeNames(node.childNodes[i], names);
    }
  }
  return names;
}

// Recursively gets unique attribute names
function getAttributeNames(node, names = new Set()) {
  if (node.nodeType === 1) {
    for (let i = 0; i < node.attributes.length; i++) {
      names.add(node.attributes[i].name);
    }
    for (let i = 0; i < node.childNodes.length; i++) {
      getAttributeNames(node.childNodes[i], names);
    }
  }
  return names;
}

// Writes one XBN string with encoded format
function writeXbnValue(writer, str) {
  const encoded = encodeXbnValue(str);
  writer.writeUInt16(encoded.length);
  writer.writeBuffer(encoded);
}

// Writes one attribute to the writer
function writeXbnAttribute(writer, attrib, attribNames) {
  const nameIndex = attribNames.indexOf(attrib.name);
  writer.writeUInt16(nameIndex);
  writeXbnValue(writer, attrib.value);
}

// Recursively writes a node and its children to XBN
function writeXbnNode(writer, node, nodeNames, attribNames) {
  const nameIndex = nodeNames.indexOf(node.nodeName);
  writer.writeUInt16(nameIndex);

  const attribCount = node.attributes.length;
  writer.writeUInt16(attribCount);
  writer.writeUInt16(0); // dunno what this is

  const elementChildren = Array.from(node.childNodes).filter(n => n.nodeType === 1);
  writer.writeUInt16(elementChildren.length);

  for (const attrib of Array.from(node.attributes)) {
    writeXbnAttribute(writer, attrib, attribNames);
  }
  for (const child of elementChildren) {
    writeXbnNode(writer, child, nodeNames, attribNames);
  }
}

// Reads one XBN string from a buffer at offset
function readXbnValue(buffer, offset) {
  const len = buffer.readUInt16LE(offset.pos);
  offset.pos += 2;
  const slice = buffer.slice(offset.pos, offset.pos + len);
  offset.pos += len;
  return decodeXbnValue(slice);
}

// Recursively rebuilds a node from buffer
function readXbnNode(buffer, offset, nodeNames, attribNames) {
  const nameIndex = buffer.readUInt16LE(offset.pos);
  offset.pos += 2;

  const nodeName = nodeNames[nameIndex];
  const attribCount = buffer.readUInt16LE(offset.pos);
  offset.pos += 2;

  offset.pos += 2; // unknown short

  const childCount = buffer.readUInt16LE(offset.pos);
  offset.pos += 2;

  const doc = new DOMParser().parseFromString('<' + nodeName + '/>', 'application/xml');
  const element = doc.documentElement;

  for (let i = 0; i < attribCount; i++) {
    const nameIdx = buffer.readUInt16LE(offset.pos);
    offset.pos += 2;
    const value = readXbnValue(buffer, offset);
    element.setAttribute(attribNames[nameIdx], value);
  }

  for (let i = 0; i < childCount; i++) {
    const child = readXbnNode(buffer, offset, nodeNames, attribNames);
    element.appendChild(child);
  }

  return element;
}

// Main function to convert XML file to XBN format
async function convertXmlFileToXbn(inputPath, outputPath) {
  const xmlText = await fs.readFile(inputPath, 'utf-8');
  const doc = new DOMParser().parseFromString(xmlText, 'application/xml');
  const root = doc.documentElement;

  const nodeNames = Array.from(getNodeNames(root));
  const attribNames = Array.from(getAttributeNames(root));

  const writer = new BinaryWriter();
  writer.writeInt32(-1);
  writer.writeFloat32(0.1);

  if (!root) {
    writer.writeUInt16(0);
    writer.writeUInt16(0);
  } else {
    writer.writeUInt16(nodeNames.length);
    for (const nodeName of nodeNames) {
      writeXbnValue(writer, nodeName);
    }

    writer.writeUInt16(attribNames.length);
    for (const attribName of attribNames) {
      writeXbnValue(writer, attribName);
    }

    writeXbnNode(writer, root, nodeNames, attribNames);
  }

  const buffer = writer.toBuffer();
  await fs.writeFile(outputPath, buffer);
   try {
      await fsp.unlink('resources/auth/xbn/Weapons.xml');
      console.log('XML file deleted!');
       console.log('XBN created at', outputPath);
    } catch(e){
      console.log('An error occured deleting XML file during convertion: ', e.message);
    }


  return outputPath;
}

// Convert an .xbn file back to XML and save
async function convertXbnFileToXml(inputPath, outputPath) {
  const buffer = await fs.readFile(inputPath);
  const offset = { pos: 0 };

  const header = buffer.readInt32LE(offset.pos); // Important tis is always -1
  offset.pos += 4;
  const version = buffer.readFloatLE(offset.pos); // This is probably 0.1
  offset.pos += 4;

  const nodeCount = buffer.readUInt16LE(offset.pos);
  offset.pos += 2;
  const nodeNames = [];
  for (let i = 0; i < nodeCount; i++) {
    nodeNames.push(readXbnValue(buffer, offset));
  }

  const attribCount = buffer.readUInt16LE(offset.pos);
  offset.pos += 2;
  const attribNames = [];
  for (let i = 0; i < attribCount; i++) {
    attribNames.push(readXbnValue(buffer, offset));
  }

  const root = readXbnNode(buffer, offset, nodeNames, attribNames);
  const rawXml = new XMLSerializer().serializeToString(root);
const xml = pd.xml(rawXml); // this adds indentation and line breaks

  await fs.writeFile(outputPath, xml);

  try {
     console.log('XML created at', outputPath);
     await fsp.unlink('resources/auth/xbn/Weapons.xbn');
     console.log('XBN file deleted!');
   } catch(e){
     console.log('An error occured deleting XBN file during convertion: ', e.message);
   }

  return outputPath;
}


module.exports = {
  convertXmlFileToXbn,
  convertXbnFileToXml
};

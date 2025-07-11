const { contextBridge, ipcRenderer } = require('electron');

contextBridge.exposeInMainWorld('puente', {
    selectFolder: () => ipcRenderer.invoke('selectFolder'),
    dirLocation: (ruta) => ipcRenderer.invoke('dirLocation', ruta),
    addItems: (useDBS) => ipcRenderer.invoke('addItems', useDBS),
    confirmDialog: () => ipcRenderer.invoke('show-confirm'),
    saveDBConfig: (data) => ipcRenderer.invoke('save-db-config', data),
    loadDBConfig: () => ipcRenderer.invoke('load-db-config'),
    XMLtoXBN: () => ipcRenderer.invoke('XMLtoXBN'),
    XBNtoXML: () => ipcRenderer.invoke('XBNtoXML')
});
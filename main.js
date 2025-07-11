require('electron-reload')(__dirname, {
  electron: require(`${__dirname}/node_modules/electron`),
  watch: [
    `${__dirname}/resources/weapon`
  ],
  ignored: [
    /\.x7$/,
    /\.xml$/,
  ] 
});



const fsp = require('fs').promises;
const mysql = require('mysql2/promise');
const { getDirectories, fs, path } = require('./directory');
const { makeItemx7, makeWeaponLua } = require('./makeFile');
const weaponsxml_funcs = require('./makeWeaponXML');
const { app, BrowserWindow, dialog, ipcMain } = require('electron');
const weapons_lua = require('./weapon_lua_func');
const {verifyFields, verifyItemX7, verifyInfox7, verifyWeaponLua, verifyWeaponsXML , verifyItem_xml, weaponlua, iteminfox7, weaponxml, itemx7, itemxml,  melee, special, sentries, guns, snipers, heavies, thrown, id_range, verifyString_tableXML, verifyString_tablex7, iteminfoStringX7, iteminfoStringXML } = require('./verifiers');
const { read } = require('fs');
const { MakeTurrentDesc, MakeSubmachineDesc, MakeSparkRifleDesc, MakeSmashDesc, MakeShotGunDesc, MakeSharpshootingDesc, MakeSentryStunDesc, MakeSentryGunDesc, MakeSemiRifleDesc, MakeRailGunDesc, MakeRocketLauncherDesc, 
MakeRevolverDesc, MakeRescueGunDesc, MakeMineGunDesc, MakeMindShockDesc, MakeMindHealDesc, MakeLightMachineGunDesc, MakeLightBombDesc, MakeHomingDesc, MakeHeavyMachineGunDesc, MakeHandGunDesc, MakeGaussDesc, MakeEarthBombDesc, MakeDualMagnumDesc, MakeCannonDesc, MakeAssaultDesc, MakeAirGunDesc, MakeVitalClawDesc, MakeTwinBladesDesc, MakeSigmaBladeDesc, MakeKatanaDesc, MakeIronBootsDesc, MakeFistDesc, MakeExoDesc, MakeDaggerDesc, MakeBatDesc, MakeCounterSwordDesc, MakePlasmaSwordDesc } = require('./makeItemInfo');
const { addtodb } = require('./db')
const { testConnection } = require('./conexion');
const  { convertXmlFileToXbn, convertXbnFileToXml } = require('./xbnconverter');
//sql variables default settings.
let host = '';
let user = '';
let pass = '';
let db = '';


let dbConfig = {
  host: 'localhost',
  user: 'root',
  pass: '',
  db: 's4league'
};
const configPath = path.join(app.getPath('userData'), 'dbconfig.json');

let weapon_files = false;

let iteminfoID = 1;
let nameID = 310;
let tipID = 310;

//Change this to false, I you don't want your items to be added to your database.
let useDB = false;
let itemAdded = false;

//here I save all items in the file at moment of ejecuction
let procesados = [];
let sqlError = false;

//Here I get a structure with all files and folders avaible automatically.
//const weapon_files = getDirectories(root).weapon;

async function addNewItem(id, final, item_scn, item_dds, iteminfoID, weaType, imgsrc, weaponName, host, user, pass, db){
    
    //Here this variable if true will add items to your db
    //below it test the connection before anything
   if (useDB) {
  const connectionTest = await testConnection(host, user, pass, db);
  
  if (Array.isArray(connectionTest)) {
    if (!sqlError) {
      sqlError = true;
      dialog.showErrorBox('Database Error',`${connectionTest[1].error}`);
    }
    return;
  }
}
    
 

   //Here I verify that the Item has an ID in range, I guessed by checking where each weapon ID started, so it could be wrong.    
 if(id > final) {
        console.error(`ID ${id} is out of range ${final} for weapon type: ${weaType}.`);
        return; 
    }
 
    try {

        //Here I get the weapon name, example crow, taser etc.
        const weaName = item_scn.split('.')[0].replace(/icon_/g, '').replace(/_/g, ' ').replace(/-/g, ' ').replace(/\b\w/g, c => c.toUpperCase());
        
        //Below I verify that IDS and names are available on each file, if not it will return false and later will recall the addNewItem function
        const resItemX7 = await verifyItemX7(id, weaName);

         const resItemXML = await verifyItem_xml(id, weaType);

        const resWeaponlua = await verifyWeaponLua(id, weaType); 
        
        const resWeaponXML = await verifyWeaponsXML(id, weaName);

        const resItemInfo = await verifyInfox7(nameID, tipID, weaName);

        const resItemInfoStringX7 = await verifyString_tablex7(nameID, tipID, weaName);
        const resItemInfoStringXML = await verifyString_tableXML(nameID, tipID, weaName);


        
        //I don't use the variable yet, it will be assigned below
        let resAddDb;
 
      
       
        //Here verify if Item name and Ids are available for itemInfo
   
            //Here verify if Item name and Ids are available for itemInfo
  if (resItemInfo === 'nombreEncontrado' || resItemInfoStringX7 === 'nombreEncontrado' || resItemInfoStringXML === 'nombreEncontrado' ){
  console.log(`Item name : ${weaName} found in ItemInfo, item skipped!.`);

  const url = `resources/weapon/${weaponName}/${weaType}/imgs/${item_dds}`;
  const fotoLimpia = item_dds.split('.')[0];

  // Agregamos el item al array
  procesados.push({ nombre: weaName, status: 'Skipped', src: url });

  
  const encontrados = procesados.filter(item => item.src === url);

  if (encontrados.length > 1) {



    const lastIndex = procesados.length - 1;
    procesados.splice(lastIndex, 1);

  } else if (encontrados.length === 1) {
    
   
  }

  return null;
}

else if(!resItemInfo){
       
            nameID += 1;
           return await addNewItem(id, final, item_scn, item_dds, iteminfoID, weaType, imgsrc, weaponName, host, user, pass, db);

        } else if(Array.isArray(resItemInfo) && !resItemInfo[0]){

          
            tipID += 1;

              return await addNewItem(id, final, item_scn, item_dds, iteminfoID, weaType, imgsrc, weaponName, host, user, pass, db);
        }
 
      


        //Here verify if ItemX7 IDS and name are available
      if(!resItemX7){
      
        return await addNewItem(id + 1, final, item_scn, item_dds, iteminfoID, weaType, imgsrc, weaponName, host, user, pass, db)
      } else if(Array.isArray(resItemX7)){
        console.log('Name found in Item X7');
        return; 

      }
     
      //Here I verify that Weapons.xml ID and name are available if name exist I return and stop all process, 
      //to let only new items be added.
     if(!resWeaponXML){
      console.log(`The ID: ${id} in Weapons.xml is not available`)
        return await addNewItem(id + 1, final, item_scn, item_dds, iteminfoID, weaType, imgsrc, weaponName, host, user, pass, db)
      } else if(Array.isArray(resWeaponXML)){
        console.log(`Item name: ${weaName} found in Weapons XML.`);
        return; 

      }

        //Here condition to verify if itemXML has valid ID and item is not duplicated.
        if(!resItemXML){
            
        return await addNewItem(id + 1, final, item_scn, item_dds, iteminfoID, weaType, imgsrc, weaponName, host, user, pass, db)
      } else if(Array.isArray(await resItemXML)){
         
        return; 

      }

      //Verify weapon lua files
        if(!resWeaponlua){
            console.log('En uso uso!');
        return await addNewItem(id + 1, final, item_scn, item_dds, iteminfoID, weaType, imgsrc, weaponName, host, user, pass, db)
      } 


      //Here I verify if I am using DB and based on connection db return I make a desicion.
      if(useDB){

       
        resAddDb = await addtodb(id, weaName, host, user, pass, db);
        

        //IF ID was found I recall the function
      if(resAddDb === 2){
         console.log('ID was found verifying DB again...');
        return await addNewItem(id + 1, final, item_scn, item_dds, iteminfoID, weaType, imgsrc, weaponName, host, user, pass, db)
      } 
      //if I get an error I stop the process.
      if(Array.isArray(resAddDb)){
        console.error('An error occured with the conexion to database, stopping...');
        return;
      }

     

    }




      ////////////////HERE START WRITTING IN FILES IF ALL IDS AND NAMES WERE VERIFIED AND AVAILABLE////
        //Here I am reading item.x7
      const readItemx7 = await fsp.readFile(itemx7, 'utf8');
      
      //revisar esto mas tarde
        let modifyItemX7 = readItemx7.replace(/<\/itemlist>\s*$/, await makeItemx7(id, item_dds, weaName,  nameID, tipID) + '</itemlist>');
        
      
        if(!modifyItemX7 || modifyItemX7  === '' || modifyItemX7.length === 0){
        let newItemX7 = await makeItemx7(id, item_dds, weaName, nameID, tipID);
            modifyItemX7 = `
<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<itemlist>
        ${newItemX7}
</itemlist>
            `;
        }

        await fsp.writeFile(itemx7, modifyItemX7, 'utf8');

               //Here I am reading itemXML
      const readItemXML = await fsp.readFile(itemxml, 'utf8');
    
        let modifyItemXML = readItemXML.replace(/<\/itemlist>\s*$/, await makeItemx7(id, item_dds, weaName,  nameID, tipID) + '</itemlist>');
      
      
        if(!modifyItemXML || modifyItemXML === '' || modifyItemXML.length === 0){
        let newItemXML = await makeItemx7(id, item_dds, weaName, nameID, tipID);
            modifyItemXML = `
<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<itemlist>
        ${newItemXML}
</itemlist>
            `;
        }


        await fsp.writeFile(itemxml, modifyItemXML, 'utf8');
      

        //Here I start writing on ItemInfo
        const readItemInfo = await fsp.readFile(iteminfox7, 'utf8');

        const itemInfoFuncs = require('./makeItemInfo');

        const buildMakeInfo = 'Make' + weaType + 'Desc';

         const callBuildInfo = itemInfoFuncs[buildMakeInfo];

         if(!callBuildInfo){
            return console.error('Call function does not exist.');
         }

         const newItemInfoDesc = callBuildInfo(nameID, tipID, weaName);
         


   let replaceItemInfo = readItemInfo.replace(`</string_table>`, `${newItemInfoDesc.NameDesc}` + `\n \t` + `\n \t` + `${newItemInfoDesc.TipDesc}` + `\n </string_table>`);

            if(!replaceItemInfo || replaceItemInfo === '' || replaceItemInfo.length === 0){
                replaceItemInfo = `
<string_table>

 \t ${newItemInfoDesc.NameDesc} \n 

 \t ${newItemInfoDesc.TipDesc}

</string_table> 
                `;
            }

        await fsp.writeFile(iteminfox7, replaceItemInfo, 'utf8');



 //Here I start writing on ItemInfoStringX7
        const readItemInfoStringX7 = await fsp.readFile(iteminfoStringX7, 'utf8');

        const itemInfoStringX7_Funcs = require('./makeItemInfo');

        const buildMakeInfoStringX7 = 'Make' + weaType + 'Desc';

         const callBuildInfoStringX7 = itemInfoStringX7_Funcs[buildMakeInfoStringX7];

         if(!callBuildInfoStringX7){
            return console.error('Call function does not exist.');
         }

         const newItemInfoStringX7Desc = callBuildInfoStringX7(nameID, tipID, weaName);
         


   let replaceItemInfoStringX7 = readItemInfoStringX7.replace(`</string_table>`, `${newItemInfoStringX7Desc.NameDesc}` + `\n \t` + `\n \t` + `${newItemInfoStringX7Desc.TipDesc}` + `\n </string_table>`);

            if(!replaceItemInfoStringX7 || replaceItemInfoStringX7 === '' || replaceItemInfoStringX7.length === 0){
                replaceItemInfoStringX7 = `
<string_table>

 \t ${newItemInfoStringX7Desc.NameDesc} \n 

 \t ${newItemInfoStringX7Desc.TipDesc}

</string_table> 
                `;
            }

        await fsp.writeFile(iteminfoStringX7, replaceItemInfoStringX7, 'utf8');




  //Here I start writing on ItemInfoStringXML
        const readItemInfoStringXML = await fsp.readFile(iteminfoStringXML, 'utf8');

        const itemInfoStringXML_Funcs = require('./makeItemInfo');

        const buildMakeInfoStringXML = 'Make' + weaType + 'Desc';

         const callBuildInfoStringXML = itemInfoStringXML_Funcs[buildMakeInfoStringXML];

         if(!callBuildInfoStringXML){
            return console.error('Call function does not exist.');
         }

         const newItemInfoStringXMLDesc = callBuildInfoStringXML(nameID, tipID, weaName);
         


   let replaceItemInfoStringXML = readItemInfoStringXML.replace(`</string_table>`, `${newItemInfoStringXMLDesc.NameDesc}` + `\n \t` + `\n \t` + `${newItemInfoStringXMLDesc.TipDesc}` + `\n </string_table>`);

            if(!replaceItemInfoStringXML || replaceItemInfoStringXML === '' || replaceItemInfoStringXML.length === 0){
                replaceItemInfoStringXML = `
<string_table>

 \t ${newItemInfoStringXMLDesc.NameDesc} \n 

 \t ${newItemInfoStringXMLDesc.TipDesc}

</string_table> 
                `;
            }

        await fsp.writeFile(iteminfoStringXML, replaceItemInfoStringXML, 'utf8');       

        
        
        //Here I write Weapon Luas
        const readWeaponlua = await fsp.readFile(weaponlua, 'utf8');
            const newLuaDesc = await makeWeaponLua(resWeaponlua, weaType);
          
        let replaceInWeaponlua = readWeaponlua.replace('</weapon_lua_list>',  newLuaDesc + '</weapon_lua_list>');

        if(!replaceInWeaponlua || replaceInWeaponlua.length === 0 || replaceInWeaponlua === ''){
            replaceInWeaponlua = `
<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<weapon_lua_list>
            ${newLuaDesc}
</weapon_lua_list>
            `;
        }

        await fsp.writeFile(weaponlua, replaceInWeaponlua, 'utf8');

  
     const readWeaponXML = await fsp.readFile(weaponxml, 'utf8');

        //Here I build the function dinamically// when I wake up tomorrow morning  I have to do!
        const buildWeaponXML = weaponsxml_funcs['Make' + weaType + 'XML'];

        const callBuildWeaponXML = buildWeaponXML(id, item_scn, item_dds);


        let replaceWeaponXML = readWeaponXML.replace('</weaponlist>', callBuildWeaponXML + '</weaponlist>');

       

        if(!replaceWeaponXML || replaceWeaponXML.length === '' || replaceWeaponXML.length === 0){
            replaceWeaponXML = `
<weaponlist>
        ${callBuildWeaponXML}
</weaponlist>
            
            `;

        }

        await fsp.writeFile(weaponxml, replaceWeaponXML, 'utf8');

        console.log(`New item added! ${weaName}`);
        if(useDB && !itemAdded){
          itemAdded = true;
        }
    
      const url = `resources/weapon/${weaponName}/${weaType}/imgs/${item_dds}`;
        const filterAdded = procesados.find(items => items.src === url);

       if(!filterAdded){
         procesados.push({ nombre: weaName, status: 'Added', src: url, evitar: false});
       }
         
        

    } catch(e){
        console.log(e); 
    }
}



async function Ejecutar(iteminfoID, weapon_files, host, user, pass, db){
  procesados = [];
    //weapon / melee folden inside
    for(const [weaponName, weaponFiles] of Object.entries(weapon_files)){
           
        //I extract the folders and execute by each
        for(const [weaType, weaFiles] of Object.entries(weaponFiles)){
            //weatype is the weapon type y weaFiles its folder. 
            

            const imgs = weaFiles.imgs;
            const models = weaFiles.model.sort();
         
          
          
            let inicio = null;
            let final = null;
            
            if(melee.includes(weaType)){
                [inicio, final] = id_range['melee'];
            }
            if(guns.includes(weaType)){
                [inicio, final] = id_range['guns'];
            }
            if(snipers.includes(weaType)){
                [inicio, final] = id_range['snipers'];
            }
            if(sentries.includes(weaType)){
                [inicio, final] = id_range['sentries']; 
            }
            if(heavies.includes(weaType)){
                [inicio, final] = id_range['heavies'];
            }
            if(thrown.includes(weaType)){
                [inicio, final] = id_range['thrown'];
            }

            if(special.includes(weaType)){
                [inicio, final] = id_range['special'];
            }
              
            65
            let i = 0;
            while(i < models.length){
            const elemento = models[i].split('.')[0];
             
               const imgsrc = 'resources/weapon/' + weaponName + '/' + weaType  + '/' + 'imgs/'+ imgs[i];
             
             
                const ele_icon = 'icon_' + elemento;
                const ele_icono = 'Icon_' + elemento;
                
          
            for(let a = 0; a < imgs.length; a++){

                if(imgs[a].length > 0){

                   const cleanImg = imgs[a].split('.')[0];
                    if(elemento.split('.')[0] === cleanImg){
                        
                      await addNewItem(inicio, final,  models[i] ,imgs[a], iteminfoID, weaType, imgsrc, weaponName, host, user, pass, db);


                    } else if(ele_icon === cleanImg || ele_icono === cleanImg){
        
                        await addNewItem(inicio, final, models[i] ,imgs[a], iteminfoID, weaType, imgsrc, weaponName, host, user, pass, db);
                    } else if(models.includes(cleanImg + '_r.scn') && models.includes(cleanImg + '_l.scn') || models.includes(cleanImg.split('icon_')[1] + '_r.scn') && models.includes(cleanImg.split('icon_')[1]  + '_l.scn') || models.includes(cleanImg.split('Icon_')[1] + '_r.scn') && models.includes(cleanImg.split('Icon_')[1]  + '_l.scn')){
                     
                         await addNewItem(inicio, final, imgs[a].split('.')[0] + '.scn' ,imgs[a], iteminfoID, weaType, imgsrc, weaponName, host, user, pass, db);
                    }
                }
            }
                i++;
            } //aqui termina el while
            
        }
    } //aqui termina el primer for const
    if (useDB && itemAdded) {
  const changeShopVersion = "UPDATE shop_version SET Version = Version + 1";
  let connect;

  try {
    connect = await mysql.createConnection({
      host: host,
      user: user,
      password: pass,
      database: db
    });

    await connect.beginTransaction();

    const [shopversion_result] = await connect.query(changeShopVersion);

    if (shopversion_result.affectedRows > 0) {
      console.log('Shop Version updated!');
      await connect.commit();
    } else {
      console.log('No row has been updated in shop version.');
      await connect.rollback();
    }

  } catch (e) {
    if (connect) {
      try {
        await connect.rollback();
        console.log('The transaction has been rolled back at shop version.');
      } catch (rollbackErr) {
        console.error('Error reversing changes:', rollbackErr.message);
      }
    }

    console.error('An error occurred updating the shop version:', e.message);
  } finally {
    if (connect) {
      await connect.end(); 
    }
  }
}

  

    console.log('Items processed: ', procesados);
    sqlError = false;
    itemAdded = false;


     
}

const chokidar = require('chokidar');

let mainWindow = null;


function crearVentana(){
  mainWindow = new BrowserWindow({
    width:700,
    height:700,
    minWidth:700,
    minHeight:500,
    webPreferences: {
      nodeIntegration: false,
      contextIsolation: true,
      preload: path.join(__dirname, 'preload.js')
    }
  });


  mainWindow.loadFile('index.html');

//I use this to reload the window if new file added to resources/weapons etc.
  chokidar.watch(`${__dirname}/resources/weapon`, {
    ignored: /\.(x7|xml)$/i,
    persistent: true,
    ignoreInitial: true
  }).on('add', path => {
    console.log(`New File added!: ${path}`);
    if (mainWindow) {
      mainWindow.webContents.reload();
    }
  });
}



//here I create endpoint to open folder selection
ipcMain.handle('selectFolder', async() => {
	//here I open the directory
	const resultado = await dialog.showOpenDialog({
		properties: ['openDirectory']
	});
	
	//if the window is closed returns null for closing
	if(resultado.canceled) return null;
	//I return the path selected
	return resultado.filePaths[0];
});

//endPoint to get directory where files are.
ipcMain.handle('dirLocation', async (event, ruta) => {

	if(ruta){
	//aqui ya tengo la ruta
	weapon_files = getDirectories(ruta).weapon;
	

	} else {	
		 console.log('Ruta no asignada', ruta);
		 return null
	}
});



ipcMain.handle('addItems', async (event, useDBS) => {
  procesados = []; 
  console.log('Procesados inicial:', procesados);
  useDB = useDBS;

  await Ejecutar(iteminfoID, weapon_files, dbConfig.host, dbConfig.user, dbConfig.pass, dbConfig.db);

  console.log('Procesador length es', procesados.length)
  return [...procesados];
});




ipcMain.handle('show-confirm', async () => {
  const result = await dialog.showMessageBox({
    type: 'question',
    buttons: ['Yes', 'No'],
    defaultId: 0,
    title: 'Confirm',
    message: 'Would you like to apply changes?'
  });

  return result.response === 0; 
});



ipcMain.handle('XBNtoXML', async () => {
	await convertXbnFileToXml('resources/auth/xbn/Weapons.xbn', 'resources/auth/xbn/Weapons.xml');

	console.log('Weapons.xbn converted to Weapons.xml.');
  return;
});


ipcMain.handle('XMLtoXBN', async() => {
	await convertXmlFileToXbn('resources/auth/xbn/Weapons.xml', 'resources/auth/xbn/Weapons.xbn');
	
	console.log('Weapons.xml converted to Weapons.xbn');
  return;

});



ipcMain.handle('save-db-config', async (event, data) => {
  await fsp.writeFile(configPath, JSON.stringify(data, null, 2));
  
  
  dbConfig = {
    host: data.host,
    user: data.user,
    pass: data.pass,
    db: data.database
  };

  console.log('[CONFIG] Saved and updated in memory:', dbConfig);

  return true;
});





ipcMain.handle('load-db-config', async () => {
  try {
    await fsp.access(configPath); //Verifies if the file exists here.
    const raw = await fsp.readFile(configPath);
    return JSON.parse(raw);
  } catch (err) {
    return null; // Here it doesn't exist or can't be read
  }
});



//Here I set the open app action when the app is ready
app.whenReady().then(async () => {
	//Here I create the window
	crearVentana();
	
	//Here if using Apple devices and click on icon will open
	app.on('activate', () => {
		//here check if no windows are open
		if(BrowserWindow.getAllWindows().length === 0){
			crearVentana();
		}
	});

  try {
    const configPath = path.join(app.getPath('userData'), 'dbconfig.json');
    const raw = await fsp.readFile(configPath, 'utf8');
    const config = JSON.parse(raw);

    host = config.host || host;
    user = config.user || user;
    pass = config.pass || pass;
    db   = config.database || db;

    console.log('[CONFIG] Loaded:', { host, user, db });
  } catch (err) {
    console.warn('[CONFIG] Couldnt load default settings....');
  }


  

});



//on closing all windows
app.on('window-all-closed', () => {
	//for Apple devices avoids closing the window completely when pressing X
		if(process.platform !== 'darwin'){
			app.quit();
		}
})



    



 




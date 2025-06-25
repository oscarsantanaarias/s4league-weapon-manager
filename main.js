const fsp = require('fs').promises;

const { getDirectories, root, fs, path, resources } = require('./directory');
const { makeItemx7, makeWeaponLua } = require('./makeFile');
const weaponsxml_funcs = require('./makeWeaponXML');
const weapons_lua = require('./weapon_lua_func');
const {verifyFields, verifyItemX7, verifyInfox7, verifyWeaponLua, verifyWeaponsXML , verifyItem_xml, weaponlua, iteminfox7, weaponxml, itemx7, itemxml,  melee, special, sentries, guns, snipers, heavies, thrown, id_range } = require('./verifiers');
const { read } = require('fs');
const { MakeTurrentDesc, MakeSubmachineDesc, MakeSparkRifleDesc, MakeSmashDesc, MakeShotGunDesc, MakeSharpshootingDesc, MakeSentryStunDesc, MakeSentryGunDesc, MakeSemiRifleDesc, MakeRailGunDesc, MakeRocketLauncherDesc, 
MakeRevolverDesc, MakeRescueGunDesc, MakeMineGunDesc, MakeMindShockDesc, MakeMindHealDesc, MakeLightMachineGunDesc, MakeLightBombDesc, MakeHomingDesc, MakeHeavyMachineGunDesc, MakeHandGunDesc, MakeGaussDesc, MakeEarthBombDesc, MakeDualMagnumDesc, MakeCannonDesc, MakeAssaultDesc, MakeAirGunDesc, MakeVitalShockDesc, MakeTwinBladesDesc, MakeSigmaBladeDesc, MakeKatanaDesc, MakeIronBootsDesc, MakeFistDesc, MakeExoDesc, MakeDaggerDesc, MakeBatDesc, MakeCounterSwordDesc, MakePlasmaSwordDesc } = require('./makeItemInfo');



let newID = null;
const weapon_lua_info = [];
let categoria = '';
let iteminfoID = 1;
let nameID = 310;
let tipID = 310;




//Here I get a structure with all files and folders avaible automatically.
const weapon_files = getDirectories(root).weapon;

async function addNewItem(id, final, item_scn, item_dds, iteminfoID, weaType){
  
   //Here I verify that the Item has an ID in range, I guessed by checking where each weapon ID started, so it could be wrong.    
 if(id > final) {
        console.error(`ID ${id} is out of range ${final} for weapon type: ${weaType}.`);
        return; 
    }
 
    try {

        //Here I get the weapon name, example crow, taser etc.
        const weaName = item_scn.split('.')[0];
        
        //Below I verify that IDS and names are available on each file, if not it will return false and later will recall the addNewItem function
        const resItemX7 = await verifyItemX7(id, weaName);

         const resItemXML = await verifyItem_xml(id, weaType);

        const resWeaponlua = await verifyWeaponLua(id, weaType); 
        
        const resWeaponXML = await verifyWeaponsXML(id, weaName);

        const resItemInfo = await verifyInfox7(nameID, tipID, weaName);
   
        
      
       
        //Here verify if Item name and Ids are available for itemInfo
    if(resItemInfo === 'nombreEncontrado'){
       console.log(`Item name : ${weaName} found in ItemInfo, item skipped!.`);
       return;
    
    } else if(!resItemInfo){
       
            nameID += 1;
           return await addNewItem(id, final, item_scn, item_dds, iteminfoID, weaType);

        } else if(Array.isArray(resItemInfo) && !resItemInfo[0]){

          
            tipID += 1;

              return await addNewItem(id, final, item_scn, item_dds, iteminfoID, weaType);
        }
 
      


        //Here verify if ItemX7 IDS and name are available
      if(!resItemX7){
      
        return await addNewItem(id + 1, final, item_scn, item_dds, iteminfoID, weaType)
      } else if(Array.isArray(resItemX7)){
        console.log('Name found in Item X7');
        return; 

      }
     
      //Here I verify that Weapons.xml ID and name are available if name exist I return and stop all process, 
      //to let only new items be added.
     if(!resWeaponXML){
      console.log(`The ID: ${id} in Weapons.xml is not available`)
        return await addNewItem(id + 1, final, item_scn, item_dds, iteminfoID, weaType)
      } else if(Array.isArray(resWeaponXML)){
        console.log(`Item name: ${weaName} found in Weapons XML.`);
        return; 

      }

        //Here condition to verify if itemXML has valid ID and item is not duplicated.
        if(!resItemXML){
            
        return await addNewItem(id + 1, final, item_scn, item_dds, iteminfoID, weaType)
      } else if(Array.isArray(await resItemXML)){
         
        return; 

      }

      //Verify weapon lua files
        if(!resWeaponlua){
            console.log('En uso uso!');
        return await addNewItem(id + 1, final, item_scn, item_dds, iteminfoID, weaType)
      } 


      ////////////////HERE START WRITTING IN FILES IF ALL IDS AND NAMES WERE VERIFIED AND AVAILABLE////
        //Here I am reading item.x7
      const readItemx7 = await fsp.readFile(itemx7, 'utf8');
      
      //revisar esto mas tarde
        let modifyItemX7 = readItemx7.replace(/<\/itemlist>\s*$/, await makeItemx7(id, item_dds, weaName,  nameID, tipID) + '</itemlist>');
        
      
        if(!modifyItemX7){
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
      
      
        if(!modifyItemXML){
        let newItemXML = await makeItemx7(id, item_dds, weaName, nameID, tipID);
            modifyItemXML = `
<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<itemlist>
        ${newItemXML}
</itemlist>
            `;
        }


        await fsp.writeFile(itemxml, modifyItemXML, 'utf8');
      
        const readItemInfo = await fsp.readFile(iteminfox7, 'utf8');

        const itemInfoFuncs = require('./makeItemInfo');

        const buildMakeInfo = 'Make' + weaType + 'Desc';

         const callBuildInfo = itemInfoFuncs[buildMakeInfo];

         if(!callBuildInfo){
            return console.error('Call function does not exist.');
         }

         const newItemInfoDesc = callBuildInfo(nameID, tipID, weaName);
         


   let replaceItemInfo = readItemInfo.replace(`</string_table>`, `\n` + `<!-- New Item Added Below! -->` +
    `\n \t`+ `${newItemInfoDesc.NameDesc}` + `\n \t` + `\n \t` + `${newItemInfoDesc.TipDesc}` + `\n </string_table>`);

            if(!replaceItemInfo || replaceItemInfo.length === '' || replaceItemInfo.length === 0){
                replaceItemInfo = `
<string_table>

 \t ${newItemInfoDesc.NameDesc} \n 

 \t ${newItemInfoDesc.TipDesc}

</string_table> 
                `;
            }

        await fsp.writeFile(iteminfox7, replaceItemInfo, 'utf8');
        
        //Here I write Weapon Luas
        const readWeaponlua = await fsp.readFile(weaponlua, 'utf8');
            const newLuaDesc = await makeWeaponLua(resWeaponlua, weaType);
          
        let replaceInWeaponlua = readWeaponlua.replace('</weapon_lua_list>',  newLuaDesc + '</weapon_lua_list>');

        if(!replaceInWeaponlua){
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


        let replaceWeaponXML = readWeaponXML.replace('</weaponlist>', `\t\t\n` + '<!--New Item added below!-->' + `\n` + callBuildWeaponXML + '</weaponlist>');

       

        if(!replaceWeaponXML || replaceWeaponXML.length === '' || replaceWeaponXML.length === 0){
            replaceWeaponXML = `
<weaponlist>
        ${callBuildWeaponXML}
</weaponlist>
            
            `;

        }

        await fsp.writeFile(weaponxml, replaceWeaponXML, 'utf8');

        console.log(`New item added! ${weaName}`);

    } catch(e){
        console.log(e); 
    }
}



async function Ejecutar(iteminfoID, weapon_files){

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
              
            
            let i = 0;
            while(i < models.length){
            const elemento = models[i].split('.')[0];
         

                const ele_icon = 'icon_' + elemento;
          
            for(let a = 0; a < imgs.length; a++){

                if(imgs[a].length > 0){

                   const cleanImg = imgs[a].split('.')[0];
                    if(elemento.split('.')[0] === cleanImg){
                        
                      await addNewItem(inicio, final,  models[i] ,imgs[a], iteminfoID, weaType);


                    } else if(ele_icon === cleanImg){
        
                        await addNewItem(inicio, final, models[i] ,imgs[a], iteminfoID, weaType);
                    } else if(models.includes(cleanImg + '_r.scn') && models.includes(cleanImg + '_l.scn')){
                         await addNewItem(inicio, final, imgs[a].split('.')[0] + '.scn' ,imgs[a], iteminfoID, weaType);
                    }
                }
            }
                i++;
            }
        }
    }



     
}

    
 Ejecutar(iteminfoID, weapon_files);


 




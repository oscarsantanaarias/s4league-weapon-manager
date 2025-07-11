
const { root, fs, path, resources } = require('./directory');
const fsp = require('fs').promises;
 const id_range = {
    melee: [2000000, 2009999],
    guns: [2010000, 2019999],
    heavies:[2020001, 2029999],
    snipers: [2030001, 2039999],
    sentries:[2040001, 2049999],
    thrown: [2050001, 2059999],
    special: [2060001, 2069999]
    
};

function cleanTodo(string) {
  return string.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}

const itemx7 = path.join(__dirname, 'resources/xml/item.x7');
const itemxml = path.join(__dirname, 'resources/xml/item.xml')
const weaponlua = path.join(__dirname, 'resources/xml/weapon_lua.x7');
const weaponxml = path.join(__dirname, 'resources/auth/xbn/Weapons.xml');
const iteminfox7 = path.join(__dirname, 'resources/xml/iteminfo.x7');
const iteminfoStringX7 = path.join(__dirname, 'resources/language/xml/iteminfo_string_table.x7');
const iteminfoStringXML = path.join(__dirname, 'resources/language/xml/iteminfo_string_table.xml');

const melee = ['Bat', 'Breaker', 'CounterSword', 'Dagger', 'Exo' , 'Fist', 'IronBoots', 'Katana', 'PlasmaSword', 'SigmaBlade', 'TwinBlades', 'VitalClaw'];
const guns = ['Submachine', 'Revolver', 'HandGun', 'SemiRifle', 'DualMagnum', 'ShotGun', 'Homing', 'Smash', 'AirGun', 'SparkRifle', 'Assault']
const snipers = ['RainGun', 'Cannon', 'Sharpshooting'];
const thrown = ['EarthBomb', 'LightBomb', 'RescueGun'];
const heavies = ['HeavyMachineGun', 'LightMachineGun', 'Turrent', 'Gauss', 'RocketLauncher'];
const special = ['MindShock', 'MindHeal'];
const sentries = ['SentryGun', 'SentryStun'];



 
 function verifyFields(campos){
    for(const [keys, values] of Object.entries(campos)){
        if(!values){
            console.error(`The field ${keys} is missing!.`);
            return false;
        }       
    }

    return true;
}


async function verifyItemX7(id, weaName){

    return new Promise((resolve, reject) => {
        if(!id){
            reject('An error has occured: ID is not defined!.');
        }
       
        //Fix this this must be fps
       fs.readFile(itemx7, 'utf8', (error, data) => {
       
            if(error){
                reject(error.message);
            }
          
        const valor = new RegExp(`<item item_key="(${id})">`, 'g');
        const nombre = new RegExp(`<base name="(${weaName})"`, 'g');

        const matches = [...data.matchAll(valor)].map(m => parseFloat(m[1]));
        const nameMatch = [...data.matchAll(nombre)].map(m => parseFloat(m[1]));

        if(nameMatch.length > 0){

            resolve([false, 0]);
            
        } else if(matches.length > 0){
            resolve(false);
        } else {
             resolve(id);
        }
        
       });
    });
}


async function verifyItem_xml(id, weaName){
    return new Promise((resolve, reject) => {
        if(!id){
            reject('An error has occured: ID is not defined!.');
        }
      
       fs.readFile(itemxml, 'utf8', (error, data) => {
       
            if(error){
                reject(error.message);
            }
        const valor = new RegExp(`<item item_key="(${id})">`, 'g');
        const nombre = new RegExp(`<base name="(${weaName})"`, 'g');

        const matches = [...data.matchAll(valor)].map(m => parseFloat(m[1]));
        const nameMatch = [...data.matchAll(nombre)].map(m => parseFloat(m[1]));

        if(matches.length > 0){
         resolve(false);
        } else if(nameMatch.length > 0){
            console.error('The item Name already exist in the item xml File.');
            resolve([false, 0]);
        } else {
            
             resolve(id);
        }
        
       });
    });
}


async function verifyWeaponLua(id){
    return new Promise((resolve, reject) => {
        if(!id){
            reject('An error has occured: ID is not defined!.');
        }
      
       fs.readFile(weaponlua, 'utf8', (error, data) => {
            if(error){
                reject(error.message);
            }
        
        const valor = new RegExp(`lua_func item_key="(${id})"`, 'g');
        const matches = [...data.matchAll(valor)].map(m => parseFloat(m[1]));
      
        if(matches.length > 0){
            resolve(false);
        }
        resolve(id);

       });
    });
}





async function verifyInfox7(IDName, IDTip, itemNames){
   const cleanName = cleanTodo(itemNames);
            
   
    return new Promise((resolve, reject) => {
        if(!IDName){
            reject(new Error('IDName is not defined in verifyInfox7!'));
            return;
        }

        if(!IDTip){
            reject(new Error('IDTip is not defined in verifyInfox7!'));
            return;
        }

          if(!itemNames){
            reject(new Error('itemNames is not defined in verifyInfox7!'));
            return;
        }



        fs.readFile(iteminfox7, 'utf8', (error, data) => {
            if(error){
                 reject(error);
                 return;
            }

            const nameRegex = new RegExp(`<string key="NAME${IDName}"`, 'g');
            const tipRegex = new RegExp(`<string key="TIP${IDTip}"`, 'g');
            const NameVerify = new RegExp(`eng="${cleanName}" spa="${cleanName}"`, 'g');
       

        const nameMatch = [...data.matchAll(nameRegex)];
            const tipMatch = [...data.matchAll(tipRegex)];
            const itemNameMatches = [...data.matchAll(NameVerify)];
         

         if(itemNameMatches.length > 0){
           
            return resolve("nombreEncontrado");
         } else if (nameMatch.length > 0) {
                // El name ya existe
               
                return resolve(false);
            } else if (tipMatch.length > 0) {
                // El tip ya existe
                
               return resolve([false, 2]);
            } else {
                // Ambos estan libres
                return resolve({ IDName, IDTip });
            }

        });
    });
}



async function verifyString_tablex7(IDName, IDTip, itemNames){
   const cleanName = cleanTodo(itemNames);
            
   
    return new Promise((resolve, reject) => {
        if(!IDName){
            reject(new Error('IDName is not defined in Verify ItemInfo String tablex7!'));
            return;
        }

        if(!IDTip){
            reject(new Error('IDTip is not defined in Verify ItemInfo String tablex7!'));
            return;
        }

          if(!itemNames){
            reject(new Error('itemNames is not defined in Verify ItemInfo String tablex7!'));
            return;
        }



        fs.readFile(iteminfox7, 'utf8', (error, data) => {
            if(error){
                 reject(error);
                 return;
            }

            const nameRegex = new RegExp(`<string key="NAME${IDName}"`, 'g');
            const tipRegex = new RegExp(`<string key="TIP${IDTip}"`, 'g');
            const NameVerify = new RegExp(`eng="${cleanName}" spa="${cleanName}"`, 'g');
       

        const nameMatch = [...data.matchAll(nameRegex)];
            const tipMatch = [...data.matchAll(tipRegex)];
            const itemNameMatches = [...data.matchAll(NameVerify)];
         

         if(itemNameMatches.length > 0){
           
            return resolve("nombreEncontrado");
         } else if (nameMatch.length > 0) {
                // El name ya existe
               
                return resolve(false);
            } else if (tipMatch.length > 0) {
                // El tip ya existe
                
               return resolve([false, 2]);
            } else {
                // Ambos estan libres
                return resolve({ IDName, IDTip });
            }

        });
    });
}



async function verifyString_tableXML(IDName, IDTip, itemNames){
   const cleanName = cleanTodo(itemNames);
            
   
    return new Promise((resolve, reject) => {
        if(!IDName){
            reject(new Error('IDName is not defined in Verify ItemInfo String tableXML!'));
            return;
        }

        if(!IDTip){
            reject(new Error('IDTip is not defined in Verify ItemInfo String table XML!'));
            return;
        }

          if(!itemNames){
            reject(new Error('itemNames is not defined in Verify ItemInfo String table XML!'));
            return;
        }



        fs.readFile(iteminfox7, 'utf8', (error, data) => {
            if(error){
                 reject(error);
                 return;
            }

            const nameRegex = new RegExp(`<string key="NAME${IDName}"`, 'g');
            const tipRegex = new RegExp(`<string key="TIP${IDTip}"`, 'g');
            const NameVerify = new RegExp(`eng="${cleanName}" spa="${cleanName}"`, 'g');
       

        const nameMatch = [...data.matchAll(nameRegex)];
            const tipMatch = [...data.matchAll(tipRegex)];
            const itemNameMatches = [...data.matchAll(NameVerify)];
         

         if(itemNameMatches.length > 0){
           
            return resolve("nombreEncontrado");
         } else if (nameMatch.length > 0) {
                // El name ya existe
               
                return resolve(false);
            } else if (tipMatch.length > 0) {
                // El tip ya existe
                
               return resolve([false, 2]);
            } else {
                // Ambos estan libres
                return resolve({ IDName, IDTip });
            }

        });
    });
}





async function verifyWeaponsXML(id, name) {
    return new Promise((resolve, reject) => {
        if(!id){
            console.error('ID is not defined!');
            resolve(false);
        }

         if(!name){
            console.error('Name is not defined!');
            resolve(false);
        }

  

        fs.readFile(weaponxml, 'utf8', (error, data) => {
            if(error){
                return reject(error);
                 
            }

            for(let i = 1; i <= 5; i++){
            //En esta función haces un loop for(let i=1; i<=5; i++) para revisar campos value1 a value5 para nombre, pero en cada iteración haces resolve inmediatamente (sea verdadero o falso). Esto hará que solo la primera iteración se ejecute realmente.
            //Lo ideal sería hacer el ciclo, acumular resultados y solo resolver al final.          
            // // // O mejor, construir una expresión regular que abarque los 5 valores en una sola búsqueda.
            
      const findName = new RegExp(`value${i}="${name}"`, 'g');
        const findID = new RegExp(`<weapon item_key="(${id})">`, 'g');

                const matchesName = [...data.matchAll(findName)].map(m => m);
                const matchesID = [...data.matchAll(findID)].map(m => m);
                

                if(matchesName.length > 0){
                   
                    return resolve([false, 2]);
                }

                if(matchesID.length > 0){
                   
                    return resolve(false);
                }

                return resolve(id);
                

            }


        })
        


    });


}








module.exports = {verifyFields, verifyInfox7, verifyItemX7, verifyWeaponLua, verifyItem_xml , verifyString_tablex7, verifyString_tableXML, verifyWeaponsXML , iteminfoStringX7, iteminfoStringXML, iteminfox7 , itemxml,  itemx7, weaponlua, weaponxml, melee, id_range, special, sentries, guns, snipers, heavies, thrown};
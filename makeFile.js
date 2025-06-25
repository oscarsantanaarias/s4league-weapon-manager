const { getDirectories, root } = require('./directory');
const weapons_lua = require('./weapon_lua_func');



async function makeItemx7(newID, icon, displayName, nameID, tipID){

	if(!nameID){
		return console.error('No esta el nameID definido');
	} else if(!tipID){
		return console.error('No tipID definido.')
	}

    return `
        <item item_key="${newID}">
        <base name="${displayName}" name_key="NAME${nameID || 'No name available.'}" attrib_comment_key="TIP${tipID || 'No comments available.'}" feature_comment_key="F_TEXT272" sex="unisex"/>
        <graphic icon_image="${icon}"/>
        <esperchip/>
        <etc/>
        <sequence/>
    </item> 
    `;
}



async function makeWeaponLua(id, weaType){

 return new Promise((resolve, reject) => {
        if(!id){
         console.error('ID is not defined in MakeLua.');
         return reject(false);
        }

        if(!weaType){
         console.log('Weapon Type is not defined in Weapon Lua.');
        return reject(false);
        }

    const allLuaFunctions = require('./weapon_lua_func');

        const funct = 'get' + weaType;
        const buildingLuaFn = allLuaFunctions[funct];
        if(!buildingLuaFn){
         console.error(`Function ${weaType} does not exist.`);
         return reject(false);
        }

        const result = buildingLuaFn(id);

        if(!result){
       return reject(false);
        }

        
        resolve(result);

 });
       
}



//async function makeWeaponLua(id){
//    if(!id){
//        return `Please, enter a valid ID`;
//    }
//
//    const dir_arr = getDirectories(root).weapon;
//
//    const weapon_lua_info = [];
//
//    for(const weaponType in dir_arr){
//        for(const [weapon, value] of Object.entries(dir_arr[weaponType])){
//            if(weapon){
//                const functionName = 'get' + weapon;
//               
//                const callLuaFunc = weapons_lua[functionName];
//                if(!callLuaFunc){
//                    console.log('El faltante es', functionName);
//                    return;
//                }
//                
//                const result = callLuaFunc(id);
//               weapon_lua_info.push(result);
//
//             }
//
//        }
//        
//    }
//
//    return weapon_lua_info;
//}
//







module.exports = { makeItemx7, makeWeaponLua };

const path = require('path');
const fs = require('fs');
const root = path.join(__dirname);
const resources = path.join(__dirname, 'resources')


function getDirectories(root){
    const folders = fs.readdirSync(resources).reduce((acc, dir) => {
        if(!acc[dir]){
            acc[dir] = {};
        }

        return acc
    }, {});

    for(const folden in folders){
        const rutaNivel1 = path.join(resources, folden);
        
       const t1 = fs.readdirSync(rutaNivel1)
       
        t1.forEach(item => {
               
                if(!folders[folden][item] && folden === 'weapon'){
                    folders[folden][item] = {};
                
                    if(item && item.length > 0){
                        const weaponFolders = path.join(resources, folden, item);
                        const subMelee = fs.readdirSync(weaponFolders);
                        subMelee.forEach(subf => {
                            folders[folden][item][subf] = {};
                            const subMeleeFiles = path.join(resources, folden, item, subf);
                            const subMeleeRead = fs.readdirSync(subMeleeFiles)
                            subMeleeRead.forEach(inFolderMelee => {

                                folders[folden][item][subf][inFolderMelee] = [];

                                const melee_resource = path.join(resources, folden, item, subf, inFolderMelee);
                                const readMeleeResource = fs.readdirSync(melee_resource);        
                                   readMeleeResource.forEach(itemFiles => { 
                                        folders[folden][item][subf][inFolderMelee].push(itemFiles);
                                    });
                            });
                            
                        });
                    } 
                };

                if(!folders[folden][item] && folden !== 'weapon'){
                    if(item !== 'xbn'){
                         folders[folden][item.split('.')[0] + item.split('.')[1]] = item;
                    } else {
                         folders[folden][item] = {};
                        const xbnpath = path.join(resources, 'auth' , item);
                        const readxbnfolder = fs.readdirSync(xbnpath);
                        folders[folden][item] = {weaponsxml: readxbnfolder[0] };
                    }
                  
                };
        });
    }; 

   

return folders;
}   




module.exports = { getDirectories, root, fs, path, resources };


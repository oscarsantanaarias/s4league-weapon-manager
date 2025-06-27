# s4league-weapon-manager

PLEASE replace the resources folder with the one here, this includes all of them.
https://www.mediafire.com/file/7oi292jul8mcd33/resources.rar/file

IF YOU WANT TO ADD THE ITEMS TO THE DATABASE change this to true: const useDB = false;


A tool that automatically adds all weapons to the S4League game X7 and XML files.
NODE.JS install required for this and then just open CMD as an admin, go to the folder location and do node main.js to execute the script.

The tool works based on files in each folders.
You must have model + Imgs with same name, but Imgs can have icon_ example: model > Plasma.scn and Img can be icon_plasma or plasma.
As shown below:  
            //As shown here it looks for icon + weapon name it can be modified up to you.
                const ele_icon = 'icon_' + elemento;
          
            for(let a = 0; a < imgs.length; a++){

                if(imgs[a].length > 0){

                   const cleanImg = imgs[a].split('.')[0];
                    if(elemento.split('.')[0] === cleanImg){
                        
                      await addNewItem(inicio, final,  models[i] ,imgs[a], iteminfoID, weaType);
              } else if(ele_icon === cleanImg){          
  }

  There is many weapons that have more than one scn > model file like twin blades, counter, turret, etc.
It won't pass for turrent as it usually has more than 3 and it would be hard to figure out + it's not a weapon people really use.
I will add it later, but for those with 2 will work just fine.

VERY IMPORTANT FOR WEAPONS WITH MORE THAN 1 SCN > MODEL FILE like CS/Twin OR OTHERS make sure you add at the end example counter_r and counter_l  
weapon_name_r or l or it won't add it as shown below: 
            //here searches for the _r and l
if(models.includes(cleanImg + '_r.scn') && models.includes(cleanImg + '_l.scn')){
                         await addNewItem(inicio, final, imgs[a].split('.')[0] + '.scn' ,imgs[a], iteminfoID, weaType);
}

EACH WEAPON must be in their specific folder.

How it works?
It verifies the IDS and Weapon names in each file and if ID not available it recalls the function and add + 1 to the ID and keep searching for an available in range ID.
If Item name found it will just skip the item.

This is the version 1.0 of the script which I will update later on + will add costumes + maps and other files support to make it a lot easier.

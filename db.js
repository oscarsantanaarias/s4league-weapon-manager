const { app } = require('electron');

const mysql = require('mysql2/promise');
const path = require('path');
const fsp = require('fs').promises;





async function addtodb(id, name, host, user, pass, db){
    let conexion;
    try {
    //here you make your conexion to db.
     conexion = await mysql.createConnection({
        host: host,
        user: user,
        password: pass,
        database: db
    });

 

    //Very important, this are the tables for my database shop_iteminfos and shop_items, each database is different
    //Remember to verify yours and make sure it has the same names and columns.
    const shop_iteminfo = "SELECT * FROM shop_iteminfos WHERE ShopItemId = ?";
    const shop_items = "SELECT * FROM shop_items WHERE id = ?";

    const [ itemInfo ] = await conexion.query(shop_iteminfo, [id]);
    const [shopItems ] = await conexion.query(shop_items, [id]);

   

    if(itemInfo.length > 0 || shopItems.length > 0){
        console.error(`The ID ${id} is already in use in the database, asigning a new ID ${id + 1}`);
        //if the ID exists, it returns false and in main I call main with the new ID, which automatically generates it in main,
        return 2;
    }

    await conexion.beginTransaction();
    
    //Here if your columns are named different change the name of each field as required
    const addtoShopItemInfos = "INSERT INTO shop_iteminfos(ShopItemId, PriceGroupId, EffectGroupId, DiscountPercentage, Type) VALUES(? ,? ,? ,? ,?)";
    
    //I added 6/4/0/2 because in my database those are  PriceGroupId, EffectGroupId, DiscountPercentage, Type 
     await conexion.query(addtoShopItemInfos, [id, 6, 4, 0, 2]);
    //Here I add the item in shop_items table
    const addtoShopItem = "INSERT INTO shop_items(id, RequiredGender, RequiredLicense, Colors, UniqueColors, RequiredLevel,LevelLimit, RequiredMasterLevel, IsOneTimeUse, IsDestroyable, MainTab, SubTab) Values(?,?,?,?,?,?,?,?,?,?,?,?) ";
    await conexion.query(addtoShopItem, [id, 0, 0, 1, 0, 0, 0, 0, 0, 1, 2, 1]);

    await conexion.commit();
    console.log(`${name} was added with ID ${id} to database.`);

    return true;

    } catch(e){

      try {
        await conexion.rollback();
        console.log('Changes were reversed due to', e.message);
        return [false, 2];
    } catch (rollbackError) {
        console.error('Error reversed back changes:', rollbackError.message);
        return [false, 2];
    }

    } finally {
        if (conexion) await conexion.end();
    }
}

module.exports = { addtodb };

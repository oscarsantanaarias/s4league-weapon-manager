const mysql = require('mysql2/promise');


async function testConnection(host, user, pass, db){
    let test;
try {
    test = await mysql.createConnection({
    host: host,
    user: user,
    password: pass,
    database: db
});


    await test.end();
    return true;

} catch(e){
    if(test){
        await test.end();
    }
   
    return [false, { error: `An error occured connecting to the database: ${e.message}`}]
}



}



module.exports = { testConnection };
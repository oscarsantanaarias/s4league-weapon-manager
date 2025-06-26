const mysql = require('mysql2/promise');
const { host, user, pass, db } = require('./db');

async function testConnection(){
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
    console.error('An error occured testing connection: ', e.message);
    return false;
}



}



module.exports = { testConnection };
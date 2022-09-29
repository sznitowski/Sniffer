const mysql = require("mysql")
require('dotenv').config();

//coneccion geomaco (funciona)
      const connection = mysql.createConnection({
  connectionLimit: 10,
  host: process.env.HOSTGEO,
  user: process.env.USERGEO,
  password: process.env.PASSWORDGEO,
  database: process.env.DBGEO
});    

// conection geomaco2 (no funciona)
 /*  const connection = mysql.createConnection({
  connectionLimit: 10,
  host: process.env.HOSTGEO2, //192.1.0.17/GEOMACO
  user: process.env.USERGEO2,
  password: process.env.PASSWORDGEO2,
  database: process.env.DBGEO2
})  */ 

// conection sol (funciona)
/*    const connection = mysql.createConnection({
  connectionLimit: 10,
  host: process.env.HOSTSOL, //192.1.0.1/sol
  user: process.env.USERSOL,
  password: process.env.PASSWORDSOL,
  database: process.env.DBSOL
});   */ 

// conection sol2 ( hay que probar )
/*     const connection = mysql.createConnection({
 connectionLimit: 10,
 host: process.env.HOSTSOL2,
 user: process.env.USERSOL2,
 password: process.env.PASSWORDSOL2,
 database: process.env.DBSOL2
});     */

// conection sissol (funciona correctamente)
  /*  const connection = mysql.createConnection({
  connectionLimit: 10,
  host: process.env.HOSTSISSOL,
  user: process.env.USERSISSOL,
  password: process.env.PASSWORDSISSOL,
  database: process.env.DBSISSOL
});   */ 

// conection supermat (funciona)
 /*    const connection = mysql.createConnection({
  connectionLimit: 10,
  host: process.env.HOSTSMAT,
  user: process.env.USERSMAT,
  password: process.env.PASSWORDSMAT,
  database: process.env.DBSMAT
});  
 */
module.exports = { connection }
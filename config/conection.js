const mysql = require("promise-mysql");

function connetcLocal() {
    const connection = mysql.createPool({
      host: HOSTTEST,
      user: USERTEST,
      password: PASSWORDTEST,
      database: DBTEST,
      timezone: 'utc',
      define: { timestamps: false },
      //charset: 'latin1',
      //collate: 'latin1_general_ci',
      queueLimit: 0,
      waitForConnection: true
    });
  
    return connection;
  }

  const query = 'SELECT ConnectId , ConnectIP, ConnectUsr, ConnectPass, ConnectPass, ConnectDB, ConnectName' + 
  'FROM cr_connect , WHERE ConnectID = 1';

pool.getConnection(function(err, connection) {
    // Usa la conexión
    connection.query( query, function(err, rows) {
         // Y listo con la conexión.
        connection.release();
        
        // No use la conexión aquí, se ha devuelto al grupo.
    });
});

// El grupo emitirá un evento de conexión cuando se establezca una nueva conexión dentro del grupo.
// Si necesita establecer variables de sesión en la conexión antes de que se use, puede escuchar el evento de conexión.
pool.on('connection', function (connection) {
    console.log("Connected");
    // Establecer una variable de sesión
    //connection.query('SET SESSION auto_increment_increment=1')
});

// <<< CERRAR LA CONEXIÓN USANDO pool.end >>>
// Cuando haya terminado de usar el grupo, debe finalizar todas las conexiones o Node.js
// El bucle de eventos permanecerá activo hasta que el servidor MySQL cierre las conexiones.
// Esto se hace normalmente si el grupo se utiliza en un script o cuando se intenta cerrar un servidor correctamente.
// Para finalizar todas las conexiones en el grupo, use el método end en el grupo:

pool.end(function (err) {
    // todas las conexiones en el pool han terminado
});

module.exports = { loc: connetcLocal }
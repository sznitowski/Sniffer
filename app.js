const express = require("express")
const app = express();
const connection = require("./config/conection").connection
const PORT = process.env.PORT || 5000;
const fs = require('fs');

   /* connection.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
}); 

var table='USE `SOL`';

connection.query(table, function (err, result) {
  if (err) throw err;
  console.log("Result: " + result);
  });  */

var query='SELECT * FROM information_schema.processlist WHERE db="SOL"';
var query = 'show full processlist';

setInterval(() => {
  
  connection.query(query, function (err, result) {
    if (err) throw err;
    result.map(x => {
      if (x.Info !== 'show full processlist' && x.Info !== null) {
        
        fs.appendFile("log.sql", x.Info + "\n", function (err) {
          if (err) {
            return console.log(err);
          }
          //console.log("The file was saved!");
        });
        
        console.log(x.Info)
      }
    }
    );
    console.log(result);
    result.map(x => {console.log(x)});
    
  });
}, 0.000000001);

0.0000001

/* var query='SELECT info FROM information_schema.processlist WHERE Command="Query" AND user!="root"';
connection.query(query, function (err, result) {
  if (err) throw err;
  console.log("Result: ");
  console.log(result);
}); */

app.listen(PORT, console.log(`Server is running on PORT ${PORT}`));
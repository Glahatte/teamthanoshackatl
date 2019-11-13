const express = require('express');
const fileUpload = require('express-fileupload');
const bodyParser = require('body-parser');
const mysql = require('mysql');
const path = require('path');
const app = express();

if(process.env.JAWSDB_URL) {
  var connection = mysql.createConnection(process.env.JAWSDB_URL);
  connection.connect(function(err){
    if(err) {
      console.log(err);
    }
    else {
      console.log("connected");
    }
  });
} else {
  console.log("NO JAWS URL");
}
global.connection = connection;

var port = process.env.PORT || 3000;
app.set('port', process.env.port || port);
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json()); 
app.use(express.static(path.join(__dirname, 'public')));
app.set('views', __dirname + '/views');
  app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
  });
app.listen(port, function () {
    console.log('Example app listening on port', port);
});
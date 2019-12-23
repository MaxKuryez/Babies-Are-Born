var express = require('express');
var app = express();
var sqlite3 = require('sqlite3');
var path = require('path');
var db = new sqlite3.Database(path.join(__dirname + '/db/AgeList.db'));
var port = 3000;


app.use(express.static(__dirname));

app.get('/', function (request, response) {
    response.sendFile(path.join(__dirname + '/Index.html'));
});

app.listen(port, function () {
    console.log('app works');
});

app.get('/list', function (request, response) {
    db.all('SELECT * FROM list', function (err, rows) {
        if (err) {
            console.log('Error' + err);
        } else {
            response.send(rows);
        }
    })
}); 

app.get('/fertility', function (request, response) {
    db.all('SELECT * FROM fertility', function (err, rows) {
        if (err) {
            console.log('Error' + err);
        } else {
            response.send(rows);
        }
    })
});
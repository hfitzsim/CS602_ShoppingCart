const express = require('express');
const bodyParser = require('body-parser');
const handlebars = require('express-handlebars');
const path = require('path');

const app = express();
const port = 3000;

const mongo = require('mongodb').MongoClient;
const dbUrl = 'mongodb://127.0.0.1:27017/projectDB';

mongo.connect(dbUrl, (err, db) => {
    if (err) throw err;
    console.log('Successfully connected to', db.s.databaseName);
    db.close();
})

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
/*
const routes = require('');
app.use('/', routes);
*/

app.set('views', path.join(__dirname, 'views'));
app.engine('handlebars', 
    handlebars({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

app.use(express.static(__dirname + '/public'));

app.get('/', (req, res) => {
    res.type('text/html');
    res.send(`<h1>HOME</h1>`);
});

app.listen(port, () => {
    console.log('http://localhost/' + port);
})
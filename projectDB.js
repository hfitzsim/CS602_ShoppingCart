const mongoose = require('mongoose');

const credentials = require('./credentials.js');

const dbUrl = 'mongodb+srv://' + 
credentials.username + 
':' + credentials.password + 
'@' + credentials.host + 
'/' + credentials.database;

let connection = null;
let model = null;

let Schema = mongoose.Schema;

let customerSchema = new Schema({
    fname: 'string', 
    lname: 'string',
    email: 'string'
}, {
    collection: 'customer'
});

let adminSchema = new Schema({
    id: 'string',
    username: 'string', 
    password: 'string',
    firstName: 'string',
    lastName: 'string'
}, {
    collection: 'admin'
});

let productSchema = new Schema({
    id: 'string',
    title: 'string', 
    desc: 'string', 
    price: 'number',
    qty: 'number'
})



const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

// Imports routes
const products = require('./routes/product.route');
const users = require('./routes/users.route'); 
const app = express();


let dev_db_url = 'mongodb://localhost:27017/new_crud';
let mongoDB = process.env.MONGODB_URI || dev_db_url;
mongoose.connect(mongoDB,{ useNewUrlParser: true });
mongoose.Promise = global.Promise;
let db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

app.use('/users',users);
app.use('/products', products);
let port = 1234;
app.listen(port, () => {
    console.log('Server is up and running on port numner ' + port);
});   
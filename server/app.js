const dotenv = require('dotenv');
const mongoose = require('mongoose');
const express = require('express');
const { listen } = require('express/lib/application');
const app = express();

dotenv.config({path:'./config.env'});
require('./db/conn');
// const User = require('./model/userSchema');

app.use(express.json());

// Link router files to make out routes
app.use(require('./router/auth'));

const PORT = process.env.PORT;

// Middleware
const middleware = (req,res,next) => {
    console.log("Hello my middleware");
    next();
}

// app.get('/', (req,res) => {
//     res.send('Hello world from the server');
// });

app.get('/signin',middleware , (req,res) => {
    res.send('Hello signin from the server');
});

app.get('/signup', (req,res) => {
    res.send('Hello signup from the server');
});

app.get('/cart', (req,res) => {
    res.send('Hello cart from the server');
});

app.get('/about', (req,res) => {
    console.log("About Page.");
    res.send('Hello about from the server');
});

app.listen(PORT, () => {
    console.log(`Server is running at port no ${PORT}`);
})
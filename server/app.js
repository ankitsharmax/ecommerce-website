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

app.listen(PORT, () => {
    console.log(`Server is running at port no ${PORT}`);
})
const mongoose = require('mongoose');

const transactionSchema = new mongoose.Schema({
    emailid: {
        type:String,
        required:true
    },
    id: {
        type:String,
        required:true
    },
    name: {
        type:String,
        required:true
    },
    price: {
        type:Number,
        required:true
    },
    qty: {
        type:Number,
        required:true
    },
    totalprice: {
        type:Number,
        required:true
    }
})

const Transaction = mongoose.model('TRANSACTION',transactionSchema);

module.exports = Transaction;
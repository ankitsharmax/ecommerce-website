const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

require('../db/conn');
const User = require('../model/userSchema');

router.get('/', (req,res) => {
    res.send('Hello world from the server route.js');
});

// USING PROMISES
// router.post('/register', (req, res) => {

//         const { name, email, phone, password, cpassword} = req.body;

//         if (!name || !email || !phone || !password || !cpassword) {
//             return res.status(422).json({error: "Please specify all fields."});
//         }

//         User.findOne({email:email})
//         .then((userExist) => {
//             if (userExist) {
//                 return res.status(422).json({error: "Email already exist"});
//             }

//             const user = new User({name, email, phone, password, cpassword});

//             user.save().then(() => {
//                 res.status(201).json({message:"user registered successfully"});
//             }).catch((err) => res.status(500).json({error:"Failed to register"}));
//         }).catch(err => {console.log(err); });

//         // res.json({message:req.body})
//         // res.send("My router page");
// })

// |||||||||||||||||||||||||||||||USING ASYNC AWAIT||||||||||||||

// register route
router.post('/register', async (req, res) => {

        const { name, email, phone, password, cpassword} = req.body;

        if (!name || !email || !phone || !password || !cpassword) {
            return res.status(422).json({error: "Please specify all fields."});
        }

        try {
            const userExist = await User.findOne({email:email});

            if (userExist){
                return res.status(422).json({error: "Email already exist"});
            } 
            else if (password != cpassword){
                return res.status(422).json({error: "Password and Confirm password does not match"});
            } else {
                const user = new User({name, email, phone, password, cpassword});
                // hash the password
                await user.save();

                return res.status(201).json({message:"user registered successfully"});
            }

        } catch (err) {
            console.log(err);
        }
    }
);

// Login route
router.post('/signin', async (req,res) => {
    // console.log(req.body); // get user filled data
    // res.json({message:"awesome"});

    try {
        let token;
        const {email, password} = req.body;

        if (!email || !password) {
            return res.status(422).json({error: "Please specify all fields."});
        } 

        // read data from database
        const userLogin = await User.findOne({email:email});

        // console.log(userLogin);

        if (userLogin) {
            const isMatch = await bcrypt.compare(password, userLogin.password);

            token = await userLogin.generateAuthToken();
            console.log(token);

            res.cookie("jwtoken", token, {
                expires:new Date(Date.now() + 25892000000),
                httpOnly:true
            })

            if (!isMatch){
                res.status(400).json({message:"Email or password does not match"});
            } else {
                res.json({message:"User login successfully"})
            }
        } else {
            res.status(400).json({message:"Email or password does not match"});
        }
        

    } catch(err) {
        console.log(err);
    }
})

// Logout process
router.get('/logout', (req, res) => {
    console.log("Logout process");
    res.clearCookie('jwtoken',{path:'/'});
    res.status(200).send('User Logut');
})

module.exports = router;
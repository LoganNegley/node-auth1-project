const bcrypt = require('bcryptjs');//creates hash for password---dont pass password use hash created
const express = require('express');

const router = express.Router();
const db = require('../users/users_model');

router.post('/register', (req,res) =>{//create new user 
    const user = req.body//req.body getting user.name and user.password
    const hash = bcrypt.hashSync(user.password, 8)//create hash with users password and number of times to run through generator 2 power of 8 times
    user.password = hash;//take password and replace with new hash created

    db.add(user)
        .then(saved =>{
            res.status(201).json(saved)
        })
        .catch(error =>{
            console.log(error)
            res.status(500).json({errorMessage:'Error with database'})
        })
});

router.post('/login', (req,res) =>{
    const {userName, password} = req.body

    db.findBy({userName})
    .then(([user]) =>{//destructuring array [user] with give me an object of the first one and should only be one
        if(user && bcrypt.compareSync(password, user.password)){//comparing what user puts as password and hash in db
            req.session.user = userName;
            res.status(200).json({message: 'Welcome'})
        }else{
            res.status(401).json({message: 'invalid creds'})
        }
    })
    .catch(error =>{
        console.log(error)
        res.status(500).json({errorMessage: 'Error with database'})
    })
});

router.delete('/logout', (req,res) =>{
    req.session.destroy((error) =>{
        if(error){
            res.json('unable to logout')
        }else{
            res.json('logged out')
        }
    })
})

module.exports = router;
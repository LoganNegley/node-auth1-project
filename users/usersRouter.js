const router = require('express').Router();
const Users = require('./users_model');
const restricted = require('../auth/restriced-middleware');

router.get('/', restricted, (req,res) =>{
    Users.find()
    .then(users =>{
        res.status(200).json(users)
    })
    .catch(error =>{res.status(500).json({errorMessage:'Error with database'})})
});

module.exports = router
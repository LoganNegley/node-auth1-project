const router = require('express').Router();
const Users = require('./users_model');

router.get('/', (req,res) =>{
    if(req.session && req.session.user){
    Users.find()
    .then(users =>{
        res.status(200).json(users)
    })
    .catch(error =>{res.status(500).json({errorMessage:'Error with database'})})
}else{
    res.status(401).json({
        message:'Not logged in'
    });
}
});

module.exports = router
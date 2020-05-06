const bcrypt = require('bcrypt');//creates hash for password---dont pass password use hash created

const router = express.Router();
const db = require('../routes/users_model');

router.post('/register', (req,res) =>{//create new user 
    const user = req.body//req.body getting user.name and user.password
    const hash = bcrypt.hashSync(user.password, 8)//create hash with users password and number of times to run through generator 2 power of 8 times
    user.password = hash;//take password and replace with new hash created

});

router.post('/login', (req,res) =>{
    
});

module.exports = router;
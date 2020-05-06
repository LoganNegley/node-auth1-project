const bcrypt = require('bcrypt');

const router = express.Router();
const Users = require('../routes/users_model');

router.post('/register', (req,res) =>{
    const user = req.body
    // const hash = bycrypt()


})

module.exports = router;
const express = require ('express');
const session = require('express-session');

const usersRouter = require('../users/usersRouter');
const authRouter = require('../auth/auth-router');

const server = express();

const sessionConfig = {
name:'chocolate-chip',
secret: 'mysecret',
cookie:{
    maxAge: 3600 * 1000,
    secure: false,
    httpOnly: true,
},
resave: false,
saveUnitialized: false,

};

server.use(express.json());
server.use('/api/users', usersRouter);
server.use('/api/auth', authRouter);
server.use(session(sessionConfig));

server.get('/', (req, res) =>{
    res.json({
        api:'running'
    })
});

module.exports = server;
const express = require ('express');
const session = require('express-session');
const knexSessionStore = require('connect-session-knex')(session);

const usersRouter = require('../users/usersRouter');
const authRouter = require('../auth/auth-router');

const server = express();

const sessionConfig = {
name:'session',
secret: 'mysecret',
cookie:{
    maxAge: 3600 * 1000,
    secure: false,
    httpOnly: true,
},
resave: false,
saveUninitialized: false,

store: new knexSessionStore(
    {
        knex:require('../data/db.config'),
        tablename:'sessions',
        sidfieldname: 'sid',
        createtable: true,
        clearInterval: 3600 * 1000
    }
)
};

//Global Middleware
server.use(express.json());
server.use(session(sessionConfig));

// Routes
server.use('/api/users', usersRouter);
server.use('/api/auth', authRouter);

//Test api
server.get('/', (req, res) =>{
    res.json({
        api:'running'
    })
});

module.exports = server;
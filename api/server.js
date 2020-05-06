const express = require ('express');

const usersRouter = require('../routes/usersRouter');

const server = express();

server.use(express.json());
server.use('api/users', usersRouter);

server.get('/', (req, res) =>{
    res.json({
        api:'running'
    })
});

module.exports =server;
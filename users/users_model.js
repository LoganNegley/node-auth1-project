const db = require('../data/db.config');

function find(){

};

function findBy(user_name){
    return db('user')
    .where(user.userName === user_name)
};

function add(user){
    return db('user')
    .insert(user)
};

function findById(id){

};

module.exports = {
    add,
    find,
    findBy,
    findById
}
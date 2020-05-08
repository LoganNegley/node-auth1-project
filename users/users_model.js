const db = require('../data/db.config');

function find(){
return db('user')
};

function findBy(userName){
    return db('user')
    .where(userName)
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
const db = require('../data/db.config');

function find(){

};

function findBy(filter){

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
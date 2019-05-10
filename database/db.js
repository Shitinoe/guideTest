var MongoClient = require("mongodb").MongoClient;
var ObjectID = require('mongodb').ObjectID;
var dbname = "db_contributor";
var url = "mongodb://localhost:27017";
const mongoOptions = {useNewUrlParser : true};

var state = {
    db : null
};

var connect = (cb) =>{
    if(state.db)
        cb();
    else{
        MongoClient.connect(url,mongoOptions,(err,client)=>{
            if(err)
                cb(err);
            else{
                state.db = client.db(dbname);
                cb();
            }
        });
    }
}

const getPrimaryKey = (_id)=>{
    return ObjectID(_id);
}

const getDB = ()=>{
    return state.db;
}
module.exports = {getDB,connect,getPrimaryKey};
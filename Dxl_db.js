// const mongoose = require ('mongoose');
// const connect = mongoose.connect('mongodb://localhost:27017/DXL_Online', { useNewUrlParser: true }, 
//     (err) => {
//         if(!err) {
//             console.log('Success, Connected to Database!');
//         } else {
//             console.log('Error Connecting to Database');
//         }
//     });

//     const ObjectID = mongoose.ObjectID;
// const DxlSchema = require('./Dxl_DataModel');
// const getPrimaryKey = require ('./Dxl_DataModel');
// module.exports = mongoose;



const MongoClient = require ('mongodb').MongoClient;

const ObjectID = require ('mongodb').ObjectId;

const dbName = "DXL_Online";

const Url = "mongodb://localhost:27017"

const mongoOption = { useNewUrlParser : true };

const state = { db : null };

const connect = (cb) => {
    if (state.db) (cb);
    else {
        MongoClient.connect(Url, mongoOption, (err, client) => {
            if (err) {
                cb(err);
            } else {
                state.db = client.db(dbName)
                cb();
            }
        });
    }
};

const getPrimaryKey = (_id) => {
    return ObjectID(_id);
};

const getDB = () => {
    return state.db
};


module.exports = {getDB, connect, getPrimaryKey};
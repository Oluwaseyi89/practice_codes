/*const mongoose = require('mongoose');
const uuid = require ('uuid');
var DxlSchema = new mongoose.Schema({
    UserID: {
        type: String,
        required: "Required"
    },
    FirstName: {
        type: String
    },
    LastName: {
        type: String
    },
    eMail: {
        type: String
    },
    passWord: {
        type: String
    }
});
const ObjectID = require('mongoose').ObjectID;
const getPrimaryKey = (_id) => {
    return ObjectID(_id);
};
mongoose.model("Online_Users", DxlSchema);
module.exports = DxlSchema; */


const { JSONCookies } = require('cookie-parser');
const Joi = require ('joi');

function validateUser (user) {
    const schema = Joi.object().keys({
        // UserID: Joi.string().min(5).max(30).required(),
    
        first_name: Joi.string().min(2).max(30).required(),
    
        last_name: Joi.string().min(2).max(30).required(),
    
        email: Joi.string().email().min(5).max(30).required(),
    
        password: Joi.string().min(5).max(30).required(),

        phone_no: Joi.number().min(11).required(),

        country: Joi.string().min(5).max(30).required(),

        state: Joi.string().min(3).max(30).required(),

        street_add: Joi.string().min(10).max(50).required(),
        
        date_of_birth: Joi.date().required()

    }).options({ abortEarly: false });

    return schema.validate(user);
}


module.exports = validateUser;
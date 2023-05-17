const mongoose = require('mongoose')
//const Joi = require('joi');
const Schema = mongoose.Schema



const mySchemaUsers = new Schema({
    name:{type:String},
    email:{type:String},
    password:{type:String},
   

})

/*mySchemaUsers.methods.joiValidate = function(obj) {
	var Joi = require('joi');
	var schema = {
		name: Joi.types.String().min(6).max(30).required(),
        email: Joi.types.String().email().required(),
        password: Joi.types.String().min(8).max(30).regex(/[a-zA-Z0-9]{3,30}/).required(),
		//password: Joi.types.String().min(8).max(30).regex(/[a-zA-Z0-9]{3,30}/).required()
			
	}
	return Joi.validate(obj, schema);
}*/



module.exports = mongoose.model('User' , mySchemaUsers)
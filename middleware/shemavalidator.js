
const Joi = require('joi');

const schema = Joi.object({
    name: Joi.string().alphanum().min(3).max(30).required(),
    email: Joi.string().email().required(),
    password: Joi.string().min(8).regex(/[a-zA-Z0-9]{3,30}/).required()
    //password: Joi.types.String().min(8).max(30).regex(/[a-zA-Z0-9]{3,30}/).required(),
})


module.exports = {
    schema,
}
const Joi = require("joi");


const registerValidation = (data) => {
  const schema = Joi.object({
    username: Joi.string().min(6).required(),
    email: Joi.string().min(6).required()
    .email(),
    password: Joi.string().min(6).required(),
  });
  return schema.validate(data);
};

const loginValidation = (data) => {
    const schema = Joi.object({
      email: Joi.string().min(6).required()
      .email(),
      password: Joi.string().min(6).required(),
    });
    return schema.validate(data);
  };

  const todoValidation = (data) => {
    // console.log(data)
    const schema = Joi.object({
      title: Joi.string().min(3).required(),
      status: Joi.boolean(),
    });
    
    return schema.validate(data);
  }
module.exports.registerValidation = registerValidation;
module.exports.loginValidation = loginValidation;
module.exports.todoValidation= todoValidation;
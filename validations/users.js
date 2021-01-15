const Joi = require('@hapi/joi');
const { BAD_REQUEST } = require('http-status-codes');

const createUserSchema = Joi.object().keys({
  name: Joi.string().required(),
  surname: Joi.string().required(),
});

module.exports.validateAddBody = (request, response, next) => {
  validateBody(request, response, next, createUserSchema);
};

const validateBody = (request, response, next, schema) => {
  const result = Joi.validate(request.body, schema);
  if (result.error) {
    console.log(result.error);
    return response.status(BAD_REQUEST).json(result.error.details);
  }
  next();
};

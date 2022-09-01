const validator = require('../../helpers/validate');
const { validationConfig, formatValidationErrors } = require("../../../config/validation.config");

/**
 * validate users
 *
 * @param req
 * @param res
 * @param next
 */
const usersCreate = (req, res, next) => {
  const validationRule = {
    "email": "required|string|email|max:255|unique:User,email",
    "name": "required|string|max:255",
    "password": "required|string|max:255|min:4|confirmed",
    "gender": "required|string|max:6",
    "phone": "required|string|max:20",
  }
  validator(req.body, validationRule, {}, (err, status) => {
    if (!status) {
      res.status(validationConfig.errorCode).send(formatValidationErrors(err));
    } else {
      next();
    }
  });
}

module.exports = {
  usersCreate,
}
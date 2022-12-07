const { body, validationResult } = require("express-validator");

const registerRules = [
    body("username", "username is required!").notEmpty(),
    body("email", "email is required and valid!").isEmail(),
    body("password", "password must have at least 6 characters").isLength({
        min: 6,
    }),
];
const loginRules = [
    body("email", "email is required and valid!").isEmail(),
    body("password", "password is required").isLength({
        min: 6,
    }),
];
const verifyPost = [body("text", "post text is required!").notEmpty()];
const validator = (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }
    next();
};
module.exports = {
    registerRules,
    validator,
    loginRules,
    verifyPost
};
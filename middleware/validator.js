const Validator = require("fastest-validator");

const v = new Validator();

module.exports = (schema, input) => (req, res, next) => {
  const check = v.compile(schema);
  const error = check(input(req))
  if (error.length)
    return res.status(400).json({
      message: "data yang anda masukkan salah",
      error,
    });
  return next();
};

const Validator = require("fastest-validator");

const v = new Validator();

module.exports = (schema, input) => (req, res, next) => {
  const check = v.compile(schema);
  if (!check)
    return res.status(400).json({
      message: "data yang anda masukkan salah",
      error: check(input(req)),
    });
  return next();
};

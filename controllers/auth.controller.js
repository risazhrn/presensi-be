const userService = require("../services/user.service");
const validate = require("../middleware/validator");

module.exports.login = [
  validate(
    {
      username: "string",
      password: "string",
    },
    (req) => req.body
  ),
  async (req, res) => {
    try {
      const { username, password } = req.body;
      const dataUser = await userService.getUser(username, password);
      if (!dataUser) throw Error("username dan password salah");
      const { password: _, ...user } = dataUser;
      return res.json({ message: "Berhasil login", data: user });
    } catch (error) {
      return res.status(400).json({ message: error.message });
    }
  },
];

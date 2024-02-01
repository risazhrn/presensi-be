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
      const dataToken = await userService.login(username, password);
      if (!dataToken) throw new Error("username dan password salah");
      return res.json({ message: "Berhasil login", data: dataToken });
    } catch (error) {
      return res.status(400).json({ message: error.message });
    }
  },
];

module.exports.me = async(req, res) => {
  try {
    const {authorization} = req.headers
    if (!authorization) throw new Error('Tidak ada token') 

    const [authType, token] = authorization.split(' ')
    if (authType !== 'Bearer' || !token) throw new Error('token tidak valid')
    
    const user = await userService.getUser(token);
    return res.json({ message: "Berhasil mendapatkan data user", data: user });
    
  } catch(error) {
    console.log(error)
    return res.status(400).json({ message: error.message });
  }
}

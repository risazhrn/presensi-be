const axios = require("axios");

const GATEWAY_API = process.env.GATEWAY_API

module.exports.login = async(username, password) => {
  return (await axios.post(
    GATEWAY_API+"/auth/login",
    {
      username,
      password
    }
  )).data;
};

module.exports.getUser = async(token) => {
  return (await axios.get(
    GATEWAY_API+"/auth/user",
    {
      headers: {
        Authorization: 'Bearer '+token
      }
    }
  )).data;
};

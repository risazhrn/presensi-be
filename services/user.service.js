const axios = require("axios");

module.exports.getUser = async(username, password) => {
  const dataUser = (await axios.get(
    "https://gist.githubusercontent.com/risazhrn/3d63a7a76dd6958b0c71efbfc8fad0d4/raw/7f85e0ee8d5522285d97681371b90a59c3182bc8/getUser.json"
  )).data;
  return dataUser.find(
    (data) => data.username === username && data.password === password
  );
};

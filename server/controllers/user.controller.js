const jsonwebtoken = require("jsonwebtoken");
const User = require("../models/User");

module.exports = {
  sendUserData(req, res) {
    const token = req.headers.authorization;
    jsonwebtoken.verify(token, "secret", (err, decoded) => {
      if (decoded.user) {
        const { _id } = decoded.user;
        User.findOne({ _id }, (e, user) => {
          res.json({
            user
          });
        });
      }
    });
  }
};

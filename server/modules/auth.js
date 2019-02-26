const jsonwebtoken = require('jsonwebtoken');
const User = require('./../models/User');

module.exports = {
  isLoggedIn(req, res, next) {
    const token = req.headers.authorization;
    // console.log(req.headers.authorization);
    jsonwebtoken.verify(token, 'secret', (err, decoded) => {
      if (decoded.user) {
        const { _id } = decoded.user;
        User.findOne({ _id }, (e, user) => {
          if (e || !user) {
            return res.status(401);
          }
          next();
        });
      }
    });
  },
};

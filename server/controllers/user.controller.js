// import modules
const jwt = require('jsonwebtoken');
const User = require('../models/User');

module.exports = {
  verifyJWT: (req, res) => {
    const myJWTSecretKey = 'tinyKindness';
    try {
      const tokenDecodedData = jwt.verify(req.params.token, myJWTSecretKey);
      User.findById(tokenDecodedData.id, (err, data) => {
        if (!err) return res.json(data);
        return err;
      });
    } catch (error) {
      return res.json({
        error: true,
        data: error,
      });
    }
    return null;
  },

  authCallback: (req, res) => {
    // set JWT secret Key
    const myJWTSecretKey = 'tinyKindness';
    const { _id } = req.user;
    const obj = { id: _id };

    // creat JWT token - jwt.sign(obj, )
    const token = jwt.sign(obj, myJWTSecretKey);

    // send JWt token via res - res.redirect('')
    console.log(token, 'token');
    res.redirect(`/?token=${token}`);
  },

  userInfo: (req, res) => {
    console.log(req.params, 'params in userInfo');
    const { username } = req.params;
    const twitterHandle = username.split('@')[1];
    console.log(twitterHandle, 'username');
    User.findOne({ userName: twitterHandle }, (err, data) => {
      if (!err) res.json(data);
    });
  },

};

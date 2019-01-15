module.exports = {

  isLoggedIn: (req, res, next) => {
    if (req.user) {
      return next();
    } else {
      res.status(400).send({ message: 'Please login to get your information.'});
    }
  },

};

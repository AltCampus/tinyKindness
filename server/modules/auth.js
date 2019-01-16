module.exports = {
  // isLoggedIn function check user logged-in or not
  isLoggedIn: (req, res, next) => {
    if (req.user) {
      return next();
    }
    return res.status(400).send({ message: 'Please login to get your information.' });
  },

};

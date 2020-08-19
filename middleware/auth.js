const jwt = require('jsonwebtoken');
const config = require('config');

// FIRST WE EXPORT MIDDLEWARE FUNCTION
module.exports = function (req, res, next) {
  // GET TOKEN FROM HEADER
  const token = req.header('x-auth-token');

  //CHECK IF NO TOKEN
  if (!token) {
    return res.status(401).json({ msg: 'No token, authorization denied' });
  }

  //VERIFY TOKEN
  try {
    const decoded = jwt.verify(token, config.get('jwtSecret'));
    req.user = decoded.user;
    next();
  } catch (err) {
    res.status(401).json({ msg: 'Token invalid' });
  }
};

const jwt = require("jsonwebtoken");
require("dotenv").config();

function jwtGenerator(user_id) {
  const payload = {
    user: {
      id: user_id,
    },
  };

  const jwtSecret = process.env.JWT_SECRET;

  const expiresIn = process.env.JWT_EXPIRES_IN;

  return jwt.sign(payload, jwtSecret, {
    expiresIn,
  });
}

module.exports = jwtGenerator;

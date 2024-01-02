module.exports = function (req, res, next) {
  const { firstName, lastName, email, password } = req.body;

  function validEmail(userEmail) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(userEmail);
  }

  if (req.path === "/auth/signup") {
    console.log(!email.length);
    if (![firstName, lastName, email, password].every(Boolean)) {
      return res.json("Missing Credentials");
    } else if (!validEmail(email)) {
      return res.json("Invalid Email");
    }
  } else if (req.path === "/auth/login") {
    if (![email, password].every(Boolean)) {
      return res.json("Missing Credentials");
    } else if (!validEmail(email)) {
      return res.json("Invalid Email");
    }
  }

  next();
};

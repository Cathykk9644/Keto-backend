const BaseController = require("./baseController");
const bcrypt = require("bcrypt");
const jwtGenerator = require("../utils/jwtGenerator");
const saltRounds = 10;

class AuthController extends BaseController {
  constructor(model, userModel) {
    super(model);
    this.userModel = userModel;
  }

  // ============= NEW USER SIGNUP =============== //
  signup = async (req, res) => {
    const { firstName, lastName, email, password } = req.body;

    if (!firstName || !lastName || !email || !password) {
      return res.status(400).json({
        error: true,
        msg: "Error: Please fill in all required fields and try again.",
      });
    }

    try {
      // Step 1 : Check if user exists
      const existingUser = await this.model.findOne({
        where: { email: email },
      });

      if (existingUser) {
        return res.status(400).json({
          error: true,
          msg: "Error: An account with this email address already exists.",
        });
      }

      // Step 2 :Hash the password
      const hashedPassword = await bcrypt.hash(password, saltRounds);

      // Step 3 :Create new user
      const newUser = await this.model.create({
        firstName,
        lastName,
        email,
        password: hashedPassword,
      });

      // Step 4: Generate tokens
      const jwtToken = jwtGenerator(newUser.id);

      // Step 5: Respond with JWT Token
      res.json({ jwtToken });
    } catch (err) {
      console.error(err.message);
      res.status(500).send("Server error");
    }
  };

  // ================ USER LOGIN ================= //
  login = async (req, res) => {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({
        error: true,
        msg: "Error: Invalid Credentials",
      });
    }

    try {
      const user = await this.model.findOne({ where: { email: email } });

      if (!user) {
        return res.status(401).json("Invalid Credentials");
      }

      const validPassword = await bcrypt.compare(password, user.password);
      if (!validPassword) {
        return res.status(401).json({
          error: true,
          msg: "Error: Invalid Credentials",
        });
      }

      const jwtToken = jwtGenerator(user.id);

      res.json({ jwtToken });
    } catch (err) {
      console.error(err.message);
      res.status(500).send("Server error");
    }
  };

  // ================ USER LOGOUT ================= //
  // This is typically a client-side action; the server can only advise the client to discard the token.
  logout = async (req, res) => {
    res.json({
      msg: "Logged out successfully. Please remove the token on the client side.",
    });
  };

  // ============== DELETE USER ACCOUNT ============ //
  deleteOneUser = async (req, res) => {
    const { userId } = req.params;

    try {
      // Step 1: Find the user by ID
      const user = await this.model.findOne({ where: { id: userId } });

      if (!user) {
        return res.status(404).json({
          error: true,
          msg: "Error: User not found.",
        });
      }

      // Step 2: Delete the user
      await user.destroy();

      // Step 3: Respond to the client
      res.json({ msg: "User deleted successfully." });
    } catch (err) {
      console.error(err.message);
      res.status(500).send("Server error");
    }
  };
}

module.exports = AuthController;

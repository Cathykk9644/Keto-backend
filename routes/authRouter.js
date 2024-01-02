const express = require("express");
const router = express.Router();
const validInfo = require("../middlewares/validinfo");
const authorize = require("../middlewares/authorize");

class AuthRouter {
  constructor(controller) {
    this.controller = controller;
  }
  routes() {
    router.post("/signup", validInfo, this.controller.signup);
    router.post("/login", validInfo, this.controller.login);
    router.post("/logout", authorize, this.controller.logout);
    router.delete("/:userId", authorize, this.controller.deleteOneUser);

    return router;
  }
}

module.exports = AuthRouter;

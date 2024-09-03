const express = require("express");
const router = express.Router();
class ProfilesRouter {
  constructor(controller) {
    this.controller = controller;
  }
  routes() {
    // GET route to get an existing user profile by userID
    router.get(
      "/:userId",
      this.controller.getUserProfile.bind(this.controller)
    );

    // PUT route to update an existing user profile by ID
    router.put(
      "/:userId",
      this.controller.updateUserProfile.bind(this.controller)
    );

    return router;
  }
}

module.exports = ProfilesRouter;

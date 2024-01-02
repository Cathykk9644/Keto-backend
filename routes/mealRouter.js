const express = require("express");
const router = express.Router();

class MealsRouter {
  constructor(controller) {
    this.controller = controller;
  }
  routes() {
    router.get("/", this.controller.getAllMeals.bind(this.controller));
    router.get("/:mealId", this.controller.getMealById.bind(this.controller));

    // POST route to create a new meal
    router.post("/", this.controller.createMeal.bind(this.controller));

    // PUT route to update an existing meal by ID
    router.put("/:mealId", this.controller.updateMeal.bind(this.controller));

    // DELETE route to delete an existing meal by ID
    router.delete("/:mealId", this.controller.updateMeal.bind(this.controller));

    return router;
  }
}

module.exports = MealsRouter;

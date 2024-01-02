const BaseController = require("./baseController");

class MealController extends BaseController {
  constructor(model, mealModel) {
    super(model);
    this.mealModel = mealModel;
  }

  // Retrieve all meals
  getAllMeals = async (req, res) => {
    try {
      let result = await this.model.findAll();
      return res.status(200).json({
        success: true,
        data: result,
        msg: "Success: here are all the meals on Simply Keto",
      });
    } catch (error) {
      return res.status(400).json({
        error: true,
        msg: "Error: unable to retrieve meal data.",
      });
    }
  };

  // Get a specific meal by its ID
  getMealById = async (req, res) => {
    const { id } = req.params;
    try {
      const meal = await this.model.findByPk(id);
      if (!meal) {
        return res.status(404).json({
          success: false,
          msg: `No meal found with the ID ${id}`,
        });
      }
      return res.status(200).json({
        success: true,
        data: meal,
        msg: "Success: Meal data retrieved",
      });
    } catch (error) {
      return res.status(400).json({
        error: true,
        msg: `Error: unable to retrieve data for meal with ID ${id}.`,
      });
    }
  };

  // Create a new meal
  createMeal = async (req, res) => {
    try {
      const newMeal = await this.model.create(req.body);
      return res.status(201).json({
        success: true,
        data: newMeal,
        msg: "Meal successfully created",
      });
    } catch (error) {
      return res.status(400).json({
        error: true,
        msg: "Error: unable to create meal.",
      });
    }
  };

  // Update an existing meal by ID
  updateMeal = async (req, res) => {
    const { mealId } = req.params;
    try {
      const updatedMeal = await this.model.update(req.body, {
        where: { id: mealId },
        returning: true,
        plain: true,
      });

      if (!updatedMeal[1]) {
        return res.status(404).json({
          success: false,
          msg: `No meal found with the ID ${mealId}`,
        });
      }

      return res.status(200).json({
        success: true,
        data: updatedMeal[1],
        msg: "Meal successfully updated",
      });
    } catch (error) {
      return res.status(400).json({
        error: true,
        msg: `Error: unable to update meal with ID ${mealId}.`,
      });
    }
  };

  // Delete an existing meal by ID
  deleteMeal = async (req, res) => {
    const { mealId } = req.params;
    try {
      const numDeleted = await this.model.destroy({
        where: { id: mealId },
      });

      if (numDeleted === 0) {
        return res.status(404).json({
          success: false,
          msg: `No meal found with the ID ${mealId}`,
        });
      }

      return res.status(200).json({
        success: true,
        msg: "Meal successfully deleted",
      });
    } catch (error) {
      return res.status(400).json({
        error: true,
        msg: `Error: unable to delete meal with ID ${mealId}.`,
      });
    }
  };
}

module.exports = MealController;

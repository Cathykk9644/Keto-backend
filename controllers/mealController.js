const BaseController = require("./baseController");

require("dotenv").config();
const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);

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

  createCheckoutSession = async (req, res) => {
    try {
      // Assuming `req.body` contains `items` which is an array of meal objects

      const lineItems = req.body.items.map((item) => {
        return {
          price_data: {
            currency: "usd",
            product_data: {
              name: item.name,
              images: [item.image],
            },
            unit_amount: Math.round(parseFloat(item.price) * 100),
          },
          quantity: item.quantity,
        };
      });

      const session = await stripe.checkout.sessions.create({
        payment_method_types: ["card"],
        line_items: lineItems,
        shipping_address_collection: { allowed_countries: ["HK"] },
        shipping_options: [
          {
            shipping_rate_data: {
              type: "fixed_amount",
              fixed_amount: { amount: 0, currency: "usd" },
              display_name: "Free shipping",
              delivery_estimate: {
                minimum: { unit: "hour", value: 1 },
                maximum: { unit: "hour", value: 2 },
              },
            },
          },
        ],
        phone_number_collection: {
          enabled: true,
        },
        mode: "payment",
        success_url: `${process.env.CLIENT_PORT}/paymentsuccess`,
        cancel_url: `${process.env.CLIENT_PORT}/`,
      });

      res.status(200).json({ sessionId: session.id });
    } catch (error) {
      res.status(400).json({
        error: true,
        msg: `Error creating checkout session: ${error.message}`,
      });
    }
  };
}

module.exports = MealController;

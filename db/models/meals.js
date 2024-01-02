"use strict";

const { Model } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  class Meal extends Model {
    static associate(models) {
      // M-M relationship with users table through user_favorites table
      this.belongsToMany(models.user, {
        through: models.user_favorite,
      });

      // M-M relationship with restaurants table through restaurant_meals table
      this.belongsToMany(models.restaurant, {
        through: models.restaurant_meal,
      });

      // M-M relationship with orders table through order_meals table
      this.belongsToMany(models.order, {
        through: models.order_meal,
      });
    }
  }

  Meal.init(
    {
      name: DataTypes.STRING,
      price: DataTypes.DECIMAL(10, 2),
      meal_picture: DataTypes.STRING(2048),
    },

    {
      sequelize,
      modelName: "meal",
      tableName: "meals",
      underscored: true,
    }
  );

  return Meal;
};

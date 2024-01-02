"use strict";

const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Restaurant_meal extends Model {
    static associate(models) {
      this.belongsTo(models.restaurant, { foreignKey: "restaurant_id" });
      this.belongsTo(models.meal, { foreignKey: "meal_id" });
    }
  }
  Restaurant_meal.init(
    {
      restaurant_id: {
        type: DataTypes.INTEGER,
        references: {
          model: "restaurant",
          key: "id",
        },
      },
      meal_id: {
        type: DataTypes.INTEGER,
        references: {
          model: "meal",
          key: "id",
        },
      },
    },
    {
      sequelize,
      modelName: "restaurant_meal",
      tableName: "restaurant_meals",
      underscored: true,
    }
  );
  return Restaurant_meal;
};

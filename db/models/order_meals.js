"use strict";

const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Order_meal extends Model {
    static associate(models) {
      this.belongsTo(models.order, { foreignKey: "order_id" });
      this.belongsTo(models.meal, { foreignKey: "meal_id" });
    }
  }
  Order_meal.init(
    {
      order_id: {
        type: DataTypes.INTEGER,
        references: {
          model: "order",
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
      modelName: "order_meal",
      tableName: "order_meals",
      underscored: true,
    }
  );
  return Order_meal;
};

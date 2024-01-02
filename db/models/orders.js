"use strict";

const { Model } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  class Order extends Model {
    static associate(models) {
      // Order has 1-1 relationship with deliveries table
      this.hasOne(models.delivery, { foreignKey: "delivery_id" });

      // Order belongs to User 1-M
      this.belongsTo(models.user, {
        as: "user", // optional alias
      });

      // Order has many Meal M-M
      this.belongsToMany(models.meal, {
        through: "order_meals",
      });

      // Order belongs to Restaurant 1-M
      this.belongsTo(models.restaurant, {
        as: "restaurant", // optional alias
      });
    }
  }

  Order.init(
    {
      user_id: {
        allowNull: false,
        type: DataTypes.INTEGER,
        references: {
          model: "user",
          key: "id",
        },
      },

      restaurant_id: {
        allowNull: false,
        type: DataTypes.INTEGER,
        references: {
          model: "restaurant",
          key: "id",
        },
      },

      amount_paid: DataTypes.DECIMAL(10, 2),

      delivery_address: DataTypes.STRING,

      status: {
        allowNull: false,
        type: DataTypes.ENUM(
          "preparing",
          "on the way",
          "delivered",
          "canceled"
        ),
        defaultValue: "preparing",
      },
    },

    {
      sequelize,
      modelName: "order",
      tableName: "orders",
      underscored: true,
    }
  );

  return Order;
};

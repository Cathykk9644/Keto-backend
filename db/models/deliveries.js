"use strict";

const { Model } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  class Delivery extends Model {
    static associate(models) {
      // 1-1 relationship with deliveries table
      this.belongsTo(models.delivery_partner, {
        as: "delivery_partners",
        foreignKey: "delivery_partner_id",
      });

      // 1-1 relationship with orders table
      this.belongsTo(models.order, {
        as: "orders",
        foreignKey: "order_id",
      });
    }
  }

  Delivery.init(
    {
      pickup_time: DataTypes.DATE,
      delivery_time: DataTypes.DATE,
    },

    {
      sequelize,
      modelName: "delivery",
      tableName: "deliveries",
      underscored: true,
    }
  );

  return Delivery;
};

"use strict";

const { Model } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  class Delivery_partner extends Model {
    static associate(models) {
      // 1-1 relationship with deliveries table
      this.hasOne(models.delivery, {
        as: "deliveries",
        foreignKey: "delivery_partner_id",
      });
    }
  }

  Delivery_partner.init(
    {
      name: DataTypes.STRING,

      phone: DataTypes.STRING,

      is_active: DataTypes.BOOLEAN,
    },

    {
      sequelize,
      modelName: "delivery_partner",
      tableName: "delivery_partners",
      underscored: true,
    }
  );

  return Delivery_partner;
};

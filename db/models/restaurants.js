"use strict";

const { Model } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  class Restaurant extends Model {
    static associate(models) {
      // Restaurant belongs to User 1-M
      this.belongsTo(models.user, {
        as: "owner", // optional alias
        foreignKey: "user_id",
      });
    }
  }

  Restaurant.init(
    {
      user_id: {
        allowNull: false,
        type: DataTypes.INTEGER,
        references: {
          model: "user",
          key: "id",
        },
      },
      name: DataTypes.STRING,
      address: DataTypes.STRING,
    },

    {
      sequelize,
      modelName: "restaurant",
      tableName: "restaurants",
      underscored: true,
    }
  );

  return Restaurant;
};

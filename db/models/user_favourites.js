"use strict";

const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class User_favorite extends Model {
    static associate(models) {
      this.belongsTo(models.user, { foreignKey: "user_id" });
      this.belongsTo(models.meal, { foreignKey: "meal_id" });
    }
  }
  User_favorite.init(
    {
      user_id: {
        type: DataTypes.INTEGER,
        references: {
          model: "user",
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
      modelName: "user_favorite",
      tableName: "user_favorites",
      underscored: true,
    }
  );
  return User_favorite;
};

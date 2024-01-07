"use strict";

const { Model } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    static associate(models) {
      // 1-M relationship with restaurants table
      this.hasMany(models.restaurant, {
        as: "restaurants",
        foreignKey: "user_id",
      });

      // 1-M relationship with orders table
      this.hasMany(models.order, {
        as: "orders",
        foreignKey: "user_id",
      });

      // M-M relationship with meals table through user_favorites table
      this.belongsToMany(models.meal, {
        through: "user_favorites",
      });
    }
  }

  User.init(
    {
      firstName: {
        type: DataTypes.STRING,
        // Use `field` option to map to the actual database column name
        field: "first_name",
      },
      lastName: {
        type: DataTypes.STRING,
        field: "last_name",
      },

      email: {
        unique: true,
        type: DataTypes.STRING,
      },

      password: DataTypes.STRING,

      is_admin: {
        type: DataTypes.BOOLEAN,
        defaultValue: false,
      },

      profile_picture: {
        type: DataTypes.STRING(2048),
      },

      email_verified: {
        type: DataTypes.BOOLEAN,
        defaultValue: false,
      },

      verification_token: DataTypes.TEXT,

      refresh_token: DataTypes.TEXT,
    },

    {
      sequelize,
      modelName: "user",
      tableName: "users",
      underscored: true,
      timestamps: true,
    }
  );

  return User;
};

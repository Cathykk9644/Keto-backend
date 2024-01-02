"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    // 5. TERTIARY TABLE FOR ORDERS
    await queryInterface.createTable("orders", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },

      user_id: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {
          model: "users",
          key: "id",
        },
        onDelete: "CASCADE",
        onUpdate: "CASCADE",
      },

      meal_id: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {
          model: "meals",
          key: "id",
        },
        onDelete: "CASCADE",
        onUpdate: "CASCADE",
      },

      restaurant_id: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {
          model: "restaurants",
          key: "id",
        },
        onDelete: "CASCADE",
        onUpdate: "CASCADE",
      },

      amount_paid: {
        allowNull: false,
        type: Sequelize.DECIMAL(10, 2),
        defaultValue: 0,
      },

      delivery_address: {
        allowNull: false,
        type: Sequelize.STRING,
      },

      status: {
        allowNull: false,
        type: Sequelize.ENUM(
          "preparing",
          "on the way",
          "delivered",
          "canceled"
        ),
        defaultValue: "preparing",
      },

      created_at: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updated_at: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });

    // 6. TERTIARY TABLE FOR DELIVERIES
    await queryInterface.createTable("deliveries", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },

      delivery_partner_id: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {
          model: "delivery_partners",
          key: "id",
        },
        onDelete: "CASCADE",
        onUpdate: "CASCADE",
      },

      order_id: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {
          model: "orders",
          key: "id",
        },
        onDelete: "CASCADE",
        onUpdate: "CASCADE",
      },

      pickup_time: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      delivery_time: {
        allowNull: false,
        type: Sequelize.DATE,
      },

      created_at: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updated_at: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });

    // 7. TERTIARY TABLE FOR RESTAURANT_MEALS
    await queryInterface.createTable("restaurant_meals", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },

      restaurant_id: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {
          model: "restaurants",
          key: "id",
        },
        onDelete: "CASCADE",
        onUpdate: "CASCADE",
      },

      meal_id: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {
          model: "meals",
          key: "id",
        },
        onDelete: "CASCADE",
        onUpdate: "CASCADE",
      },
    });

    // 8. TERTIARY TABLE FOR USER_FAVORITES
    await queryInterface.createTable("user_favorites", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },

      user_id: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {
          model: "users",
          key: "id",
        },
        onDelete: "CASCADE",
        onUpdate: "CASCADE",
      },

      meal_id: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {
          model: "meals",
          key: "id",
        },
        onDelete: "CASCADE",
        onUpdate: "CASCADE",
      },
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("orders");
    await queryInterface.dropTable("deliveries");
    await queryInterface.dropTable("restaurant_meals");
    await queryInterface.dropTable("user_favorites");
  },
};

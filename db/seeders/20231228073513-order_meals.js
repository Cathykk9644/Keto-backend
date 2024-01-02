"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    // ===== 9: ORDER_MEALS ===== //
    await queryInterface.bulkInsert("order_meals", [
      {
        order_id: 1,
        meal_id: 1,
      },

      {
        order_id: 1,
        meal_id: 4,
      },

      {
        order_id: 1,
        meal_id: 6,
      },

      {
        order_id: 2,
        meal_id: 9,
      },

      {
        order_id: 3,
        meal_id: 9,
      },

      {
        order_id: 4,
        meal_id: 9,
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("order_meals", null, {});
  },
};

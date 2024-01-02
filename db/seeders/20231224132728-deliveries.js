"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    // ===== 8: DELIVERIES ===== //
    await queryInterface.bulkInsert("deliveries", [
      {
        delivery_partner_id: 1,
        order_id: 1,
        pickup_time: new Date(),
        delivery_time: new Date(),
        created_at: new Date(),
        updated_at: new Date(),
      },

      {
        delivery_partner_id: 2,
        order_id: 2,
        pickup_time: new Date(),
        delivery_time: new Date(),
        created_at: new Date(),
        updated_at: new Date(),
      },

      {
        delivery_partner_id: 3,
        order_id: 3,
        pickup_time: new Date(),
        delivery_time: new Date(),
        created_at: new Date(),
        updated_at: new Date(),
      },

      {
        delivery_partner_id: 4,
        order_id: 4,
        pickup_time: new Date(),
        delivery_time: new Date(),
        created_at: new Date(),
        updated_at: new Date(),
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("deliveries", null, {});
  },
};

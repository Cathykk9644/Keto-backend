"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    // ===== 4: RESTAURANTS ===== //
    await queryInterface.bulkInsert("restaurants", [
      {
        user_id: 1,
        name: "Keto Feast Haven",
        address:
          "2/F, Golden Dragon Building,168 Queen's Road Central, Sheung Wan, Hong Kong",
        created_at: new Date(),
        updated_at: new Date(),
      },

      {
        user_id: 1,
        name: "Keto Express",
        address:
          "15/F, Tower 3, Ocean View Court, 88 Causeway Road, Causeway Bay, Hong Kong",
        created_at: new Date(),
        updated_at: new Date(),
      },

      {
        user_id: 1,
        name: "Zesty Zucchini's",
        address:
          "Unit 2102, Prosperity Tower, 6 Times Square Road, Tsuen Wan, New Territories, Hong Kong",
        created_at: new Date(),
        updated_at: new Date(),
      },

      {
        user_id: 1,
        name: "Pure Palate Bistro",
        address:
          "Suite 303, The Metropolis Tower, 223 King's Road, North Point, Hong Kong",
        created_at: new Date(),
        updated_at: new Date(),
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("restaurants", null, {});
  },
};

"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    // ===== 5: ORDERS ===== //
    await queryInterface.bulkInsert("orders", [
      {
        user_id: 1,
        meal_id: 2,
        restaurant_id: 1,
        amount_paid: 12.4,
        delivery_address:
          "20/F, Central Tower, 28 Queen's Road Central, Central, Hong Kong",
        status: "preparing",
        created_at: new Date(),
        updated_at: new Date(),
      },

      {
        user_id: 2,
        meal_id: 4,
        restaurant_id: 2,
        amount_paid: 12.44,
        delivery_address:
          "Flat B, 15/F, Block 4, Golden Mile Tower, 98 Austin Road, Tsim Sha Tsui, Kowloon, Hong Kong",
        status: "on the way",
        created_at: new Date(),
        updated_at: new Date(),
      },

      {
        user_id: 3,
        meal_id: 6,
        restaurant_id: 3,
        amount_paid: 16.4,
        delivery_address:
          "Unit 1001, 10/F, Tower 1, Lippo Centre, 89 Queensway, Admiralty, Hong Kong",
        status: "delivered",
        created_at: new Date(),
        updated_at: new Date(),
      },

      {
        user_id: 4,
        meal_id: 9,
        restaurant_id: 4,
        amount_paid: 16.9,
        delivery_address:
          "Room 1204, 12/F, Tower 3, The Harbourside, 1 Austin Road West, West Kowloon, Hong Kong",
        status: "canceled",
        created_at: new Date(),
        updated_at: new Date(),
      },
    ]);

    // ===== 6: RESTAURANT_MEALS ===== //
    await queryInterface.bulkInsert("restaurant_meals", [
      {
        restaurant_id: 1,
        meal_id: 4,
      },

      {
        restaurant_id: 1,
        meal_id: 6,
      },

      {
        restaurant_id: 1,
        meal_id: 9,
      },

      {
        restaurant_id: 2,
        meal_id: 11,
      },

      {
        restaurant_id: 3,
        meal_id: 11,
      },

      {
        restaurant_id: 4,
        meal_id: 11,
      },
    ]);

    // ===== 7: USER_FAVORITES ===== //
    await queryInterface.bulkInsert("user_favorites", [
      {
        user_id: 1,
        meal_id: 4,
      },

      {
        user_id: 1,
        meal_id: 6,
      },

      {
        user_id: 3,
        meal_id: 9,
      },

      {
        user_id: 4,
        meal_id: 9,
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("orders", null, {});

    await queryInterface.bulkDelete("restaurant_meals", null, {});
    await queryInterface.bulkDelete("user_favorites", null, {});
  },
};

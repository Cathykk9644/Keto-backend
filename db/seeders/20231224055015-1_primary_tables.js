"use strict";

const bcrypt = require("bcrypt");
const saltRounds = 10;

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    // ===== 1: USERS ===== //
    await queryInterface.bulkInsert("users", [
      {
        first_name: "Susan",
        last_name: "Evercool",
        email: "susan@test.com",
        password: await bcrypt.hash("susanPassword699", saltRounds),
        is_admin: true,
        profile_picture:
          "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aGFwcHklMjB3b21hbnxlbnwwfHwwfHx8MA%3D%3D",
        email_verified: true,
        refresh_token: "",

        created_at: new Date(),
        updated_at: new Date(),
      },

      {
        first_name: "Jimmy",
        last_name: "Brown",
        email: "jimmy@test.com",
        password: await bcrypt.hash("jimmyPassword609", saltRounds),
        is_admin: false,
        profile_picture:
          "https://plus.unsplash.com/premium_photo-1682096358356-5ffbe52b7aa1?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8aGFwcHklMjBtYW58ZW58MHx8MHx8fDA%3D",
        email_verified: true,
        refresh_token: "",
        created_at: new Date(),
        updated_at: new Date(),
      },

      {
        first_name: "Tom",
        last_name: "Lau",
        email: "Tom@test.com",
        password: await bcrypt.hash("TomPassword649", saltRounds),
        is_admin: false,
        profile_picture:
          "https://images.unsplash.com/photo-1507591064344-4c6ce005b128?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YXNpYW4lMjBndXl8ZW58MHx8MHx8fDA%3D",
        email_verified: true,
        refresh_token: "",
        created_at: new Date(),
        updated_at: new Date(),
      },

      {
        first_name: "Sarah",
        last_name: "Calm",
        email: "Sarah@test.com",
        password: await bcrypt.hash("SarahPassword669", saltRounds),
        is_admin: false,
        profile_picture:
          "https://images.unsplash.com/photo-1527856263669-12c3a0af2aa6?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8c3BvcnR5JTIwZ2lybHxlbnwwfHwwfHx8MA%3D%3D",
        email_verified: true,
        refresh_token: "",
        created_at: new Date(),
        updated_at: new Date(),
      },
    ]);

    // ===== 2: MEALS ===== //
    await queryInterface.bulkInsert("meals", [
      {
        name: "Beef Stroganoff",
        price: 9.66,
        meal_picture:
          "https://hips.hearstapps.com/hmg-prod/images/delish-202001-keto-beef-stroganoff-0130-landscape-pf-1583437740.jpg?crop=0.6668421052631579xw:1xh;center,top&resize=1200:*",
        created_at: new Date(),
        updated_at: new Date(),
      },

      {
        name: "Keto Lasagna",
        price: 12.4,
        meal_picture:
          "https://hips.hearstapps.com/hmg-prod/images/181016-delish-seo-00153-1648562685.jpg?crop=0.383xw:0.862xh;0.228xw,0.0510xh&resize=980:*",
        created_at: new Date(),
        updated_at: new Date(),
      },

      {
        name: "Chetta Chicken",
        price: 11.9,
        meal_picture:
          "https://hips.hearstapps.com/hmg-prod/images/bruschetta-grilled-chicken-1673365203.jpg?crop=0.491xw:1.00xh;0.111xw,0&resize=980:*",
        created_at: new Date(),
        updated_at: new Date(),
      },

      {
        name: "Lobster Salad",
        price: 12.44,
        meal_picture:
          "https://healthyrecipesblogs.com/wp-content/uploads/2022/10/lobster-salad-2.jpg",
        created_at: new Date(),
        updated_at: new Date(),
      },

      {
        name: "Keto Prok Chops",
        price: 13.6,
        meal_picture:
          "https://hips.hearstapps.com/hmg-prod/images/20191210-keto-pork-chops-delish-ehg-6333-1576865432.jpg?crop=0.645xw:0.694xh;0.0544xw,0.00122xh&resize=980:*",
        created_at: new Date(),
        updated_at: new Date(),
      },

      {
        name: "Beef Tenderloin",
        price: 16.4,
        meal_picture:
          "https://hips.hearstapps.com/del.h-cdn.co/assets/17/38/1506012246-beef-tenderloin-delish.jpg?crop=1.0xw:1xh;center,top&resize=980:*",
        created_at: new Date(),
        updated_at: new Date(),
      },

      {
        name: "Breaded Shrimp",
        price: 12.8,
        meal_picture:
          "https://hips.hearstapps.com/vidthumb/images/delish-keto-breaded-shrimp-still002-1532006293.jpg?crop=0.376xw:1.00xh;0.320xw,0&resize=980:*",
        created_at: new Date(),
        updated_at: new Date(),
      },

      {
        name: "Keto pizza",
        price: 12.4,
        meal_picture:
          "https://images.immediate.co.uk/production/volatile/sites/30/2022/01/Keto-Pizza-17a5061.jpg?quality=90&webp=true&resize=600,545",
        created_at: new Date(),
        updated_at: new Date(),
      },

      {
        name: "Keto Cheesecake",
        price: 16.9,
        meal_picture:
          "https://hips.hearstapps.com/hmg-prod/images/keto-cheesecake-jennifer-banz-1589911269.jpg?crop=1.00xw:0.667xh;0.00170xw,0.173xh&resize=980:*",
        created_at: new Date(),
        updated_at: new Date(),
      },

      {
        name: "Coconut Bars",
        price: 8.9,
        meal_picture:
          "https://hips.hearstapps.com/hmg-prod/images/5-keto-coconut-lime-bars-1525876812.jpg?crop=1xw:1xh;center,top&resize=980:*",
        created_at: new Date(),
        updated_at: new Date(),
      },

      {
        name: "Coffee Cake",
        price: 9.9,
        meal_picture:
          "https://kaseytrenum.com/wp-content/uploads/2018/12/keto-coffee-cake-2.jpg",
        created_at: new Date(),
        updated_at: new Date(),
      },
    ]);

    // ===== 3: DELIVERY_PARTNERS ===== //

    await queryInterface.bulkInsert("delivery_partners", [
      {
        name: "Liam Awesome",
        phone: "+852 9876 6567",
        is_active: true,
        created_at: new Date(),
        updated_at: new Date(),
      },

      {
        name: "John Wayne",
        phone: "+852 9799 5643",
        is_active: true,
        created_at: new Date(),
        updated_at: new Date(),
      },

      {
        name: "Neo Chan",
        phone: "+852 9723 5643",
        is_active: true,
        created_at: new Date(),
        updated_at: new Date(),
      },

      {
        name: "Elon Mars",
        phone: "+852 6744 2643",
        is_active: true,
        created_at: new Date(),
        updated_at: new Date(),
      },

      {
        name: "Mary Wonder",
        phone: "+852 6723 2643",
        is_active: true,
        created_at: new Date(),
        updated_at: new Date(),
      },

      {
        name: "Meghan Markle",
        phone: "+852 6223 2693",
        is_active: true,
        created_at: new Date(),
        updated_at: new Date(),
      },

      {
        name: "Emma Stone",
        phone: "+852 6223 4653",
        is_active: true,
        created_at: new Date(),
        updated_at: new Date(),
      },

      {
        name: "Keanu Reeves",
        phone: "+852 6223 1644",
        is_active: true,
        created_at: new Date(),
        updated_at: new Date(),
      },

      {
        name: "Jennifer Lawrence",
        phone: "+852 9723 1644",
        is_active: true,
        created_at: new Date(),
        updated_at: new Date(),
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("users", null, {});
    await queryInterface.bulkDelete("meals", null, {});
    await queryInterface.bulkDelete("delivery_partners", null, {});
  },
};

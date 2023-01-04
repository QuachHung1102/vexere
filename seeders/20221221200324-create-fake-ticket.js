'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
    await queryInterface.bulkInsert(
      'tickets',
      [
        {
          trip_id: 1,
          users_id: 2,
          createdAt: '2022-12-22 00:00:00',
          updatedAt: '2022-12-22 00:00:00',
        },
        {
          trip_id: 1,
          users_id: 2,
          createdAt: '2022-12-22 00:00:00',
          updatedAt: '2022-12-22 00:00:00',
        },
        {
          trip_id: 3,
          users_id: 1,
          createdAt: '2022-12-22 00:00:00',
          updatedAt: '2022-12-22 00:00:00',
        },
        {
          trip_id: 5,
          users_id: 3,
          createdAt: '2022-12-22 00:00:00',
          updatedAt: '2022-12-22 00:00:00',
        },
        {
          trip_id: 6,
          users_id: 2,
          createdAt: '2022-12-22 00:00:00',
          updatedAt: '2022-12-22 00:00:00',
        },
        {
          trip_id: 2,
          users_id: 3,
          createdAt: '2022-12-22 00:00:00',
          updatedAt: '2022-12-22 00:00:00',
        },
        {
          trip_id: 4,
          users_id: 1,
          createdAt: '2022-12-22 00:00:00',
          updatedAt: '2022-12-22 00:00:00',
        },
        {
          trip_id: 5,
          users_id: 3,
          createdAt: '2022-12-22 00:00:00',
          updatedAt: '2022-12-22 00:00:00',
        },
        {
          trip_id: 2,
          users_id: 2,
          createdAt: '2022-12-22 00:00:00',
          updatedAt: '2022-12-22 00:00:00',
        },
        {
          trip_id: 7,
          users_id: 1,
          createdAt: '2022-12-22 00:00:00',
          updatedAt: '2022-12-22 00:00:00',
        },

      ], {});
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete('tickets', null, {});
  }
};

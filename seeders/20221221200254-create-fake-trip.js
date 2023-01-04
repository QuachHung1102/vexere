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
      'trips',
      [
        {
          fromStation: 1,
          toStation: 6,
          startTime: '2022-12-22 01:00:00',
          price: 1000000,
          createdAt: '2022-12-22 00:00:00',
          updatedAt: '2022-12-22 00:00:00',
        },
        {
          fromStation: 2,
          toStation: 5,
          startTime: '2022-12-22 08:00:00',
          price: 1000000,
          createdAt: '2022-12-22 00:00:00',
          updatedAt: '2022-12-22 00:00:00',
        },
        {
          fromStation: 2,
          toStation: 1,
          startTime: '2022-12-22 13:00:00',
          price: 100000,
          createdAt: '2022-12-22 00:00:00',
          updatedAt: '2022-12-22 00:00:00',
        },
        {
          fromStation: 6,
          toStation: 4,
          startTime: '2022-12-22 19:00:00',
          price: 150000,
          createdAt: '2022-12-22 00:00:00',
          updatedAt: '2022-12-22 00:00:00',
        },
        {
          fromStation: 1,
          toStation: 5,
          startTime: '2022-12-22 10:00:00',
          price: 500000,
          createdAt: '2022-12-22 00:00:00',
          updatedAt: '2022-12-22 00:00:00',
        },
        {
          fromStation: 6,
          toStation: 4,
          startTime: '2022-12-22 21:00:00',
          price: 600000,
          createdAt: '2022-12-22 00:00:00',
          updatedAt: '2022-12-22 00:00:00',
        },
        {
          fromStation: 5,
          toStation: 3,
          startTime: '2022-12-22 05:00:00',
          price: 200000,
          createdAt: '2022-12-22 00:00:00',
          updatedAt: '2022-12-22 00:00:00',
        }
      ], {});
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete('trips', null, {});
  }
};

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
      'users',
      [
        {
          name: 'Tường ngu',
          email: 'tuongngu@gmail.com',
          password: '123456',
          numberPhone: '09554850456',
          avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSI3goQJl89bHT0TXY4I0ZRhKw2qYJ_xaehKg&usqp=CAU',
          type: 'client',
          createdAt: '2022-12-22 00:00:00',
          updatedAt: '2022-12-22 00:00:00',
        },
        {
          name: 'Khánh ngu',
          email: 'khanhngu@gmail.com',
          password: '123456',
          numberPhone: '09554850456',
          avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSI3goQJl89bHT0TXY4I0ZRhKw2qYJ_xaehKg&usqp=CAU',
          type: 'client',
          createdAt: '2022-12-22 00:00:00',
          updatedAt: '2022-12-22 00:00:00',
        },
        {
          name: 'Cú Địt Lạnh Lùng',
          email: 'cuDitLanhLung@gmail.com',
          password: '123456',
          numberPhone: '0334196187',
          avatar: 'https://cand.com.vn/Files/Image/chienthang/2020/07/22/8ad78ce2-186b-4f98-b280-9201165aa946.jpg',
          type: 'admin',
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
    await queryInterface.bulkDelete('users', null, {});
  }
};

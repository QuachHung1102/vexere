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
    await queryInterface.bulkInsert('stations',
      [
        {
          name: 'Bến xe Thái Bình',
          address: 'ĐT223, P. Bồ Xyên, Tp. Thái Bình, Thái Bình',
          province: 'Tp. Thái Bình',
          createdAt: `2022-12-20 11:20`,
          updatedAt: `2022-12-20 11:22`,
        },
        {
          name: 'Bến xe Mỹ Đình',
          address: 'Mỹ Đình, Nam Từ Liêm, Hà Nội',
          province: 'Tp. Hà Nội',
          createdAt: `2022-12-20 11:20`,
          updatedAt: `2022-12-20 11:22`,
        },
        {
          name: 'Bến xe Giáp Bát',
          address: 'Giải Phóng, Giáp Bát, Hoàng Mai, Hà Nội',
          province: 'Tp. Hà Nội',
          createdAt: `2022-12-20 11:20`,
          updatedAt: `2022-12-20 11:22`,
        },
        {
          name: 'Bến Xe Trung Tâm Đà Nẵng',
          address: 'Tôn Đức Thắng, Hoà Minh, Liên Chiểu, Đà Nẵng',
          province: 'Tp. Đà Nẵng',
          createdAt: `2022-12-20 11:20`,
          updatedAt: `2022-12-20 11:22`,
        },
        {
          name: 'Bến xe Tô Châu',
          address: 'Lê Hồng Phong, P.1, Quận 10, TPHCM',
          province: 'Tp. HCM',
          createdAt: `2022-12-20 11:20`,
          updatedAt: `2022-12-20 11:22`,
        },
        {
          name: 'Bến xe miền Đông',
          address: '292 Đinh Bộ Lĩnh, phường 26, quận Bình Thạnh, Thành phố Hồ Chí Minh',
          province: 'Tp. HCM',
          createdAt: `2022-12-20 11:20`,
          updatedAt: `2022-12-20 11:22`,
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
    await queryInterface.bulkDelete('stations', null, {});
  }
};

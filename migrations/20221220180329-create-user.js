'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Users', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name: {
        type: Sequelize.STRING,
        allowNull: false,
        notEmpty: true,
      },
      email: {
        type: Sequelize.STRING,
        allowNull: false,
        isEmail: true,
        notEmpty: true,
      },
      password: {
        type: Sequelize.STRING,
        allowNull: false,
        notEmpty: true,
      },
      numberPhone: {
        type: Sequelize.STRING,
        allowNull: false,
        notEmpty: true,
      },
      avatar: {
        type: Sequelize.STRING,
      },
      type: {
        type: Sequelize.STRING,
        defaultValue: "client",
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Users');
  }
};
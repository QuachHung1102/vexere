'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Station extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ Trip }) {
      // define association here
      this.hasMany(Trip, { foreignKey: 'fromStation', as: 'from' });
      this.hasMany(Trip, { foreignKey: 'toStation', as: 'to' });
    }
  }
  Station.init({
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: true,
        len: [3, 30],
      }
    },
    address: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: true,
        len: [3, 30],
        //
        checkLen(value) {
          if (value.length >= 5 && value.length <= 30) {
            return true;
          } else {
            throw new Error("Độ dài phải từ 5-30");
          }
        }
        //
      }
    },
    province: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: true,
        len: [3, 30],
        isIn: [['Thái Bình, Hà Nội, HCM, Đà Nẵng, Hải Phòng', 'Quảng Ninh', 'Thành phố Huế']],
      }
    },
  }, {
    sequelize,
    modelName: 'Station',
  });
  return Station;
};
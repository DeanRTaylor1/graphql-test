const { Sequelize, DataTypes } = require("sequelize");
const Database = require("../db/db");

const sequelize = new Sequelize(Database);

class User extends Model {}

User.init(
  {
    firstName: {
      type: DataTypes.String,
      allowNull: false,
    },
    lastName: {
      type: DataTypes.String,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    sequelize,
    modelName: "User",
  }
);

module.exports = User;

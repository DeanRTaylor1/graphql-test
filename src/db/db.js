const { Sequelize } = require("sequelize");
const path = require("path");

class Database {
  constructor() {
    if (!Database.instance) {
      this.sequelize = new Sequelize({
        dialect: "sqlite",
        storage: path.join(__dirname, "database-master.sqlite"),
      });
      Database.instance = this.sequelize;
    }
    return Database.instance;
  }

  async sync() {
    await this.sequelize.sync();
  }
}

module.exports = new Database();

//const LoggerModel  = require( './modules/models/loggermodel')

const { Sequelize, Model, DataTypes } = require('sequelize');
const process = require('process');
const ProductModel = require("./modules/models/productmodel");
const UserModel = require("./modules/models/usermodel");
const UserPurchaseModel = require("./modules/models/userpurchasemodel");

const sequelize = new Sequelize(process.env.DBNAME, process.env.DBUSER, process.env.DBPASSWORD, {
    host: process.env.DBHOST,
    dialect: process.env.DBENGINE,
    logging: false
});


class Initialization {
    static async initializeDatabase(){

        let force = false;
        ProductModel.initialize(sequelize, force);
        UserModel.initialize(sequelize, force);
        UserPurchaseModel.initialize(sequelize, force);
        
        UserPurchaseModel.belongsTo(UserModel, { foreignKey: "username", targetKey: "username" });
        UserPurchaseModel.belongsTo(ProductModel, { foreignKey: "productID", targetKey: "id" })

        //ProductModel.belongsToMany(UserModel, { through: UserPurchaseModel, foreingKey: "productID"});
        //UserModel.belongsToMany(ProductModel, { through: UserPurchaseModel, foreingKey: "username" })

        await sequelize.sync();
    }
}

module.exports = Initialization




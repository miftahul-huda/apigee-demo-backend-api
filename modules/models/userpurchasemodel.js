const { Model, DataTypes, Sequelize } = require('sequelize');

class UserPurchaseModel extends Model {
    static initialize(sequelize, force=false)
    { 
        super.init({
            id: {
                allowNull: false,
                primaryKey: true,
                type: Sequelize.UUID,
                defaultValue: Sequelize.UUIDV4
            }
            ,
            username: DataTypes.STRING,
            productID: DataTypes.UUID,
            purchasePrice: DataTypes.DECIMAL,
            purchaseQuantity: DataTypes.DECIMAL
        }, 
        { sequelize, modelName: 'userpurchase', tableName: 'userpurchase', force: force });
    }
}

module.exports = UserPurchaseModel;
const { Model, DataTypes, Sequelize } = require('sequelize');

class ProductModel extends Model {
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
            title: DataTypes.STRING,
            description: DataTypes.STRING,
            model: DataTypes.STRING,
            customerPrice: DataTypes.DECIMAL,
            stock: DataTypes.DECIMAL,
        }, 
        { sequelize, modelName: 'product', tableName: 'product', force: force });
    }
}

module.exports = ProductModel;
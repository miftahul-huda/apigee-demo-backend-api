const { Model, DataTypes, Sequelize } = require('sequelize');

class UserModel extends Model {
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
            username: {
                type: DataTypes.STRING,
                unique: true
            },
            password: DataTypes.STRING,
            fullName: DataTypes.STRING,
            phone: DataTypes.STRING,
            address: DataTypes.STRING,
        }, 
        { sequelize, modelName: 'user', tableName: 'user', force: force });
    }
}

module.exports = UserModel;
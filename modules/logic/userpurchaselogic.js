const { Sequelize, Model, DataTypes } = require('sequelize');
const { Op } = require("sequelize");

const CrudLogic = require("./crudlogic");
const UserModel = require('../models/usermodel');
const ProductModel = require('../models/productmodel');

class UserPurchaseLogic extends CrudLogic {

    static getModel()
    {
        const model = require("../models/userpurchasemodel");
        return model;
    }

    static getPk(){
        return "id";
    }

    static getWhere(search)
    {
        let where = {
            fullName : {
                [Op.like] : "%" + search + "%"
            } 
        }
        return where;
    }

    static getOrder()
    {
        let order = [['createdAt', 'DESC']];
        return order;
    }

    static getModelIncludes()
    {
        let username = this.query.username;
        
        return [
            {
                model: UserModel,
                where:{
                    username: username
                }
                ,
                attributes: [ "username", "fullName", "phone" ]
            }   
            ,
            {
                model: ProductModel
            }
        ]
        
    }
}

module.exports = UserPurchaseLogic;
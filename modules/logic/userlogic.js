const { Sequelize, Model, DataTypes } = require('sequelize');
const { Op } = require("sequelize");

const CrudLogic = require("./crudlogic");
const UserModel = require('../models/usermodel');

class UserLogic extends CrudLogic {

    static getModel()
    {
        const model = require("../models/usermodel");
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

    static async login(username, password)
    {
        try{

            let user = await UserModel.findOne({
                where:{
                    [Op.and]:[
                        {username: { [Op.like] : username}},
                        {password: { [Op.like] : password}},
                    ]
                }
            });


            if(user != null)
            {
                user = JSON.parse(JSON.stringify(user));
                delete user.password;
                return { success: true, payload: user };
            }
            else
            {
                return { success: false, message: "Username tidak ada, atau password invalid."}
            }
        }
        catch(err)
        {
            throw { success: false, message: '', error: err };
        }
    }
}

module.exports = UserLogic;
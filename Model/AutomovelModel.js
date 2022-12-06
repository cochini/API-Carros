const Sequelize = require('sequelize');

const Pessoa = require("./PessoaModel")

const connection = require('../Database/database');

const Automovel = connection.define(
    'tbl_automovel',
    {
        idAutomovel:{
            type: Sequelize.INTEGER,
            autoIncrement: true,
            allowNull: false,
            primaryKey: true,
            "timestamps": false
        },

        fabricante:{
            type: Sequelize.STRING(50),
            allowNull: false,
            "timestamps": false
        },

        preco:{
            type: Sequelize.STRING(20),
            allowNull: false,
            "timestamps": false
        },

        modelo:{
            type: Sequelize.STRING(100),
            allowNull: false,
            "timestamps": false
        },

        ano:{
            type: Sequelize.STRING(5),
            allowNull: false,
            "timestamps": false
        },

        cor:{
            type: Sequelize.STRING(50),
            allowNull: false,
            "timestamps": false
        },

    });

Pessoa.hasMany(Automovel)

Automovel.belongsTo(Pessoa)

// Automovel.sync({
//         force: true
//     }) 

module.exports = Automovel;
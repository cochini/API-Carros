const Sequelize = require('sequelize');

const connection = require('../Database/database');

const Pessoa = connection.define(
    'tbl_pessoa',
    {
        ID_PESSOA:{
            type: Sequelize.INTEGER,
            autoIncrement: true,
            allowNull: false,
            primaryKey: true,
            "timestamps": false
        },

        NOME:{
            type: Sequelize.STRING(50),
            allowNull: false,
            "timestamps": false
        },

        SOBRENOME:{
            type: Sequelize.STRING(50),
            allowNull: false,
            "timestamps": false
        },

        CPF:{
            type: Sequelize.STRING(20),
            allowNull: false,
            "timestamps": false
        },

        RG:{
            type: Sequelize.STRING(20),
            allowNull: false,
            "timestamps": false
        },
    });

module.exports = Pessoa;
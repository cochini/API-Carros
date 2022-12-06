const Sequelize = require('sequelize');

const connection = require('../Database/database');

const Pessoa = connection.define(
    'tbl_pessoa',
    {
        idPessoa:{
            type: Sequelize.INTEGER,
            autoIncrement: true,
            allowNull: false,
            primaryKey: true,
            "timestamps": false
        },

        nome:{
            type: Sequelize.STRING(200),
            allowNull: false,
            "timestamps": false
        },

        sobrenome:{
            type: Sequelize.STRING(200),
            allowNull: false,
            "timestamps": false
        },

        CPF:{
            type: Sequelize.STRING(50),
            allowNull: false,
            "timestamps": false
        },

        RG:{
            type: Sequelize.STRING(50),
            allowNull: false,
            "timestamps": false
        },

    });


// Pessoa.sync({
//         force: true
//     }) 

module.exports = Pessoa;
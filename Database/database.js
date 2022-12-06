const Sequelize = require('sequelize');

const connection = new Sequelize(
    'dbautomovel',
    'root',
    '',
    {
        host: 'localhost',
        dialect: 'mysql',
        define: {
            timestamps: false
        }
    }
);


module.exports = connection;
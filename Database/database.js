const Sequelize = require('sequelize');

const connection = new Sequelize(
    'carros',
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
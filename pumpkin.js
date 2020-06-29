const db = require('./dbConfig');
const Sequelize = require('sequelize');

//YOUR CODE GOES HERE
const Pumpkin = db.define('Pumpkin', {
    name: {
        type: Sequelize.STRING,
        allowNull: false,
        validate: {
            notEmpty: true
        }
    },
    size: {
        type: Sequelize.ENUM('small', 'medium', 'large')
    },
    evil: {
        type: Sequelize.BOOLEAN,
        defaultValue: false,
    },
    carved: {
        type: Sequelize.BOOLEAN,
        defaultValue: false,
    },
    candle: {
        type: Sequelize.BOOLEAN,
        defaultValue: false,
    },
})

Pumpkin.prototype.lightcandle = function () {
    return Pumpkin.update({ candle: true}, { where : { candle: false}})
  }
//--------------------
module.exports = Pumpkin;

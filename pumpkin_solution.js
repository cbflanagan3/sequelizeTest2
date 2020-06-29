const db = require('./dbConfig');
const Sequelize = require('sequelize');
const { STRING, BOOLEAN, ENUM } = require('sequelize')

const Pumpkin = db.define('pumpkin', {
    name: {
        type:STRING,
        allowNull: false
    },
    size: {
        type:ENUM,
        values: ['small', 'medium', 'largge'],
        allowNull: false
    },
    evil: {
        type: BOOLEAN,
        defaultValue: false,
    },
    carved: {
        type: BOOLEAN,
        defaultValue: false,
    },
    candle: {
        type: BOOLEAN,
        defaultValue: false,
    }

})

//hook

Pumpkin.beforeCreate(pumpkin) {
    if(Math.floor(Math.random()*10%2>0)) {
        pumpkin.evil = true
        pumpkin.name = 'EVIL ' + pumpkin.name
    } else {
        pumpkin.name = 'GOOD ' + pumpkin.name
    }
}

Pumpkin.prototype.lightCandle = function() {
    return new Promise((res, rej) => {
        if(this.carved) {
            this.update({ candle: true});
            res(true);
        } else {
            rej(false);
        }
    })
}
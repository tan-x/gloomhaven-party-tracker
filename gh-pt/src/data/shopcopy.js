
const inquirer = require('inquirer');
const fs = require('fs');

let shop = [
    {
        name: 'Eagle-Eyed Goggles',
        type: 'head',
        available: 0,
        total: 2,
        cost: 30,
    },
    {
        name: 'Iron Helmet',
        type: 'head',
        available: 2,
        total: 2,
        cost: 20,
    },
    {
        name: 'Chain Armor',
        type: 'body',
        available: 2,
        total: 2,
        cost: 30,
    },
    {
        name: 'Studded Leather',
        type: 'body',
        available: 0,
        total: 2,
        cost: 25,
    },
    {
        name: 'Weathered Boots',
        type: 'legs',
        available: 1,
        total: 2,
        cost: 15,
    },
    {
        name: 'Winged Shoes',
        type: 'legs',
        available: 1,
        total: 2,
        cost: 15,
    },
    {
        name: 'Heater Sheild',
        type: 'hand',
        available: 1,
        total: 2,
        cost: 20,
    },
    {
        name: 'Throwing Hammer',
        type: 'hand',
        available: 2,
        total: 2,
        cost: 30,
    },
    {
        name: 'Poison Dagger',
        type: 'hand',
        available: 2,
        total: 2,
        cost: 20,
    },
    {
        name: 'Iron Spear',
        type: 'hand',
        available: 2,
        total: 2,
        cost: 20,
    },
    {
        name: 'Healing Potion',
        type: 'small',
        available: 2,
        total: 2,
        cost: 10,
    },
    {
        name: 'Stamina Potion',
        type: 'small',
        available: 2,
        total: 2,
        cost: 10,
    },
    {
        name: 'Power Potion',
        type: 'small',
        available: 2,
        total: 2,
        cost: 10,
    },
    {
        name: 'Mana Potion',
        type: 'small',
        available: 0,
        total: 2,
        cost: 10,
    },
    {
        name: 'Amulet of Life',
        type: 'head',
        available: 1,
        total: 1,
        cost: 20,
    },
    {
        name: 'Robes of Evocation',
        type: 'body',
        available: 1,
        total: 1,
        cost: 40,
    },
    {
        name: 'Comfortable Shoes',
        type: 'legs',
        available: 1,
        total: 1,
        cost: 30,
    },
    {
        name: 'Battle-Axe',
        type: 'hand',
        available: 1,
        total: 1,
        cost: 25,
    },
    {
        name: 'Black Candle',
        type: 'hand',
        available: 1,
        total: 1,
        cost: 40,
    },
    {
        name: 'Stun Powder',
        type: 'small',
        available: 2,
        total: 2,
        cost: 20,
    },
]

inquirer.prompt([
    {
        type: 'input',
        message: 'Item Name:',
        name: 'name',
    },
    {
        type: 'list',
        message: 'Type:',
        choices: ['head', 'body', 'legs', 'hand', 'small'],
        name: 'type',
    },
    {
        type: 'input',
        message: 'Available:',
        name: 'available',
    },
    {
        type: 'input',
        message: 'Total:',
        name: 'total',
    },
    {
        type: 'input',
        message: 'Cost:',
        name: 'cost',
    },
]).then(response => {
    response.available = parseInt(response.available);
    response.total = parseInt(response.total);
    console.log(response);
    inquirer.prompt({
        type: 'confirm',
        message: 'Add item to shop?',
        name: 'additem'
    }).then(res => {
        if(res.additem) {
            let newShop = shop;
            newShop = [...newShop, response];
            fs.writeFile('./shop.json', JSON.stringify(newShop), 'utf-8', function(err){
                if (err) throw err;
            })
        }
    })
})

module.exports = shop;
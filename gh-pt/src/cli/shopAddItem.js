const inquirer = require('inquirer');
const fs = require('fs');
const shop = require('../shop');

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
            let shopCopy = fs.readFileSync(__dirname + '/../shop.js');
            console.log(shopCopy);
            // let newShop = shop.push(response);
            // let shopCopy = shop.toString;
            // console.log(shop);
            // shopCopy.replace(shop.toString, newShop);
        }
    })
})
const inquirer = require('inquirer');
const fs = require('fs');
const firebase = require('firebase/app');
require('firebase/firestore');

const firebaseConfig = {
    apiKey: "process.env.FIREBASE_KEY",
    authDomain: "ghpartytracker.firebaseapp.com",
    databaseURL: "https://ghpartytracker.firebaseio.com",
    projectId: "ghpartytracker",
    storageBucket: "ghpartytracker.appspot.com",
    messagingSenderId: "675542052221",
    appId: "1:675542052221:web:782ae63b97562e49b93014",
    measurementId: "G-39WBY8QF9B"
  };

firebase.initializeApp(firebaseConfig);

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
        type: 'number',
        message: 'Available:',
        name: 'available',
    },
    {
        type: 'number',
        message: 'Total:',
        name: 'total',
    },
    {
        type: 'number',
        message: 'Cost:',
        name: 'cost',
    },
    {
        type: 'number',
        message: 'Item #:',
        name: 'id',
    }
]).then(response => {
    response.id = response.id - 1;
    console.log(response);
    inquirer.prompt({
        type: 'confirm',
        message: 'Add item to shop?',
        name: 'additem'
    }).then(res => {
        if(res.additem) {
            let shopjson = fs.readFileSync(__dirname + '/../shop.json');
            let shopCopy = JSON.parse(shopjson);
            shopCopy.push(response);
            let data = JSON.stringify(shopCopy, null, 2);
            fs.writeFileSync('shop.json', data);
			firebase.firestore().collection('template').doc('shop').set({shop: shopCopy});
        }
    })
})
const inquirer = require('inquirer');
const fs = require('fs');
const firebase = require('firebase/app');
require('firebase/firestore');

const firebaseConfig = {
	apiKey: 'process.env.FIREBASE_KEY',
	authDomain: 'ghpartytracker.firebaseapp.com',
	databaseURL: 'https://ghpartytracker.firebaseio.com',
	projectId: 'ghpartytracker',
	storageBucket: 'ghpartytracker.appspot.com',
	messagingSenderId: '675542052221',
	appId: '1:675542052221:web:782ae63b97562e49b93014',
	measurementId: 'G-39WBY8QF9B',
};

firebase.initializeApp(firebaseConfig);

inquirer
	.prompt([
		{
			type: 'input',
			message: 'Collection:',
			name: 'collection',
		},
		{
			type: 'list',
            message: 'Document:',
            choices: ['demolitionist', 'hatchet', 'redGuard', 'voidwarden', 'items'],
            name: 'doc',
        },
        {
			type: 'list',
            message: 'Field:',
            choices: ['items', 'perks'],
            name: 'field',
		},
	])
	.then((res) => {
        firebase.firestore().collection(res.collection).doc(res.doc).get().then((querySnapshot) => {
			const stats = JSON.stringify(querySnapshot.data(), null, 2);
			// console.log(stats);
            fs.appendFileSync(__dirname + 'dataPull1.js', stats)
        })
        // let shopjson = fs.readFileSync(__dirname + '/../shop.json');
        // let shopCopy = JSON.parse(shopjson);
        // firebase.firestore().collection(res.collection).doc('shop').set({ shop: shopCopy });
	});

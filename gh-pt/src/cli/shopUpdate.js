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
			type: 'confirm',
			message: 'Update firebase shop?',
			name: 'update',
		},
	])
	.then((res) => {
		if (res.update) {
			let shopjson = fs.readFileSync(__dirname + '/../shop.json');
			let shopCopy = JSON.parse(shopjson);
			firebase.firestore().collection(res.collection).doc('shop').set({ shop: shopCopy });
		}
	});

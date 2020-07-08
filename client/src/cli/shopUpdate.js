const inquirer = require('inquirer');
const fs = require('fs');
const firebase = require('firebase/app');
require('firebase/firestore');

const stats = {
	redGuard: {
		name: '',
		level: 1,
		xp: 0,
		gold: 0,
		checks: 0,
		perks: [
			{
				text: 'Remove four +0 cards',
				checked: [false],
			},
			{
				text: 'Remove two -1 cards',
				checked: [false],
			},
			{
				text: 'Remove one -2 card and one +1 card',
				checked: [false],
			},
			{
				text: 'Replace one -1 card with one +1 card',
				checked: [false, false],
			},
			{
				text: 'Replace one +1 card with one +2 fire card',
				checked: [false, false],
			},
			{
				text: 'Replace one +1 card with one +2 light card',
				checked: [false, false],
			},
			{
				text: 'Add one +1 fire & light card',
				checked: [false, false],
			},
			{
				text: 'Add one +1 Shield 1 card',
				checked: [false, false],
			},
			{
				text: 'Replace one +0 card with one +1 immobilize card',
				checked: [false],
			},
			{
				text: 'Replace one +0 card with one +1 wound card',
				checked: [false],
			},
		],
		items: {
			head: ['Eagle-Eyed Goggles'],
			body: ['Studded Leather'],
			legs: ['Weathered Boots'],
			hand: ['Heater Shield'],
			small: ['Fateful Compass', 'Mana Potion'],
		},
	},
	hatchet: {
		name: '',
		level: 1,
		xp: 0,
		gold: 0,
		checks: 0,
		perks: [
			{
				text: 'Remove two -1 cards',
				checked: [false, false],
			},
			{
				text: 'Replace one +0 card with one +2 muddle card',
				checked: [false],
			},
			{
				text: 'Replace one +0 card with one +1 poison card',
				checked: [false],
			},
			{
				text: 'Replace one +0 card with one +1 wound card',
				checked: [false],
			},
			{
				text: 'Replace one +0 card with one +1 immobilize card',
				checked: [false],
			},
			{
				text: 'Replace one +0 card with one +1 push 2 card',
				checked: [false],
			},
			{
				text: 'Replace one +0 card with one +0 stun card',
				checked: [false],
			},
			{
				text: 'Replace one +1 card with one +1 stun card',
				checked: [false],
			},
			{
				text: 'Add one +2 air card',
				checked: [false, false, false],
			},
			{
				text: 'Replace one +1 card with one +3 card',
				checked: [false, false, false],
			},
		],
		items: {
			head: ['Eagle-Eyed Goggles'],
			body: ['Studded Leather'],
			legs: ['Winged Shoes'],
			hand: [],
			small: ['Mana Potion'],
		},
	},
	demolitionist: {
		name: '',
		level: 1,
		xp: 0,
		gold: 0,
		checks: 0,
		perks: [
			{
				text: 'Remove four +0 cards',
				checked: [false],
			},
			{
				text: 'Remove two -1 cards',
				checked: [false, false],
			},
			{
				checked: [false],
				text: 'Remove one -2 card and one +1 card',
			},
			{
				checked: [false, false],
				text: 'Replace one +0 card with one +2 muddle card',
			},
			{
				text: 'Replace one -1 card with one +0 poison card',
				checked: [false],
			},
			{
				checked: [false, false],
				text: 'Add one +2 card',
			},
			{
				text: 'Replace one +1 card with +2 earth card',
				checked: [false, false],
			},
			{
				text: 'Replace one +1 card with one +2 fire card',
				checked: [false, false],
			},
			{
				text: 'Add one +0 All adjacent enemies suffer 1 damage card',
				checked: [false, false],
			},
		],
		items: {
			head: [''],
			body: [''],
			legs: [''],
			hand: [''],
			small: [''],
		},
	},
	voidwarden: {
		name: '',
		level: 1,
		xp: 0,
		gold: 0,
		checks: 0,
		perks: [
			{
				checked: [false],
				text: 'Remove two -1 cards',
			},
			{
				text: 'Remove one -2 card',
				checked: [false],
			},
			{
				checked: [false, false],
				text: 'Replace one +0 with one +1 dark card',
			},
			{
				text: 'Replace one +0 with one +1 ice card',
				checked: [false, false],
			},
			{
				text: 'Replace one -1 with one +0 heal 1 card',
				checked: [false, false],
			},
			{
				checked: [false, false, false],
				text: 'Add one +1 heal 1 card',
			},
			{
				checked: [false],
				text: 'Add one +1 poison card',
			},
			{
				checked: [false],
				text: 'Add one +3 card',
			},
			{
				checked: [false, false],
				text: 'Add one +1 curse card',
			},
		],
		items: {
			head: [''],
			body: [''],
			legs: [''],
			hand: [''],
			small: [''],
		},
	},
};

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
			type: 'input',
			message: 'Doc:',
			name: 'doc',
		},
		{
			type: 'confirm',
			message: 'Update firebase shop?',
			name: 'update',
		},
	])
	.then((res) => {
		if (res.update) {
			firebase.firestore().collection(res.collection).doc(res.doc).update({perks: stats[res.doc].perks});
			// let shopjson = fs.readFileSync(__dirname + '/../shop.json');
			// let shopCopy = JSON.parse(shopjson);
			// firebase.firestore().collection(res.collection).doc('shop').set({ shop: shopCopy });
		}
	});

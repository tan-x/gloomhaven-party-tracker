const stats = {
	redGuard: {
        name: 'Tormir',
		level: 3,
		xp: 97,
        gold: 29,
        checks: 5,
		perks: [
			{
				text: 'Remove four +0 cards',
				checked: [true],
			},
			{
				text: 'Remove two -1 cards',
				checked: [true],
			},
			{
				text: 'Remove one -2 card and one +1 card',
				checked: [false],
			},
			{
				text: 'Replace one -1 card with one +1 card',
				checked: [true, false],
			},
			{
				text: 'Replace one +1 card with one +2 Fire card',
				checked: [false, false],
			},
			{
				text: 'Replace one +1 card with one +2 Light card',
				checked: [false, false],
			},
			{
				text: 'Add one +1 Fire & Light card',
				checked: [false, false],
			},
			{
				text: 'Add one +1 Shield 1 card',
				checked: [false, false],
			},
			{
				text: 'Replace one +0 card with one +1 Immobilize card',
				checked: [false],
			},
			{
				text: 'Replace one +0 card with one +1 Wound card',
				checked: [true],
			},
        ],
        items: [
            {
                name: [],
                type: 'head',
            },
            {
                name: [],
                type: 'body',
            },
            {
                name: ['Weathered Boots'],
                type: 'legs',
            },
            {
                name: ['Heater Sheild'],
                type: 'hand',
            },
            {
                name: ['Fateful Compass', 'Mana Potion'],
                type: 'small',
            },
        ],
	},
	hatchet: {
        name: 'Malek',
		level: 3,
		xp: 101,
        gold: 27,
        checks: 2,
		perks: [
			{
				text: 'Remove two -1 cards',
				checked: [true, true],
			},
			{
				text: 'Replace one +0 card with one +2 Muddle card',
				checked: [false],
			},
			{
				text: 'Replace one +0 card with one +1 Poison card',
				checked: [false],
			},
			{
				text: 'Replace one +0 card with one +1 Wound card',
				checked: [false],
			},
			{
				text: 'Replace one +0 card with one +1 Immobilize card',
				checked: [false],
			},
			{
				text: 'Replace one +0 card with one +1 Push 2 card',
				checked: [false],
			},
			{
				text: 'Replace one +0 card with one +0 Stun card',
				checked: [false],
			},
			{
				text: 'Replace one +1 card with one +1 Stun card',
				checked: [false],
			},
			{
				text: 'Add one +2 Wind card',
				checked: [false, false, false],
			},
			{
				text: 'Replace one +1 card with one +3 card',
				checked: [false, false, false],
			},
		],
		items: [
            {
                name: ['Eagle-Eyed Goggles'],
                type: 'head',
            },
            {
                name: [],
                type: 'body',
            },
            {
                name: ['Winged Shoes'],
                type: 'legs',
            },
            {
                name: [],
                type: 'hand',
            },
            {
                name: ['Mana Potion'],
                type: 'small',
            },
        ],
	},
};

export default stats;
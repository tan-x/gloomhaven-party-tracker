const stats = {
	redGuard: {
        name: 'Tormir',
		level: 1,
		xp: 145,
        gold: 30,
        checks: 6,
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
				checked: [true, true],
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
        items: {
            head: ['Eagle-Eyed Goggles'],
            body: ['Studded Leather'],
            legs: ['Weathered Boots'],
            hand: ['Heater Shield'],
            small: ['Fateful Compass', 'Mana Potion']
        }
	},
	hatchet: {
        name: 'Malek',
		level: 1,
		xp: 133,
        gold: 5,
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
				checked: [true, false, false],
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
            small: ['Mana Potion']
        }
	},
};

switch (true) {
    case (stats.hatchet.xp < 45) :
        stats.hatchet.level = 1;
        break;
    case (stats.hatchet.xp >= 45 && stats.hatchet.xp < 95):
        stats.hatchet.level = 2;
        break;
    case (stats.hatchet.xp >= 95 && stats.hatchet.xp < 150):
        stats.hatchet.level = 3;
        break;
    case (stats.hatchet.xp >= 150 && stats.hatchet.xp < 210):
        stats.hatchet.level = 4;
        break;
    case (stats.hatchet.xp >= 210 && stats.hatchet.xp < 275):
        stats.hatchet.level = 5;
        break;
    case (stats.hatchet.xp >= 275 && stats.hatchet.xp < 345):
        stats.hatchet.level = 6;
        break;
    case (stats.hatchet.xp >= 345 && stats.hatchet.xp < 420):
        stats.hatchet.level = 7;
        break;
    case (stats.hatchet.xp >= 420 && stats.hatchet.xp < 500):
        stats.hatchet.level = 8;
        break;
    case (stats.hatchet.xp >= 500):
        stats.hatchet.level = 9;
        break;
    default:
        stats.hatchet.level = 1;
}

switch (true) {
    case (stats.redGuard.xp < 45) :
        stats.redGuard.level = 1;
        break;
    case (stats.redGuard.xp >= 45 && stats.redGuard.xp < 95):
        stats.redGuard.level = 2;
        break;
    case (stats.redGuard.xp >= 95 && stats.redGuard.xp < 150):
        stats.redGuard.level = 3;
        break;
    case (stats.redGuard.xp >= 150 && stats.redGuard.xp < 210):
        stats.redGuard.level = 4;
        break;
    case (stats.redGuard.xp >= 210 && stats.redGuard.xp < 275):
        stats.redGuard.level = 5;
        break;
    case (stats.redGuard.xp >= 275 && stats.redGuard.xp < 345):
        stats.redGuard.level = 6;
        break;
    case (stats.redGuard.xp >= 345 && stats.redGuard.xp < 420):
        stats.redGuard.level = 7;
        break;
    case (stats.redGuard.xp >= 420 && stats.redGuard.xp < 500):
        stats.redGuard.level = 8;
        break;
    case (stats.redGuard.xp >= 500):
        stats.redGuard.level = 9;
        break;
    default:
        stats.hatchet.level = 1;
}

export default stats;
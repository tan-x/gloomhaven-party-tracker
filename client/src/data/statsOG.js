const stats = {
	redGuard: {
		name: '',
		level: 1,
		xp: 0,
		gold: 0,
		checks: 0,
		inParty: false,
		class: 'Red Guard',
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
			head: [],
			body: [],
			legs: [],
			hand: [],
			small: [],
		},
	},
	hatchet: {
		name: '',
		level: 1,
		xp: 0,
		gold: 0,
		checks: 0,
		inParty: false,
		class: 'Hatchet',
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
			head: [],
			body: [],
			legs: [],
			hand: [],
			small: [],
		},
	},
	demolitionist: {
		name: '',
		level: 1,
		xp: 0,
		gold: 0,
		checks: 0,
		inParty: false,
		class: 'Demolitionist',
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
			head: [],
			body: [],
			legs: [],
			hand: [],
			small: [],
		},
	},
	voidwarden: {
		name: '',
		level: 1,
		xp: 0,
		gold: 0,
		checks: 0,
		inParty: false,
		class: 'Voidwarden',
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
			head: [],
			body: [],
			legs: [],
			hand: [],
			small: [],
		},
	},
};

// switch (true) {
// 	case stats.hatchet.xp < 45:
// 		stats.hatchet.level = 1;
// 		break;
// 	case stats.hatchet.xp >= 45 && stats.hatchet.xp < 95:
// 		stats.hatchet.level = 2;
// 		break;
// 	case stats.hatchet.xp >= 95 && stats.hatchet.xp < 150:
// 		stats.hatchet.level = 3;
// 		break;
// 	case stats.hatchet.xp >= 150 && stats.hatchet.xp < 210:
// 		stats.hatchet.level = 4;
// 		break;
// 	case stats.hatchet.xp >= 210 && stats.hatchet.xp < 275:
// 		stats.hatchet.level = 5;
// 		break;
// 	case stats.hatchet.xp >= 275 && stats.hatchet.xp < 345:
// 		stats.hatchet.level = 6;
// 		break;
// 	case stats.hatchet.xp >= 345 && stats.hatchet.xp < 420:
// 		stats.hatchet.level = 7;
// 		break;
// 	case stats.hatchet.xp >= 420 && stats.hatchet.xp < 500:
// 		stats.hatchet.level = 8;
// 		break;
// 	case stats.hatchet.xp >= 500:
// 		stats.hatchet.level = 9;
// 		break;
// 	default:
// 		stats.hatchet.level = 1;
// }

// switch (true) {
// 	case stats.redGuard.xp < 45:
// 		stats.redGuard.level = 1;
// 		break;
// 	case stats.redGuard.xp >= 45 && stats.redGuard.xp < 95:
// 		stats.redGuard.level = 2;
// 		break;
// 	case stats.redGuard.xp >= 95 && stats.redGuard.xp < 150:
// 		stats.redGuard.level = 3;
// 		break;
// 	case stats.redGuard.xp >= 150 && stats.redGuard.xp < 210:
// 		stats.redGuard.level = 4;
// 		break;
// 	case stats.redGuard.xp >= 210 && stats.redGuard.xp < 275:
// 		stats.redGuard.level = 5;
// 		break;
// 	case stats.redGuard.xp >= 275 && stats.redGuard.xp < 345:
// 		stats.redGuard.level = 6;
// 		break;
// 	case stats.redGuard.xp >= 345 && stats.redGuard.xp < 420:
// 		stats.redGuard.level = 7;
// 		break;
// 	case stats.redGuard.xp >= 420 && stats.redGuard.xp < 500:
// 		stats.redGuard.level = 8;
// 		break;
// 	case stats.redGuard.xp >= 500:
// 		stats.redGuard.level = 9;
// 		break;
// 	default:
// 		stats.hatchet.level = 1;
// }

export default stats;

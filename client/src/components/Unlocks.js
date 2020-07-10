import React, { useState, useContext, useEffect } from 'react';
import firebase from '../Firebase';
import StatContext from '../Context';

export default function Unlocks(props) {
	const statContext = useContext(StatContext);
	const [unlockView, setUnlockView] = useState('scenario');
	console.log(statContext[8])
    const unlocks = statContext[8].unlocks;
    useEffect(() => {
        firebase.firestore().collection(statContext[4][0]).doc('items').get().then((res) => {
            statContext[9](res.data());
        })
    }, [])


	const scenarioArray = [];
	const treasureArray = [];
	const eventArray = [];

	const handleUnlock = (e) => {
		let confirm = window.confirm('Are you sure you want to unlock?');
		if (confirm) {
			e.target.nextSibling.nextSibling.className = 'unlock-text';
			e.target.disabled = true;
            unlockItem(e.target.name, e.target.id);
            console.log(e.target.name, e.target.id)
		} else {
			e.target.checked = false;
		}
	};

	const unlockItem = (type, item) => {
        const newItems = Object.assign({}, statContext[8]);
        // console.log(newItems);
        const itemRef = newItems.unlocks[type][item];
        newItems.unlocks[type][item].unlocked = true;
        if (itemRef.type === 'shop') {
            for (let i = (itemRef.itemNum[0] - 1); i < itemRef.itemNum[1]; i++) {
                newItems.shop[i].available = newItems.shop[i].total;
            } 
        }
        if (itemRef.type === 'item') {
            if (newItems.shop[itemRef.itemNum - 1].available > 0) {
                newItems.shop[itemRef.itemNum - 1].available -= 1;
            }
        }
		statContext[9](newItems);
		firebase
			.firestore()
			.collection(statContext[4][0])
			.doc('items')
			.update(newItems);
	};

	unlocks.scenario.forEach((item, i) => {
		if (!item.unlocked) {
			scenarioArray.push(
				<div className='unlock-row' key={i}>
					<input type='checkbox' id={i} name='scenario' onChange={handleUnlock} checked={false}/>
					<span className='unlock-num'>{item.scenario}. </span>
					<p className='unlock-blur unlock-text'>{item.info}</p>
				</div>
			);
		} else {
			scenarioArray.push(
				<div className='unlock-row' key={i}>
					<input type='checkbox' id={i} disabled checked />
					<span className='unlock-num'>{item.scenario}. </span>
					<p className='unlock-text'>{item.info}</p>
				</div>
			);
		}
	});

	unlocks.treasure.forEach((item, i) => {
		if (!item.unlocked) {
			treasureArray.push(
				<div className='unlock-row' key={i}>
					<input type='checkbox' id={i} name='treasure' onChange={handleUnlock} checked={false}/>
					<span className='unlock-num'>{item.treasure}. </span>
					<p className='unlock-blur unlock-text'>{item.info}</p>
				</div>
			);
		} else {
			treasureArray.push(
				<div className='unlock-row' key={i}>
					<input type='checkbox' id={i} disabled checked/>
					<span className='unlock-num'>{item.treasure}. </span>
					<p className='unlock-text'>{item.info}</p>
				</div>
			);
		}
    });

	unlocks.event.forEach((item, i) => {
		if (!item.unlocked) {
			eventArray.push(
				<div className='unlock-row' key={i}>
					<input type='checkbox' id={i} name='event' onChange={handleUnlock} checked={false}/>
					<span className='unlock-num'>{item.event}. </span>
					<p className='unlock-blur unlock-text'>{item.info}</p>
				</div>
			);
		} else {
			eventArray.push(
				<div className='unlock-row' key={i}>
					<input type='checkbox' id={i} disabled checked/>
					<span className='unlock-num'>{item.event}. </span>
					<p className='unlock-text'>{item.info}</p>
				</div>
			);
		}
	});

	const renderUnlocks = () => {
		switch (unlockView) {
			case 'treasure':
				return treasureArray;
			case 'scenario':
				return scenarioArray;
			case 'events':
				return eventArray;
			default:
				return scenarioArray;
		}
	};

	return (
		<>
			<h2 className='modal-header'>Unlocks</h2>
			<select
				name='type'
				id='unlock-filter'
				onChange={(e) => {
					setUnlockView(e.target.value);
				}}
			>
				<option value='scenario'>Scenario Rewards</option>
				<option value='treasure'>Treasure</option>
				<option value='events'>Events</option>
			</select>
			{renderUnlocks()}
		</>
	);
}

import React, { useState, useContext } from 'react';
import firebase from '../Firebase';
import StatContext from '../Context';
import unlocks from '../data/unlocks';

export default function Unlocks(props) {
	const statContext = useContext(StatContext);
    const [unlockView, setUnlockView] = useState('scenario');
    
    const scenarioArray = [];
    const treasureArray = [];
    const eventArray = [];

    console.log(statContext[0])

    const handleUnlock= (e) => {
            let confirm = window.confirm('Are you sure you want to unlock?');
            if (confirm) {
                e.target.nextSibling.nextSibling.className = "unlock-text";
                e.target.disabled = true;
            } else {
                e.target.checked = false;
            }
    }

    unlocks.scenario.forEach((item, i) => {
        if (!item.unlocked) {
            scenarioArray.push(<div className='unlock-row' key={i}><input type="checkbox" id={i} onChange={handleUnlock}/><span className='unlock-num'>{item.scenario}. </span><p className='unlock-blur unlock-text'>{item.info}</p></div>)
        } else {
            scenarioArray.push(<div className='unlock-row' key={i}><input type="checkbox" id={i} disabled checked/><span className='unlock-num'>{item.scenario}. </span><p className='unlock-text'>{item.info}</p></div>)
        }    
    })

    unlocks.treasure.forEach((item, i) => {
        if (!item.unlocked) {
            treasureArray.push(<div className='unlock-row' key={i}><input type="checkbox" id={i} onChange={handleUnlock}/><span className='unlock-num'>{item.treasure}. </span><p className='unlock-blur unlock-text'>{item.info}</p></div>)
        } else {
            treasureArray.push(<div className='unlock-row' key={i}><input type="checkbox" id={i} disabled checked/><span className='unlock-num'>{item.treasure}. </span><p className='unlock-text'>{item.info}</p></div>)
        }   
    })

    unlocks.event.forEach((item, i) => {
        if (!item.unlocked) {
            eventArray.push(<div className='unlock-row' key={i}><input type="checkbox" id={i} onChange={handleUnlock}/><span className='unlock-num'>{item.event}. </span><p className='unlock-blur unlock-text'>{item.info}</p></div>)
        } else {
            eventArray.push(<div className='unlock-row' key={i}><input type="checkbox" id={i} disabled checked/><span className='unlock-num'>{item.event}. </span><p className='unlock-text'>{item.info}</p></div>)
        }   
    })

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
    }

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
    )
}

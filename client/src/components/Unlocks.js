import React, { useState, useContext } from 'react';
import firebase from '../Firebase';
import StatContext from '../Context';
import unlocks from '../data/unlocks';

export default function Unlocks(props) {
	const [stats, setStats, loggedIn, setLoggedIn, party] = useContext(StatContext);
	// const [perks, setPerks] = useState(stats[props.route].perks);
    const [checksVisible, setChecksVisible] = useState({ visible: false });
    
    const scenarioArray = [];
    const treasureArray = [];

    const handleUnlock= (e) => {
        let confirm = window.confirm('Are you sure you want to unlock?');
        if (confirm) {
            e.target.nextSibling.nextSibling.className = "";
        } else {
            e.target.checked = false;
        }
    }

    unlocks.forEach((item, i) => {
        if (item.method === 'scenario') {
            scenarioArray.push(<div className='perk-row' key={i}><input type="checkbox" id={i} onChange={handleUnlock}/><span>{item.scenario}. </span><p className='unlock-text'>{item.info}</p></div>)
        } else {
            treasureArray.push(<div className='perk-row' key={i}><input type="checkbox" id={i} onChange={handleUnlock}/><span>{item.scenario}. </span><p className='unlock-text'>{item.info}</p></div>)

        }
        
    })

	return (
        <>
            <h2 className='modal-header'>Unlocks</h2>
            <h4>Scenario</h4>
            {scenarioArray}
            <h4>Treasure</h4>
            {treasureArray}
        </>
    )
}

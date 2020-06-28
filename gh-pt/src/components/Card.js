import React from 'react';
import rgicon from '../assets/class-icons/rgicon.png';
import hatchicon from '../assets/class-icons/hatcheticon.png';
import '../style/Card.css';

export default function(props) {
    return (
        <div className={`playerCard ${props.classimg}`}>
            <div className="card-dimmer">
                <img src={props.classimg === 'redGuard' ? rgicon : hatchicon} className="card-class-logo"/>
                <h2>{props.name}</h2>
                <h4>Lvl. {props.level} {props.class}</h4>
                <div className="stats">
                    <h3>XP: 56</h3>
                    <h3>Gold: 26</h3>
                </div>
                <div className="options">
                    <button onClick={props.onclick} name="items">Items</button>
                    <button onClick={props.onclick} name="perks">Perks</button>
                </div>
            </div>
        </div>
    )
}
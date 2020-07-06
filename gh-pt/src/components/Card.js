import React from 'react';
import rgicon from '../assets/class-icons/rgicon.png';
import hatchicon from '../assets/class-icons/hatcheticon.png';
import demoicon from '../assets/class-icons/demoicon.png';
import voidicon from '../assets/class-icons/voidicon.png';
import ruleline from '../assets/ruleline1.png';
import border from '../assets/border2.png';
import '../style/Card.css';

export default function(props) {
    const cardIcons = () => {
        switch(props.classimg) {
            case 'redGuard':
                return (
                    <img src={rgicon} className="card-class-logo" alt="class logo"/>
                )
            case 'hatchet':
                return (
                    <img src={hatchicon} className="card-class-logo" alt="class logo"/>
                )
            case 'voidwarden':
                return (
                    <img src={voidicon} className="card-class-logo" alt="class logo"/>
                )
            case 'demolitionist':
                return (
                    <img src={demoicon} className="card-class-logo" alt="class logo"/>
                )
        }
    }

    return (
        <div className={`playerCard ${props.classimg}`}>
            <div className="card-dimmer">
                
            <img src={border} alt="border" className="card-border" />
            <img src={border} alt="border" className="card-borderbtm" />
                {cardIcons()}
                <h2>{props.name}</h2>
                <h4>Lvl. {props.stats[props.classimg].level} {props.class}</h4>
                <div className="stats">
                    <button onClick={props.onclick} id="xp" name={props.classimg}>XP: {props.stats[props.classimg].xp}</button>
                    <img src={ruleline} alt="rule line" className="ruleline"/>
                    <button onClick={props.onclick} id="gold" name={props.classimg}>Gold: {props.stats[props.classimg].gold}</button>
                </div>
                <div className="options">
                    {/* <img src={ruleline} alt="rule line" className="ruleline-bottom"/> */}
                    <button onClick={props.onclick} id="items" name={props.classimg}>Items</button>
                    <button onClick={props.onclick} id="perks" name={props.classimg}>Perks</button>
                </div>
            </div>
        </div>
    )
}
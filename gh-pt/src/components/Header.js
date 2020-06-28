import React from 'react';
import xp from '../xpicon.svg';
import icon1 from '../assets/class-icons/01 Brute.png';
import icon2 from '../assets/class-icons/04 Scoundrel.png';
import icon3 from '../assets/class-icons/07 Sun.png';
import icon4 from '../assets/class-icons/03 Spellweaver.png';
import '../style/Header.css';
import ghfont from '../style/PirataOne-Gloomhaven.ttf';

export default function Header() {
    return (
        <header className="header">
            <div className="dimmer">
                <img src={icon1} className="header-class-logo"/>
                <img src={icon2} className="header-class-logo"/>
                <div className="logo">
                    <h1 style={{fontFamily: ghfont}}>Party</h1>
                    <img src={xp} className="App-logo" alt="xp" />
                    <h1>Tracker</h1>
                </div>
                <img src={icon3} className="header-class-logo"/>
                <img src={icon4} className="header-class-logo"/>
            </div>
        </header>
    )
}
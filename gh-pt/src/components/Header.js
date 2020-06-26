import React from 'react';
import xp from '../xpicon.svg';
import wind from '../wind.png';
import '../style/Header.css';
import ghfont from '../style/PirataOne-Gloomhaven.ttf';

export default function Header() {
    return (
        <header className="header">
            <div className="dimmer">
                <img src={xp} className="header-class-logo"/>
                <img src={xp} className="header-class-logo"/>
                <div className="logo">
                    <h1 style={{fontFamily: ghfont}}>Party</h1>
                    <img src={xp} className="App-logo" alt="xp" />
                    <h1>Tracker</h1>
                </div>
                <img src={xp} className="header-class-logo"/>
                <img src={xp} className="header-class-logo"/>
            </div>
        </header>
    )
}
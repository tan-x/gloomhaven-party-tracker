import React from 'react';
import xp from '../assets/xpicon.svg';
import icon1 from '../assets/class-icons/01 Brute.png';
import icon2 from '../assets/class-icons/04 Scoundrel.png';
import icon3 from '../assets/class-icons/07 Sun.png';
import icon4 from '../assets/class-icons/03 Spellweaver.png';
import '../style/Header.css';
import ghfont from '../style/PirataOne-Gloomhaven.ttf';

export default function Header(props) {
	function showPeak(click) {
		if (!click) {
			return (
				<>
					<div id='menuToggle-shadow' onClick={props.onclick}>
						<div id='menuToggle'></div>

						<div id='menuToggle-dimmer'></div>
						<h2 id='menuArrow' onClick={props.onclick}>
							&#x25bc;
						</h2>
					</div>
				</>
			);
		}
	}

	return (
		<>
			<header className='header' onClick={props.onclick}>
				<div className='dimmer'>
					<img src={icon1} className='header-class-logo' alt='brute' />
					<img src={icon2} className='header-class-logo' alt='scoundrel' />
					<div className='logo'>
						<h1 style={{ fontFamily: ghfont }} className='title'>
							Party Tracker
						</h1>
						<img src={xp} className='App-logo' alt='xp' />
						{/* <h1> the Lion</h1> */}
					</div>
					<img src={icon3} className='header-class-logo' alt='sun' />
					<img src={icon4} className='header-class-logo' alt='spellweaver' />
				</div>
				<div id='subtitle'>
					<h2 id='subtitle-text'>
						Jaws <span>of the</span> Lion
					</h2>
				</div>
			</header>
			{/* <Slide direction="top" in={props.open}  > */}
			{showPeak(props.open)}
			{/* </Slide> */}
		</>
	);
}

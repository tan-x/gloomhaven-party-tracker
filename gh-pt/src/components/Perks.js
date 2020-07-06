import React, { useState, useContext } from 'react';
import firebase from "../Firebase";
import StatContext from '../Context';
import Checks from './Checks';
import reactStringReplace from 'react-string-replace';
import fire from '../assets/Element Icons/fire.png';
import air from '../assets/Element Icons/air.png';
import dark from '../assets/Element Icons/dark.png';
import earth from '../assets/Element Icons/earth.png';
import ice from '../assets/Element Icons/ice.png';
import light from '../assets/Element Icons/light.png';
import curse from '../assets/status-fx/curse.png';
import disarm from '../assets/status-fx/disarm.png';
import immobilize from '../assets/status-fx/immobilize.png';
import muddle from '../assets/status-fx/muddle.png';
import poison from '../assets/status-fx/poison.png';
import pull from '../assets/status-fx/pull.png';
import push from '../assets/status-fx/push.png';
import stun from '../assets/status-fx/stun.png';
import wound from '../assets/status-fx/wound.png';

var req = require.context("../assets/Element Icons", false, /.*\.png$/);
req.keys().forEach(function(key){
    req(key);
});

console.log();

export default function Perks(props) {
	const [statContext, setStatContext] = useContext(StatContext);
	const [perks, setPerks] = useState(statContext[props.route].perks);
	const [checksVisible, setChecksVisible] = useState({ visible: false });

	function replace(text) {
		let placeholder = ['fire', 'air', 'dark', 'light', 'earth', 'ice', 'curse', 'disarm', 'immobilize', 'muddle', 'poison', 'pull', 'push', 'stun', 'wound'];
		let src = [fire, air, dark, light, earth, ice, curse, disarm, immobilize, muddle, poison, pull, push, stun, wound];
		placeholder.forEach((pholder, i) => {
			text = reactStringReplace(text, pholder, (match) => {
				return <img src={src[i]} alt={pholder} className="perk-icon"/>
			})
		})
		return text;
	}

	if (!checksVisible.visible) {
		return (
			<>
				<h2 className='modal-header'>Perks</h2>
				{perks.map((perk, key) => {
					return (
						<div className='perk-row' key={key}>
							<div className='checkboxes'>
								{perk.checked.map((box, id) => {
									if (box) {
										return (
											<input
												type='checkbox'
												className='checkbox'
												perk={`${key}`}
												key={id}
												id={id}
												defaultChecked={perks[key].checked}
												onChange={(e) => {
													setPerks((previousState) => {
														previousState[key].checked[e.target.id] = !previousState[key].checked[
															e.target.id
														];
														return previousState;
													});
													firebase.firestore().collection('starstreak').doc(props.route).update({perks: perks});
												}}
											/>
										);
									} else {
										return (
											<input
												type='checkbox'
												className='checkbox'
												perk={`${key}`}
												key={id}
												id={id}
												onChange={(e) => {
													setPerks((previousState) => {
														previousState[key].checked[e.target.id] = !previousState[key].checked[
															e.target.id
														];
														return previousState;
													});
													firebase.firestore().collection('starstreak').doc(props.route).update({perks: perks});
												}}
											/>
										);
									}
								})}
							</div>
							{/* <p className='perk-text'>{perk.text = reactStringReplace(perk.text, 'Fire', (match, i) => {
								return <img src={fire} alt={'fire'} className="perk-icon"/>
							})}</p> */}
							<p className='perk-text'><span>{replace(perk.text)}</span></p>
							
						</div>
					);
				})}
				<button
					className='additem'
					onClick={() => {
						setChecksVisible({ visible: true });
					}}
				>
					Check Log
				</button>
			</>
		);
	} else {
		return (
			<div className='columnFlex'>
				<Checks
					checks={statContext[props.route].checks}
					route={props.route}
					save={() => {
						setChecksVisible({ visible: false });
					}}
				/>
			</div>
		);
	}
}

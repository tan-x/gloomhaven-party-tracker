import React, { useState } from 'react';
import firebase from "../Firebase";
import Checks from './Checks';
import stats from '../stats';

export default function Perks(props) {
	const [perks, setPerks] = useState(stats[props.route].perks);
	const [checksVisible, setChecksVisible] = useState({ visible: false });
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
							<p className='perk-text'>{perk.text}</p>
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
					checks={stats[props.route].checks}
					route={props.route}
					save={() => {
						setChecksVisible({ visible: false });
					}}
				/>
			</div>
		);
	}
}

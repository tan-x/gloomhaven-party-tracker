import React, { useState } from 'react';
import stats from '../stats';

export default function Perks(props) {
	const [perks, setPerks] = useState(stats[props.route].perks);
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
											}}
										/>
										// setPerks([...perks, perks[key].checked[id] = !perks[key].checked[id]])
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
											}}
										/>
									);
								}
							})}
						</div>
						{/* <input type="checkbox" id={`perk${key}`} checked={perks[key].checked}></input> */}
						<p className='perk-text'>{perk.text}</p>
					</div>
				);
			})}
			<input type='checkbox' className='checkbox checks'/>
            <input type='checkbox' className='checkbox checks'/>
            <input type='checkbox' className='checkbox checks'/>
		</>
	);
}

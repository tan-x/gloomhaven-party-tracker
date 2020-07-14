import React, { useContext, useEffect, useState } from 'react';
import StatContext from '../Context';
import firebase from '../Firebase';
import Slide from '@material-ui/core/Slide';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import xp from '../assets/xpicon.svg';

export default function MakeshiftDrawer(props) {
	const statContext = useContext(StatContext);
	const [partySize, setPartySize] = useState(0);

	function handleListItemClick(event, index) {
		props.addchar(event);
	}

	useEffect(() => {
		var test = 0;
		for (const obj in statContext[0]) {
			if (statContext[0][obj].inParty === true) {
				test++;
			}
		}
		setPartySize(test);
	}, [statContext[0]]);

	const renderAddChar = () => {
		return (
			<ListItem button id='addChar' onClick={(event) => handleListItemClick(event, 1)}>
				<img id='addChar' src={xp} className='header-class-logo' alt='menu icon' />
				<h3 id='addChar' className='menuItem'>
					{' '}
					Add Character
				</h3>
			</ListItem>
		);
	};

	return (
		<Slide direction='down' in={props.open} mountOnEnter unmountOnExit>
			<div className='drawer'>
				<div className='drawer-dimmer'>
					<List component='nav' aria-label='main mailbox folders'>
						{partySize < 4 && renderAddChar()}
						<ListItem id='partyMgr' button onClick={(event) => handleListItemClick(event, 1)}>
							<img id='partyMgr' src={xp} className='header-class-logo' alt='menu icon' />
							<h3 id='partyMgr' className='menuItem'>
								{' '}
								Party Manager
							</h3>
						</ListItem>
						<ListItem button id='unlocks' onClick={(event) => handleListItemClick(event, 2)}>
							<img id='unlocks' src={xp} className='header-class-logo' alt='menu icon' />
							<h3 id='unlocks' className='menuItem'>
								{' '}
								Unlocks
							</h3>
						</ListItem>
						<ListItem id='logout' button onClick={(event) => handleListItemClick(event, 3)}>
							<img id='logout' src={xp} className='header-class-logo' alt='menu icon' />
							<h3
								id='logout'
								className='menuItem'
								onClick={() => {
									firebase
										.auth()
										.signOut()
										.then((res) => {
											statContext[3](false);
										});
								}}
							>
								Logout
							</h3>
						</ListItem>
					</List>
					<h2 id='drawerArrow'>&#x25bc;</h2>
				</div>
			</div>
		</Slide>
	);
}

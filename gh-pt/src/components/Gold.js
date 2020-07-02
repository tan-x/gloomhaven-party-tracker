import React from 'react';
import firebase from "../Firebase";
import StatContext from '../Context';

export default class Perks extends React.Component {
	constructor(props) {
		super();
		this.inputRef = React.createRef();
	}

	static contextType = StatContext;

	updateGold() {
		const statContext = this.context;
		if (this.inputRef.current.value) {
			let newGold = statContext[0][this.props.route].gold + parseInt(this.inputRef.current.value);
			if (newGold < 0) {
				newGold = 0;
			}
			const newStats = Object.assign({}, statContext[0]);
			newStats[this.props.route].gold = newGold;
			statContext[1](newStats);
			firebase.firestore().collection('starstreak').doc(this.props.route).update({
				gold: newGold,
			});
		}
	}

	render() {
		return (
			<StatContext.Consumer>
				{([stats, setStats]) => {
					return (
						<>
							<h2 className='modal-header'>Gold</h2>
							<h2>{stats[this.props.route].gold}</h2>
							<div className='goldSubmit'>
								<div className='perk-row gold-row'>
									<button name='subGold' onClick={() => this.inputRef.current.value--}>
										-
									</button>
									<input type='number' id='gold' name='goldAdd' ref={this.inputRef} />
									<button name='addGold' onClick={() => this.inputRef.current.value++}>
										+
									</button>
								</div>
								<div className='perk-row gold-row'>
									<button id='updateGold' name='update' onClick={() => this.updateGold()}>
										Update
									</button>
								</div>
							</div>
						</>
					);
				}}
			</StatContext.Consumer>
		);
	}
}

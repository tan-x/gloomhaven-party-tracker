import React from 'react';
import firebase from '../Firebase';
import StatContext from '../Context';

export default class Perks extends React.Component {
	constructor(props) {
		super(props);
		this.state = { selectValue: 'None', newName: '', availChars: [], options: [] };
	}

	static contextType = StatContext;

	componentDidMount() {
		const statContext = this.context;
		const statsRef = statContext[0];
		const newAvailChars = [];
		const newOptions = [];
		for (const char in statsRef) {
			if (statsRef[char].inParty === false) {
				newAvailChars.push(statsRef[char].class);
				newOptions.push(<option>{statsRef[char].class}</option>);
			}
		}
		if (newOptions.length == 0) {
			newOptions.push(<option>None</option>);
		}
		this.setState({
			selectValue: newAvailChars[0],
			availChars: newAvailChars,
			options: newOptions,
		});
		return this.state.options;
	};

	addCharacter(e) {
		if (this.state.selectValue && this.state.selectValue !== 'None') {
			const statContext = this.context;
			let lowerCase = this.state.selectValue.toLowerCase();
			if (lowerCase === 'red guard') {
				lowerCase = 'redGuard'
			}
			const newStats = Object.assign({}, statContext[0]);
			newStats[lowerCase].name = this.state.newName;
			newStats[lowerCase].inParty = true;
			statContext[1](newStats);
			firebase.firestore().collection(statContext[4][0]).doc(lowerCase).update(newStats[lowerCase]);
		}
		this.props.onclose();
	}

	render() {
		return (
			<div className='columnFlex'>
				<h2 className='modal-header'>Add Character</h2>
				<select
					name='type'
					id='shop-filter'
					onChange={(e) => {
						this.setState({ selectValue: e.target.value.toLowerCase() });
					}}
				>
					{this.state.options}
				</select>
				<input
					type='text'
					id='addChar-name'
					name='goldAdd'
					placeholder='Name'
					onChange={(e) => {
						this.setState({ newName: e.target.value });
					}}
				/>
				<button
					className='additem'
					onClick={() => {
						this.addCharacter();
					}}
					// onMouse={this.props.onclose}
				>
					Add
				</button>
			</div>
		);
	}
}

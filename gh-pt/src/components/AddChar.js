import React from 'react';
import firebase from "../Firebase";
import StatContext from '../Context';
import rgicon from '../assets/class-icons/rgicon.png';
import hatchicon from '../assets/class-icons/hatcheticon.png';

export default class Perks extends React.Component {
	constructor(props) {
		super(props);
        this.state = { selectValue: 'None', newName: '', availChars: [], options: []};
	}

    static contextType = StatContext;

    renderOptions = () => {
        const statContext = this.context;
        const statsRef = statContext[0];
        console.log(statContext[0])
        const newAvailChars = [];
        const newOptions = [];
		for (const char in statsRef) {
			if (!statsRef[char].inParty) {
                newAvailChars.push(statsRef[char].class);
                newOptions.push(<option>{statsRef[char].class}</option>)
			}
        }
        if(newOptions.length == 0) {
            newOptions.push(<option>None</option>);
        };
        this.state = {...this.state, selectValue: newAvailChars[0], availChars: newAvailChars, options: newOptions};
		return this.state.options;
	}
    
    addCharacter(e) {
        if (this.state.selectValue && this.state.selectValue !== 'None') {
            const statContext = this.context;
            const lowerCase = this.state.selectValue.toLowerCase();
            const newStats = Object.assign({}, statContext[0]);
            newStats[lowerCase].name = this.state.newName;
            newStats[lowerCase].inParty = true;
            statContext[1](newStats);
            firebase.firestore().collection(statContext[4]).doc(lowerCase).update(newStats[lowerCase]);
        }
        this.props.onclose();
    }

	render() {
		return (
            <div className="columnFlex">
                <h2 className='modal-header'>Add Character</h2>
                <select
					name='type'
                    id='shop-filter'
					onChange={(e) => {
                        this.state = ({...this.state, selectValue: e.target.value.toLowerCase()});
					}}
				>
                    {this.renderOptions()}
                </select>
                <input type='text' id='addChar-name' name='goldAdd' placeholder="Name" onChange={(e) => {this.state = ({...this.state, newName: e.target.value})}}/>
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

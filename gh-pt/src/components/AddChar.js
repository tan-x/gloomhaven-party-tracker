import React from 'react';
import firebase from "../Firebase";
import StatContext from '../Context';
import rgicon from '../assets/class-icons/rgicon.png';
import hatchicon from '../assets/class-icons/hatcheticon.png';

export default class Perks extends React.Component {
	constructor(props) {
		super(props);
        this.state = { selectValue: 'voidwarden', newName: '' };
	}

    static contextType = StatContext;
    
    addCharacter() {
        const statContext = this.context;
        const newStats = Object.assign({}, statContext[0]);
        newStats[this.state.selectValue].name = this.state.newName;
        console.log(this.state.newName);
        statContext[1](newStats);
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
                    <option>Voidwarden</option>
                    <option>Demolitionist</option>
                </select>
                {/* <img src={this.state.selectValue === 'Voidwarden' ? rgicon : hatchicon} className="card-class-logo" alt="class logo"/> */}
                <input type='text' id='addChar-name' name='goldAdd' placeholder="Name" onChange={(e) => {this.state = ({...this.state, newName: e.target.value})}}/>
                <button
						className='additem'
						onClick={() => {
                            this.addCharacter();
                        }}
                        onMouseDown={this.props.onclose}
					>
						Add
					</button>
            </div>
		);
	}
}

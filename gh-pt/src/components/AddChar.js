import React from 'react';
import firebase from "../Firebase";
import StatContext from '../Context';
import rgicon from '../assets/class-icons/rgicon.png';
import hatchicon from '../assets/class-icons/hatcheticon.png';

export default class Perks extends React.Component {
	constructor(props) {
		super(props);
        this.state = { selectValue: '', newName: '' };
        this.availChars = [];
        this.optionRef = React.createRef();
        console.log(this.state.selectValue);
	}

    static contextType = StatContext;

    componentDidMount() {
        const statContext = this.context;
		const statsRef = statContext[0];
		for (const char in statsRef) {
            // console.log(statsRef[char]);
			if (!statsRef[char].inParty) {
				// console.log(statsRef[char].inParty);
				this.availChars.push(<option>{statsRef[char].class}</option>)
			}
        }
        this.state = {...this.state, selectValue: this.availChars[0]};
    }

    renderOptions = () => {
        this.availChars = [];
        const statContext = this.context;
		const statsRef = statContext[0];
		for (const char in statsRef) {
            // console.log(statsRef[char]);
			if (!statsRef[char].inParty) {
				// console.log(statsRef[char].inParty);
				this.availChars.push(<option>{statsRef[char].class}</option>)
			}
        }
        this.state = {...this.state, selectValue: this.availChars[0]};
		return this.availChars;
	}
    
    addCharacter() {
        console.log(this.state.selectValue)
        if (typeof this.state.selectValue === 'String') {
            const statContext = this.context;
            const newStats = Object.assign({}, statContext[0]);
            newStats[this.optionRef.current.value.toLowerCase()].name = this.state.newName;
            newStats[this.state.selectValue].inParty = true;
            statContext[1](newStats);
            firebase.firestore().collection('starstreak').doc(this.state.selectValue).update(newStats[this.state.selectValue]);
        }
    }

	render() {
		return (
            <div className="columnFlex">
                {this.availChars > 0 && <h2 className='modal-header'>Add Character</h2>}
                <select
					name='type'
                    id='shop-filter'
                    ref={this.optionRef}
					onChange={(e) => {
                        this.state = ({...this.state, selectValue: e.target.value.toLowerCase()});
					}}
				>
                    {this.renderOptions()}
                </select>
                {/* <img src={this.state.selectValue === 'Voidwarden' ? rgicon : hatchicon} className="card-class-logo" alt="class logo"/> */}
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

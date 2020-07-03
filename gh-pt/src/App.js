import React from 'react';
import firebase from './Firebase';
import StatContext from './Context';
import { GlobalStyles } from './global';
import Header from './components/Header';
import Card from './components/Card';
import Modal from './components/Modal';
import stats from './stats';
import './App.css';

class App extends React.Component {
	constructor() {
		super();
		this.state = {
			show: false,
			modalRoute: '',
			stats: stats,
			setStats: this.setStats,
			partySize: 0,
		};
	}

	componentDidMount() {
		const db = firebase.firestore();
		const statsRef = db.collection('starstreak');
		statsRef
			.get()
			.then((querySnapshot) => {
				let fireStats = {};
				querySnapshot.forEach(function (doc) {
					if (doc.data().class) {
						let docId = doc.id;
						let docData = doc.data();
						fireStats = { ...fireStats, [docId]: docData };
					}
				});
				this.setStats(fireStats);
			})
			.catch(function (error) {
				console.log('Error getting documents: ', error);
			});
	}

	setStats = (newStats) => {
		this.setState({ ...this.state, stats: newStats });
	};

	showModal = (e) => {
		this.setState({ show: !this.state.show, modalRoute: e.id, charRoute: e.name });
	};
	hideModal = (e) => {
		this.state.show && this.setState({ show: !this.state.show });
	};

	renderChars = () => {
		const charCards = [];
		const statsRef = this.state.stats;
		let partySize = 0;
		for (const char in statsRef) {
			if (statsRef[char].inParty) {
				partySize++;
				charCards.push(
					<Card
						stats={statsRef}
						key={char}
						name={statsRef[char].name}
						class={statsRef[char].class}
						classimg={char}
						onclick={(e) => {
							this.showModal(e.target);
						}}
					></Card>
				);
			}
		}
		this.state = { ...this.state, partySize: partySize };
		charCards.reverse();
		return charCards;
	};

	addCharButton = () => {
		console.log(this.state.partySize);
		if (this.state.partySize < 4) {
			return (
				<div
					id='addChar'
					className='addChar'
					onClick={(e) => {
						this.showModal(e.target);
					}}
				>
					<h2 id='addChar'>+</h2>
					<p id='addChar'>
						Add
						<br /> Character
					</p>
				</div>
			);
		}
	};

	render() {
		return (
			<StatContext.Provider value={[this.state.stats, this.setStats]}>
				<GlobalStyles />
				<Header />
				<div
					className='body'
					onClick={() => {
						this.hideModal();
					}}
				>
					
					{this.addCharButton()}
					<div
						className='scrollview'
						onClick={() => {
							this.hideModal();
						}}
					>
						{this.renderChars()}
					</div>
				</div>
				<Modal
					stats={this.state.stats}
					show={this.state.show}
					onclose={() => {
						this.hideModal();
					}}
					modalRoute={this.state.modalRoute}
					charRoute={this.state.charRoute}
				/>
			</StatContext.Provider>
		);
	}
}

export default App;

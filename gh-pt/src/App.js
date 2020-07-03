import React from 'react';
import { motion } from "framer-motion";
import firebase from './Firebase';
import MakeshiftDrawer from './components/MakeshiftDrawer';
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
			showAddChar: true,
			isOpen: false,
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
		if (e.id !== 'logout') {
			this.setState({show: !this.state.show, modalRoute: e.id, charRoute: e.name, isOpen:false });
		}
	};

	hideModal = (e) => {
		this.state.show && this.setState({show: !this.state.show });
	};



	showDrawer = () => {
		if (this.state.isOpen) {
			this.setState({ isOpen: false })
		} else {
			this.setState({ isOpen: true })
		}
	}

	hideDrawer = () => {
		this.setState({ isOpen: false });
	}

	renderChars = () => {
		const charCards = [];
		const statsRef = this.state.stats;
		let partySize = 0;
		for (const char in statsRef) {
			if (statsRef[char].inParty) {
				partySize++;
				charCards.push(
					<motion.div
				style={{opacity: 0}}
				animate={{opacity: 1}}
				transition={{ duration: 1 }}
				>
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
					</motion.div>
				);
			}
		}
		if (partySize === 4) {
			this.state = { ...this.state, showAddChar: false };
		}
		charCards.reverse();
		return charCards;
	};

	addCharButton = () => {
		if (this.state.showAddChar) {
			return (
				<motion.div
				style={{opacity: 0}}
				animate={{opacity: 1}}
				transition={{ delay: 1, duration: 1 }}
				>
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
				</motion.div>)
		}
	};

	render() {
		return (
			<StatContext.Provider value={[this.state.stats, this.setStats, this.state.showAddChar]}>
				<GlobalStyles />
				<Header onclick={this.showDrawer} open={this.state.isOpen}/>
				<div
					className='body'
					onClick={() => {
						this.hideModal();
					}}
				>


					<div
						className='scrollview'
						onClick={() => {
							this.hideModal();
							this.hideDrawer();
						}}
					>
						{this.renderChars()}

					</div>
					{/* {this.addCharButton()} */}
					
				</div>

				<MakeshiftDrawer open={this.state.isOpen} addchar={(e) => {
						this.showModal(e.target);
						this.hideDrawer();
					}} />
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

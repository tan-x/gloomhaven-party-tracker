import React from 'react';
import { motion } from 'framer-motion';
import firebase from '../Firebase';
import MakeshiftDrawer from './MakeshiftDrawer';
import StatContext from '../Context';
import Header from './Header';
import Card from './Card';
import Modal from './Modal';

class Main extends React.Component {
	constructor() {
		super();
		this.state = {
			show: false,
			modalRoute: '',
			stats: {},
			setStats: this.setStats,
			showAddChar: true,
			isOpen: false,
			isLoggedIn: false,
			party: '',
			partyIndex: 0,
		};
	}

	static contextType = StatContext;

	componentDidMount() {
		const statContext = this.context;
		const db = firebase.firestore();
		const user = firebase.auth().currentUser;
		let party;
		// set userDB reference to get user data using current user id
		// const userRef = db.collection('users').doc(user.uid);
		// get user data and main party name, set to state
		console.log(statContext[4]);
		db.collection('users')
			.doc(user.uid)
			.get()
			.then((querySnapshot) => {
				if (querySnapshot.data().party[0] !== '') {
					party = querySnapshot.data().party;
					this.setState({ party: party });
					statContext[5](party);
					// set statsDB ref using retrieved party name for collection
					const statsRef = db.collection(this.state.party[0]);
					statsRef
						.get()
						.then((query) => {
							let fireStats = {};
							query.forEach(function (doc) {
								console.log(doc.id)
								// set up local copy of character data from party and put in context
									let docId = doc.id;
									let docData = doc.data();
									if (docId !== 'items') {
										fireStats = { ...fireStats, [docId]: docData };
									} else {
										statContext[9](doc.data())
									}
							});
							statContext[1](fireStats);
						})
						.catch(function (error) {
							console.log('Error getting documents: ', error);
						});
				} else {
					// if user has no party set up yet, use the template data set and put in context
					// const statsRef = db.collection('template');
					// this.setState({ party: 'template' });
					// statsRef
					// 	.get()
					// 	.then((querySnapshot) => {
					// 		let fireStats = {};
					// 		querySnapshot.forEach(function (doc) {
					// 				let docId = doc.id;
					// 				let docData = doc.data();
					// 				if (docId !== 'items') {
					// 					fireStats = { ...fireStats, [docId]: docData };
					// 				} else {
					// 					statContext[9](docData);
					// 				}
					// 		});
					// 		statContext[1](fireStats);
							this.setState({ show: true, modalRoute: 'partyMgr' });
						// })
						// .catch(function (error) {
						// 	console.log('Error getting documents: ', error);
						// });
				}
console.log(statContext)
			});
	}

	setStats = (newStats) => {
		this.setState({ ...this.state, stats: newStats });
	};

	setLoggedIn = (loggedIn) => {
		this.setState({ ...this.state, isLoggedIn: loggedIn });
	};

	showModal = (e) => {
		if (e.id !== 'logout') {
			this.setState({ show: !this.state.show, modalRoute: e.id, charRoute: e.name, isOpen: false });
		}
	};

	hideModal = (e) => {
		this.state.show && this.setState({ show: !this.state.show });
	};

	showDrawer = () => {
		if (this.state.isOpen) {
			this.setState({ isOpen: false });
		} else {
			this.setState({ isOpen: true });
		}
	};

	hideDrawer = () => {
		this.setState({ isOpen: false });
	};

	// render all characters' cards that are in the current user's party
	renderChars = () => {
		const statContext = this.context;
		const charCards = [];
		const statsRef = statContext[0];
		for (const char in statsRef) {
			if (statsRef[char].inParty) {
				charCards.push(
					<motion.div style={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }}>
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
		charCards.reverse();
		return charCards;
	};

	render() {
		return (
			<StatContext.Consumer>
				{([stats, setStats, isLoggedIn, setLoggedIn, party, setParty, items, setItems]) => {
					return (
						<>
							<Header onclick={this.showDrawer} open={this.state.isOpen} />
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

							<MakeshiftDrawer
								open={this.state.isOpen}
								addchar={(e) => {
									this.showModal(e.target);
									this.hideDrawer();
								}}
							/>
							<Modal
								stats={this.state.stats}
								show={this.state.show}
								onclose={() => {
									this.hideModal();
								}}
								modalRoute={this.state.modalRoute}
								charRoute={this.state.charRoute}
							/>
						</>
					);
				}}
			</StatContext.Consumer>
		);
	}
}

export default Main;

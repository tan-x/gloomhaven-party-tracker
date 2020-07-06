import React, {useEffect} from 'react';
import { motion } from 'framer-motion';
import firebase, { config } from './Firebase';
import MakeshiftDrawer from './components/MakeshiftDrawer';
import StatContext from './Context';
import { GlobalStyles } from './global';
import Header from './components/Header';
import Card from './components/Card';
import Main from './components/Main';
import Login from './components/Login';
import stats from './stats';
import './App.css';

class App extends React.Component {
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
			party: ['template']
		};
	}

	

	// componentDidMount() {
	// 	const db = firebase.firestore();
	// 	const statsRef = db.collection('starstreak');
	// 	statsRef
	// 		.get()
	// 		.then((querySnapshot) => {
	// 			let fireStats = {};
	// 			querySnapshot.forEach(function (doc) {
	// 				if (doc.data().class) {
	// 					let docId = doc.id;
	// 					let docData = doc.data();
	// 					fireStats = { ...fireStats, [docId]: docData };
	// 				}
	// 			});
	// 			this.setStats(fireStats);
	// 		})
	// 		.catch(function (error) {
	// 			console.log('Error getting documents: ', error);
	// 		});
	// 	var user = firebase.auth().currentUser;
	// 	var name, email, photoUrl, uid, emailVerified;
		
	// 	if (user != null) {
	// 		name = user.displayName;
	// 		email = user.email;
	// 		photoUrl = user.photoURL;
	// 		emailVerified = user.emailVerified;
	// 		uid = user.uid;  // The user's ID, unique to the Firebase project. Do NOT use
	// 						// this value to authenticate with your backend server, if
	// 						// you have one. Use User.getToken() instead.
	// 		}
	// 		console.log(name)
	// }

	setStats = (newStats) => {
		this.setState({ ...this.state, stats: newStats });
	};

	setLoggedIn = (loggedIn) => {
		this.setState({ ...this.state, isLoggedIn: loggedIn });
	};

	setParty = (party) => {
		this.setState({ ...this.state, party: party });
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

	renderChars = () => {
		const charCards = [];
		const statsRef = this.state.stats;
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

	addCharButton = () => {
		if (this.state.showAddChar) {
			return (
				<motion.div
					style={{ opacity: 0 }}
					animate={{ opacity: 1 }}
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
				</motion.div>
			);
		}
	};

	render() {
		if (this.state.isLoggedIn === true) {
			return (
				<StatContext.Provider value={[this.state.stats, this.setStats, this.state.isLoggedIn, this.setLoggedIn, this.state.party, this.setParty]}>
					<GlobalStyles />
					<Main/>
				</StatContext.Provider>
			);
		} else {
			return (
				<StatContext.Provider value={[this.state.stats, this.setStats, this.state.isLoggedIn, this.setLoggedIn, this.state.party, this.setParty]}>
					<GlobalStyles />
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
							<Login/>
						</div>
					</div>
				</StatContext.Provider>
			)
		}
		
	}
}

export default App;

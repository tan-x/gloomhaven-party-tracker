import React from 'react';
import { motion } from 'framer-motion';
import firebase, { config } from '../Firebase';
import MakeshiftDrawer from './MakeshiftDrawer';
import StatContext from '../Context';
import { GlobalStyles } from '../global';
import Header from './Header';
import Card from './Card';
import Modal from './Modal';
import Login from './Login';
import stats from '../stats';
import '../App.css';

class Main extends React.Component {
	constructor() {
		super();
		this.state = {
			show: false,
			modalRoute: '',
			stats: stats,
			setStats: this.setStats,
			showAddChar: true,
			isOpen: false,
            isLoggedIn: false,
            party: '',
		};
    }
    
    static contextType = StatContext;

	componentDidMount() {
		const statContext = this.context;
        const db = firebase.firestore();
        const user = firebase.auth().currentUser;
        let party;
        const userRef = db.collection('users').doc(user.uid);
        db.collection('users').doc(user.uid).get().then(querySnapshot => {
            if (querySnapshot.data().party) {
                party = querySnapshot.data().party;
                this.setState({party: party[0]});
                const statsRef = db.collection(party[0]);
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
                        statContext[1](fireStats);
                    })
                    .catch(function (error) {
                        console.log('Error getting documents: ', error);
                    });
            } else {
                const statsRef = db.collection('template');
                this.setState({party: 'template'});
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
                        statContext[1](fireStats);
                    })
                    .catch(function (error) {
                        console.log('Error getting documents: ', error);
                    });
            }
            
        })
		
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
                    {([stats, setStats]) => {
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

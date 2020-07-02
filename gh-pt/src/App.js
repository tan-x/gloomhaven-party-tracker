import React from 'react';
import firebase from "./Firebase";
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
	this.state = { show: false, modalRoute: '', stats: stats, setStats: this.setStats };
  }
  
  componentDidMount() {
    const db = firebase.firestore();
    const statsRef = db.collection("starstreak");
    statsRef.get().then((querySnapshot) => {
      let fireStats = {};
      querySnapshot.forEach(function (doc) {
        if (doc.data().class) {
          let docId = doc.id;
          let docData = doc.data();
          fireStats = {...fireStats, [docId]: docData};
        }
      });
      this.setStats(fireStats);
    })
    .catch(function (error) {
      console.log("Error getting documents: ", error);
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
		for (const char in statsRef) {
			if (statsRef[char].inParty) {
				charCards.push(
					<Card
						stats={statsRef}
						name={statsRef[char].name}
						class={statsRef[char].class}
						classimg={char}
						onclick={(e) => {
							this.showModal(e.target);
						}}
					></Card>
				)
			}
		}
		charCards.reverse();
		return charCards;
	}

	render() {
		return (
				<StatContext.Provider value={[this.state.stats, this.setStats]}>
					<GlobalStyles />
					<Header />
					<div className='body'>
						<div
							className='scrollview'
							onClick={() => {
								this.hideModal();
							}}
						>
							<div id="addChar" className="addChar" onClick={(e) => {this.showModal(e.target)}}>
								<h2 id="addChar">+</h2>
								<p id="addChar">Add<br/> Character</p>
							</div>
							{this.renderChars()}
							{/* <Card
								stats={this.state.stats}
								name='Tormir'
								class='Red Guard'
								classimg='redGuard'
								onclick={(e) => {
									this.showModal(e.target);
								}}
							></Card>
							<Card
								stats={this.state.stats}
								name='Malek'
								class='Hatchet'
								classimg='hatchet'
								onclick={(e) => {
									this.showModal(e.target);
								}}
							></Card> */}
						</div>
					</div>
					<Modal
						stats={this.state.stats}
						show={this.state.show}
						onclose={(e) => {
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

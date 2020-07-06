import React from 'react';
import firebase, { config } from '../Firebase';
import StatContext from '../Context';
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';
import ruleline from '../assets/ruleline1.png';
import border from '../assets/border2.png';
import '../style/Card.css';

export default class Login extends React.Component {
	static contextType = StatContext;
	state = {
		isSignedIn: false, // Local signed-in state.
	};

	// Configure FirebaseUI.
	uiConfig = {
		// Popup signin flow rather than redirect flow.
		signInFlow: 'popup',
		// We will display Google and Facebook as auth providers.
		signInOptions: [
            firebase.auth.GoogleAuthProvider.PROVIDER_ID,
            firebase.auth.EmailAuthProvider.PROVIDER_ID
		],
		callbacks: {
			// Avoid redirects after sign-in.
			signInSuccessWithAuthResult: () => false,
		},
	};

	// Listen to the Firebase Auth state and set the local state.
	componentDidMount() {
		const statContext = this.context;
		this.unregisterAuthObserver = firebase.auth().onAuthStateChanged((user) => {
			this.setState({ isSignedIn: !!user });
			console.log(user);
			statContext[3](!!user);
		});
	}

	// Make sure we un-register Firebase observers when the component unmounts.
	componentWillUnmount() {
		this.unregisterAuthObserver();
	}

	render() {
		if (!this.state.isSignedIn) {
			return (
				<div>
					<h1>My App</h1>
					<p>Please sign-in:</p>
					<StyledFirebaseAuth uiConfig={this.uiConfig} firebaseAuth={firebase.auth()} />
				</div>
			);
		}
		return (
			<div>
				<h1>My App</h1>
				<p>Welcome {firebase.auth().currentUser.displayName}! You are now signed-in!</p>
				<a onClick={() => firebase.auth().signOut()}>Sign-out</a>
			</div>
		);
	}
}

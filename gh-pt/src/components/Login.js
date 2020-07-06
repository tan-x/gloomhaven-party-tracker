import React from 'react';
import firebase, { config } from '../Firebase';
import StatContext from '../Context';
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';

export default class Login extends React.Component {
	static contextType = StatContext;
	state = {
        isSignedIn: false, // Local signed-in state.
        userExists: false,
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
            if (user != null) {
                firebase.firestore().collection('users').get().then(querySnapshot => {
                    querySnapshot.forEach((doc) => {
                        if(doc.data().uid === user.uid) {
							statContext[5](doc.data().party)
							this.setState({ userExists: true });
                        }
					})
					this.setState({ isSignedIn: !!user });
					statContext[3](!!user);
                }).then(() => {
                    if (!this.state.userExists) {
                        let userData = {
                            name: user.displayName,
                            email: user.email,
                            photoUrl: user.photoURL,
                            emailVerified: user.emailVerified,
							uid: user.uid,
							party: ["template"]
                        }
						firebase.firestore().collection('users').doc(userData.uid).set(userData).then(() => {
							statContext[5](userData.party);
							this.setState({ userExists: true });
							this.setState({ isSignedIn: !!user });
							statContext[3](!!user);
						});
                    }
                })
                
            }
            
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

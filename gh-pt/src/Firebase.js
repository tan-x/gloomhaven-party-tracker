import * as firebase from "firebase/app";
import * as firebaseui from 'firebaseui';
import "firebase/firestore";

export const firebaseConfig = {
    apiKey: "AIzaSyDMP0FGRfMfSIQIYc0x1qlW1SSwKA_DRf4",
    authDomain: "ghpartytracker.firebaseapp.com",
    databaseURL: "https://ghpartytracker.firebaseio.com",
    projectId: "ghpartytracker",
    storageBucket: "ghpartytracker.appspot.com",
    messagingSenderId: "675542052221",
    appId: "1:675542052221:web:782ae63b97562e49b93014",
    measurementId: "G-39WBY8QF9B"
  };

firebase.initializeApp(firebaseConfig);

export default firebase
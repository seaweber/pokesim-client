import firebase from 'firebase';
import axios from 'axios';

const firebaseConfig = {
    apiKey: "AIzaSyByBIqKfdI1Dc_QZ_LCAQvjQo8ijJxtcoc",
    authDomain: "pokemon-412.firebaseapp.com",
    databaseURL: "https://pokemon-412.firebaseio.com",
    projectId: "pokemon-412",
    storageBucket: "pokemon-412.appspot.com",
    messagingSenderId: "182425498567",
    appId: "1:182425498567:web:f43bb45768845944eb9fe2",
    measurementId: "G-NMGDW4C92Q"
};

// Initialize Firebase
firebase.initializeApp( firebaseConfig );

const provider = new firebase.auth.GoogleAuthProvider();

export const signInWithGoogle = () => {

    auth.signInWithRedirect( provider );
};

export const auth = firebase.auth();

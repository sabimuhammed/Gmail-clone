import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyAoSELjY96VCNJNrR-aviph4UzEWEgZ25A",
    authDomain: "clone-bdf42.firebaseapp.com",
    projectId: "clone-bdf42",
    storageBucket: "clone-bdf42.appspot.com",
    messagingSenderId: "209229454793",
    appId: "1:209229454793:web:81e5d7ed67186a3c949c18",
    measurementId: "G-Q4SEL2DQ6G"
  };
  
const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider()

export {db,auth,provider};
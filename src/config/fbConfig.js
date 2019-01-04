import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

var config = {
    apiKey: "AIzaSyBjir3DldRuvWOdmzkdZaF-iifciktMZbk",
    authDomain: "examtravelappdb.firebaseapp.com",
    databaseURL: "https://examtravelappdb.firebaseio.com",
    projectId: "examtravelappdb",
    storageBucket: "examtravelappdb.appspot.com",
    messagingSenderId: "110414332218"
  };

firebase.initializeApp(config);
firebase.firestore().settings({ timestampsInSnapshots: true})

export default firebase;

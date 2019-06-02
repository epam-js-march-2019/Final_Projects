import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'


// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyD8C2J2d4Z3JBPUXxO8r_Vj--7ZoyxaZl8",
    authDomain: "barberproject-7a975.firebaseapp.com",
    databaseURL: "https://barberproject-7a975.firebaseio.com",
    projectId: "barberproject-7a975",
    storageBucket: "barberproject-7a975.appspot.com",
    messagingSenderId: "846302877202",
    appId: "1:846302877202:web:e1ef3216965443ff"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.firestore().settings({ timestampsInSnapshots: true});

export default firebase;
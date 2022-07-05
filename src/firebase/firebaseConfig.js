import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore/lite';

const firebaseConfig = {
    apiKey: "AIzaSyAx2UQ36rjYKlW0gOMLp_tGJINE4oXRNs8",
    authDomain: "smautoleds.firebaseapp.com",
    projectId: "smautoleds",
    storageBucket: "smautoleds.appspot.com",
    messagingSenderId: "900604398046",
    appId: "1:900604398046:web:d0d79375593e0233e5b54f",
    measurementId: "G-LDERX4WS1P"
};

// Initialize Firebase
const FirebaseApp = initializeApp(firebaseConfig);
// Initialize FirebaseAuth
const FirebaseAuth = getAuth(FirebaseApp);
// Initialize Database
const FirebaseDB = getFirestore(FirebaseApp);

export {
    FirebaseAuth,
    FirebaseDB,
}
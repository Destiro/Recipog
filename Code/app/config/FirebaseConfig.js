import firebase from "firebase/app";
import "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyCEPkD5mnzpfOJCMDKVHC8GXGWqzeglCzo",
    authDomain: "recipog.firebaseapp.com",
    databaseURL: "https://recipog-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "recipog",
    storageBucket: "recipog.appspot.com",
    messagingSenderId: "688039776763",
    appId: "1:688039776763:web:0c4f1ee3c3906064b73b5e",
    measurementId: "G-T7YV44E4QH"
};

const getFirebase = () => {
    if(!firebase.apps.length) {
        firebase.initializeApp(firebaseConfig);
    } else {
        firebase.app(); //Already initialised
    }
    return firebase
}

export const db = getFirebase();

import firebase from "firebase/app";
import "firebase/firestore";
import Env from "./EnvironmentVariables";

const firebaseConfig = {
    apiKey: Env.apiKey,
    authDomain: Env.authDomain,
    databaseURL: Env.databaseURL,
    projectId: Env.projectId,
    storageBucket: Env.storageBucket,
    messagingSenderId: Env.messagingSenderId,
    appId: Env.appId,
    measurementId: Env.measurementId
};

//Checks if the firebase object is initialized, if so then retrieve it.
const getFirebase = () => {
    if(!firebase.apps.length) {
        firebase.initializeApp(firebaseConfig);
    } else {
        firebase.app(); //Already initialised
    }
    firebase.firestore();
    return firebase
}

export const db = getFirebase();

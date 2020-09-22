import firebase from "firebase";
import "firebase/storage";
import "firebase/firestore";
// Moyo web app's Firebase configuration
var firebaseConfig = {
	apiKey: "AIzaSyCA0fQYzByU9bSQaGh3xs29d-lcBAnBdJc",
	authDomain: "moyo-devs.firebaseapp.com",
	databaseURL: "https://moyo-devs.firebaseio.com",
	projectId: "moyo-devs",
	storageBucket: "moyo-devs.appspot.com",
	messagingSenderId: "568138860404",
	appId: "1:568138860404:web:5d6b01451bd3f276fdce21",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
// Defined moyo storage and firestore const to be used across components ecosystem
const moyoStorage = firebase.storage();
const moyoFirestore = firebase.firestore();
const timestamp = firebase.firestore.FieldValue.serverTimestamp();
export { moyoStorage, moyoFirestore, timestamp };

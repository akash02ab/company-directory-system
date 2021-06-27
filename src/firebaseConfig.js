import firebase from "firebase";
import "firebase/firestore";
// Your config code goes here.
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
	apiKey: "AIzaSyDiHTgkLGzkn8gI7II9RM_pFERkoGB0yDw",
	authDomain: "company-directory-1a2dc.firebaseapp.com",
	projectId: "company-directory-1a2dc",
	storageBucket: "company-directory-1a2dc.appspot.com",
	messagingSenderId: "446162765747",
	appId: "1:446162765747:web:879bbea6ed9dc76a906dc6",
	measurementId: "G-3399F1JZ2P",
};

firebase.initializeApp(firebaseConfig);

export default firebase;

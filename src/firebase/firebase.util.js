import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

const config = {
  apiKey: "AIzaSyCNpLlQK2y2_NCAzFPZxoaVTWgu47hux4c",
  authDomain: "crwn-db-598e6.firebaseapp.com",
  projectId: "crwn-db-598e6",
  storageBucket: "crwn-db-598e6.appspot.com",
  messagingSenderId: "857302820189",
  appId: "1:857302820189:web:39e6e9fa84ff0f34e534b4",
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);
export default firebase;

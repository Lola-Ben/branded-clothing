import { initializeApp } from "firebase/app";
import {getAuth, GoogleAuthProvider, signInWithPopup} from 'firebase/auth';
import { getFirestore } from "firebase/firestore";


const config = {
  apiKey: "AIzaSyAiUOyw9_DOJfNBrzWFXF49VLZHS3cYLFg",
  authDomain: "brand-db-d3fe7.firebaseapp.com",
  projectId: "brand-db-d3fe7",
  storageBucket: "brand-db-d3fe7.appspot.com",
  messagingSenderId: "1079404867157",
  appId: "1:1079404867157:web:aae7fef3ded26b3696aedc",
  measurementId: "G-02BQ7J175M"
};


const firebaseApp = initializeApp(config);

export const auth = getAuth(firebaseApp);
export const db = getFirestore(firebaseApp)


const provider = new GoogleAuthProvider();
provider.setCustomParameters({prompt: 'select_account'});
export const signInWithGoogle = () =>  signInWithPopup(auth, provider)


export default firebaseApp;
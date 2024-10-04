import { initializeApp } from "firebase/app";
import {getAuth, GoogleAuthProvider, signInWithPopup} from 'firebase/auth';
import { getFirestore, setDoc, doc } from "firebase/firestore";


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
const firestore = getFirestore(firebaseApp)


const provider = new GoogleAuthProvider();

provider.setCustomParameters({prompt: 'select_account'});
export const signInWithGoogle = async() =>  {
  try { 
    await signInWithPopup(auth, provider)
  }catch (error) {
    console.log("Error logging in with google popup:" + error.messsage );
  }
}


export const createUserProfileDocument =  async (userAuth, additionalData) => {
  if(!userAuth) return ;
  const {displayName, email} = userAuth;
  const createdAt = new Date();
  

  let userRef = doc(firestore, 'users', `${userAuth.uid}`);
  try {
      await setDoc(userRef, {displayName, email, createdAt, ...additionalData}, {merge: true});
    } catch (error) {
      console.log("error creating user:", error.message);
    } 
 
  return userRef;
}

export default firebaseApp;
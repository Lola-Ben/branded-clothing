import { initializeApp } from "firebase/app";
import {getAuth, GoogleAuthProvider, signInWithPopup, signOut, onAuthStateChanged} from 'firebase/auth';
import { getFirestore, setDoc, getDocs, doc, query, collection, writeBatch } from "firebase/firestore";


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
export const firestore = getFirestore(firebaseApp)


export const googleProvider = new GoogleAuthProvider();

googleProvider.setCustomParameters({prompt: 'select_account'});
export const signInWithGoogle = async() =>  {
  try { 
    await signInWithPopup(auth, googleProvider)
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

export const createCollectionAndDocuments = async (collectionName, collectionItem) => {
  const collectionRef = collection(firestore, collectionName)
  const batch = writeBatch(firestore)
  collectionItem.forEach(obj => {
     const newDocRef = doc(collectionRef)    
     batch.set(newDocRef, obj)
  });

 return await batch.commit()
  
}

export  const getCollectionsAndDocuments = async () => {
  const collectionsRef = collection(firestore, "collections")
  const q = query(collectionsRef)

  const collectionsSnapshot = await getDocs(q)
  const transformCollection = collectionsSnapshot.docs.map((doc) => {
    const {title, items} = doc.data()
    return {
      "routeName": encodeURI(title.toLowerCase()),
      "id": doc.id,
      title,
      items
    }
  })
  return transformCollection
}

export const SignOut = () => {
  signOut(auth)
}

export const getCurrentUser = () => {
  return new Promise((resolve, reject) => {
         const unsubscribe =  onAuthStateChanged(auth, userAuth => {
           unsubscribe();
           resolve(userAuth);
         }, reject)
  })
}

export default firebaseApp;
import { initializeApp } from 'firebase/app';
import { getAuth, signInWithRedirect, signInWithPopup, GoogleAuthProvider } from 'firebase/auth';
import { getFirestore, doc, getDoc, setDoc } from 'firebase/firestore';

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyD02xwfnjA-WrlSfNSVBN3x1NJl3kceqzA",
    authDomain: "crown-clothing-db-2d8d2.firebaseapp.com",
    projectId: "crown-clothing-db-2d8d2",
    storageBucket: "crown-clothing-db-2d8d2.appspot.com",
    messagingSenderId: "274195376003",
    appId: "1:274195376003:web:2d3c5a56aef5863ad3b8b6"
  };
  
  // Initialize Firebase
const firebaseapp = initializeApp(firebaseConfig);
//every time a user interacts they are forced to select account
const provider = new GoogleAuthProvider();
provider.setCustomParameters({
    prompt: "select_account"
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);
//point to database
export const db = getFirestore();

export const createUserDocumentFromAuth = async(userAuth) => {
    const userDocRef = doc(db, 'users', userAuth.uid);

    console.log(userDocRef);

    const userSnapShot = await getDoc(userDocRef);
    console.log(userSnapShot);
    console.log(userSnapShot.exists());

    if(!userSnapShot.exists()) {
        const { displayName, email } = userAuth;
        const createdAt = new Date();

        try {
            await setDoc(userDocRef, {
                displayName,
                email,
                createdAt
            });
        } catch(error) {

            console.log('error creating the user', error.message);

        }
    }
    return userDocRef;
}

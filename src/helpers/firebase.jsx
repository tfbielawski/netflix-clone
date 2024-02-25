import { getFirestore } from 'firebase/firestore/lite';
import { initializeApp } from 'firebase/app';
import { getAuth } from "firebase/auth";


const firebaseConfig = {
  apiKey: "AIzaSyAKnjILC7V8HpXxQUOWNo6OQRQztggUoCg",
  authDomain: "netflix-clone-d1be7.firebaseapp.com",
  projectId: "netflix-clone-d1be7",
  storageBucket: "netflix-clone-d1be7.appspot.com",
  messagingSenderId: "596876019206",
  appId: "1:596876019206:web:51654719a0bebabab7a587"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore(app);
const auth = getAuth(app);

export {auth};
export default db;

//Resolved errors using this stack article and firebase docs:
//https://stackoverflow.com/questions/70445014/module-not-found-error-package-path-is-not-exported-from-package
//https://firebase.google.com/docs/auth/web/start
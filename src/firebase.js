import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore/lite';
import { GoogleAuthProvider } from "firebase/auth";
import { getAuth } from "firebase/auth";


const firebaseConfig = {
    apiKey: "AIzaSyCM78Kn4xM-eTJCZKylOpODfDI_IIVW28o",
    authDomain: "disney-clone-f353c.firebaseapp.com",
    projectId: "disney-clone-f353c",
    storageBucket: "disney-clone-f353c.appspot.com",
    messagingSenderId: "75251339259",
    appId: "1:75251339259:web:f536c0ecdb06c511e8855e",
    measurementId: "G-M5EJ5KZYEQ"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const provider = new GoogleAuthProvider();
const auth = getAuth();

export { auth, provider };
export default db;
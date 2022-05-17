import {firebaseApp} from './firebase'
import {getFirestore} from 'firebase/firestore/lite'
import { getAuth, onAuthStateChanged } from "firebase/auth";


const db = getFirestore(firebaseApp)

export const isUserLogged = async()=>{
    let isLogged = false
    const auth = getAuth();
    onAuthStateChanged(auth, (user) => {
        user !== null && (isLogged = true);
        return isLogged
    });
    
}
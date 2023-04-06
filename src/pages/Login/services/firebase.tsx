
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'
import {getStorage, ref, uploadBytes, getDownloadURL, getBytes} from 'firebase/storage'
import {getFirestore, collection, addDoc, doc, getDocs, getDoc, query, where, setDoc, deleteDoc } from 'firebase/firestore'
import { getAnalytics } from "firebase/analytics";
import { User } from "@/models";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional

const firebaseConfig = {
    apiKey: process.env.REACT_APP_APIKEY,
    authDomain: process.env.REACT_APP_AUTHDOMAIN,
    projectId: process.env.REACT_APP_PROJECTID,
    storageBucket: process.env.REACT_APP_STORAGEBUCKET,
    messagingSenderId: process.env.REACT_APP_MESSAGINGSENDERID,
    appId: process.env.REACT_APP_APPID, 
    measurementId: process.env.MEASUREMENTID,
    };

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app);
export const db = getFirestore();
export const storage = getStorage();

export async function userExists (uid: string){
    const docRef = doc(db, 'users', uid)
    const res = await getDoc(docRef)
    return res.exists()
  }

export async function existsUsername(username: string ) {
    const users: any = [];
    const docsRef = collection(db, 'users')
    const q = query(docsRef, where("username", "==", username));
  
    const querySnapshot = await getDocs(q);
  
    querySnapshot.forEach((doc) => {
      
      users.push(doc.data());
    });
    return users.length > 0 ? users[0].uid : null;
  }
  
  export async function registerNewUser(user: User){
      try{
        const collectionRef = collection(db, 'users')
        const docRef = doc(collectionRef, user.uid)
        await setDoc(docRef, user)
      } catch (error){}
  }
  
  export async function updateUser(user: User) {
     try {
      const collectionRef = collection(db, 'users' )
      const docRef = doc(collectionRef, user.uid)
      await setDoc(docRef, user)
     } catch (error) {
      
     }
  }
  
  export async function getUserInfo(uid: string ){
    try {
      const docRef = doc(db, 'users', uid)
      const document = await getDoc(docRef)
      return document.data()
    } catch (error) {
      
    }
  }

  export async function logout() {
    await auth.signOut()
  }
  


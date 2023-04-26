
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {User, UserCredential, getAuth} from 'firebase/auth'
import {getStorage, ref, uploadBytes, getDownloadURL, getBytes} from 'firebase/storage'
import {getFirestore, collection, addDoc, doc, getDocs, getDoc, query, where, setDoc, deleteDoc } from 'firebase/firestore'
import { getAnalytics } from "firebase/analytics";
import { ContactType } from "@/models";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional

interface firebaseConfigType {
    apiKey: string | undefined;
    authDomain: string | undefined;
    projectId: string | undefined;
    storageBucket: string | undefined;
    messagingSenderId: string | undefined;
    appId: string | undefined ;
    measurementId: string | undefined ;
}



const firebaseConfig: firebaseConfigType = {
    apiKey: import.meta.env.VITE_BASE_APIKEY,
    authDomain: import.meta.env.VITE_BASE_AUTHDOMAIN,
    projectId: import.meta.env.VITE_BASE_PROJECTID,
    storageBucket: import.meta.env.VITE_BASE_STORAGEBUCKET,
    messagingSenderId: import.meta.env.VITE_BASE_MESSAGINGSENDERID,
    appId: import.meta.env.VITE_BASE_APPID, 
    measurementId: import.meta.env.VITE_BASE_MEASUREMENTID,
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
  
  
  export async function registerNewContact(contactRequest: ContactType){
      try{
        //const collectionRef = collection(db, 'contacts')
        //const docRef = doc(collectionRef, contactRequest.uid)
        //await setDoc(docRef, contactRequest)
        
        const docRef = await addDoc(collection(db, "contacts"), contactRequest);

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
  


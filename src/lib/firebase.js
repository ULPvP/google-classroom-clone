import firebase from "firebase";
import "firebase/firestore";


const firebaseConfig = {
  apiKey: "AIzaSyCtzn8m06DI_NODIyV9ZI8vX4wp49wSKVw",
  authDomain: "classroom-clone-b1b5c.firebaseapp.com",
  projectId: "classroom-clone-b1b5c",
  storageBucket: "classroom-clone-b1b5c.appspot.com",
  messagingSenderId: "184906146150",
  appId: "1:184906146150:web:7619a6db9ee160707da8a7",
  measurementId: "G-HPRK2N74YZ"
};

firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();

export { auth, provider, storage };
export default db;

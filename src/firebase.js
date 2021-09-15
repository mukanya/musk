import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyDiTuojajitDHaWj4PlnE6MGZWJlyJx3D8",
  authDomain: "muskacademy-610b0.firebaseapp.com",
  projectId: "muskacademy-610b0",
  storageBucket: "muskacademy-610b0.appspot.com",
  messagingSenderId: "317696062754",
  appId: "1:317696062754:web:b6809b5fe4f6a2ebdd217b",
  measurementId: "G-VCHVRDXJ4F"
};


const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();

export { auth, provider, storage, db};
export default db;
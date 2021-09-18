import firebase from "firebase";

console.log('kuno')

const firebaseConfig = {
  
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
  storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_FIREBASE_APP_ID,
  measurementId: "G-VCHVRDXJ4F"
};


const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();

export { auth, provider, storage, db};
export default db;


// import firebase from "firebase";

// const firebaseConfig = {
//   apiKey: "process.env.REACT_APP_API_KEY",
//   authDomain: "process.env.REACT_APP_AUTH_DOMAIN",
//   projectId: "process.env.REACT_APP_PROJECT_ID",
//   storageBucket: "process.env.REACT_APP_STORAGE_BUCKET",
//   messagingSenderId: "process.env.REACT_APP_MESSAGE_ID",
//   appId: "1:317696062754:web:b6809b5fe4f6a2ebdd217b",
//   measurementId: "G-VCHVRDXJ4F"
// };

// const firebaseApp = firebase.initializeApp(firebaseConfig);
// const db = firebaseApp.firestore();
// const auth = firebase.auth();
// const provider = new firebase.auth.GoogleAuthProvider();
// const storage = firebase.storage();

// export { auth, provider, storage, db};
// export default db;
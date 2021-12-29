// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore, query, collection, getDocs } from 'firebase/firestore/lite';


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAXwAqLkJN5k51ZHH-JgMgEUFfV_uo4AJ0",
  authDomain: "wheres-waldo-4542c.firebaseapp.com",
  projectId: "wheres-waldo-4542c",
  storageBucket: "wheres-waldo-4542c.appspot.com",
  messagingSenderId: "241474360995",
  appId: "1:241474360995:web:7cdc28340c324d350ed116"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

async function queryLevel() {
  const q = query(collection(db, 'level/easy/characters'))

  const snapshot = await getDocs(q);
  snapshot.forEach((snap) => {
    console.log(`${snap.id}  ${JSON.stringify(snap.data())}`)
  })
  
}

queryLevel();

export default db
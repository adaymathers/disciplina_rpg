// firebase-config.js

const firebaseConfig = {
  apiKey: "AIzaSyAOrzixfRctN7SsTs78Rgu231kUZo-fhBI",
  authDomain: "disciplinarpg.firebaseapp.com",
  projectId: "disciplinarpg",
  storageBucket: "disciplinarpg.firebasestorage.app",
  messagingSenderId: "801491516724",
  appId: "1:801491516724:web:9ea005048fdfbbd0a9f961",
  measurementId: "G-8LV83NEQS6"
};

firebase.initializeApp(firebaseConfig);

// Inicializa Firestore y Auth de esta forma:
const db = firebase.firestore();
const auth = firebase.auth();

export { db, auth };

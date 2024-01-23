import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firebase";

const firebaseConfig = {
  apiKey: "AIzaSyCihXP615VvT006EjonRK6EwxG9eLV9Eog",
  authDomain: "miniblog-a97b6.firebaseapp.com",
  projectId: "miniblog-a97b6",
  storageBucket: "miniblog-a97b6.appspot.com",
  messagingSenderId: "1000284874772",
  appId: "1:1000284874772:web:44c9e988c5bc436995df01",
};

const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

export { db };

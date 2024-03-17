// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"

const firebaseConfig = {
  apiKey: "AIzaSyDsXWn_ubMwhR82C4hxEiVb9iB387l9VK0",
  authDomain: "mezmusic.firebaseapp.com",
  projectId: "mezmusic",
  storageBucket: "mezmusic.appspot.com",
  messagingSenderId: "739670211134",
  appId: "1:739670211134:web:29ff9735186f68edfa6f6f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { firebaseConfig, app };
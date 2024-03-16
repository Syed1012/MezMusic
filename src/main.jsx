import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";

const firebase = await import("firebase/app");

// Your Firebase project configuration
const firebaseConfig = {
  apiKey: "AIzaSyDsXWn_ubMwhR82C4hxEiVb9iB387l9VK0",
  authDomain: "mezmusic.firebaseapp.com",
  projectId: "mezmusic",
  storageBucket: "mezmusic.appspot.com",
  messagingSenderId: "739670211134",
  appId: "1:739670211134:web:29ff9735186f68edfa6f6f",
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);

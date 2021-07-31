import React, { createContext } from "react";
import ReactDOM from "react-dom";
import App from "./App";
import firebase from "firebase";
import "firebase/firestore";
import "firebase/auth";

firebase.initializeApp({
    apiKey: "AIzaSyBeRXnGO53qMH6Btd7FIB27pkqC_UYCvVA",
    authDomain: "real-time-chat-39313.firebaseapp.com",
    projectId: "real-time-chat-39313",
    storageBucket: "real-time-chat-39313.appspot.com",
    messagingSenderId: "152608046314",
    appId: "1:152608046314:web:97ae6d3262563563b9ab93",
});

export const Context = createContext(null);

const auth = firebase.auth();
const firestore = firebase.firestore();

ReactDOM.render(
    <Context.Provider value={{
        firebase,
        auth,
        firestore
    }}>
        <App />
    </Context.Provider>,
    document.getElementById("root")
);
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyAiBQmH0aXm0Lv_4C_NY1i3WGc9mZ9AXD0",
    authDomain: "gymsync-workout.firebaseapp.com",
    projectId: "gymsync-workout",
    storageBucket: "gymsync-workout.firebasestorage.app",
    messagingSenderId: "1051297670078",
    appId: "1:1051297670078:web:b628806780326db809cfef",
    measurementId: "G-MQYBE731H6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export {auth};
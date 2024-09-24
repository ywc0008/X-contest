// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAwpXA4Bvtv5Tu4nAG7y5kjkU1FrJrQ3cU",
  authDomain: "x-contest.firebaseapp.com",
  projectId: "x-contest",
  storageBucket: "x-contest.appspot.com",
  messagingSenderId: "503583160127",
  appId: "1:503583160127:web:40dada7ae6eaed45fe458a",
  measurementId: "G-X6YF6V53WE",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);

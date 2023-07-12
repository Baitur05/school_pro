// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBC3cbWWvqG_qMNzhFDCgOp0WIBI6vLcZs",
  authDomain: "school-5339f.firebaseapp.com",
  projectId: "school-5339f",
  storageBucket: "school-5339f.appspot.com",
  messagingSenderId: "162605470386",
  appId: "1:162605470386:web:65dfd23078f63b3a6aefab",
  measurementId: "G-RF32YJBLS4",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAnalytics(app);

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration

const firebaseConfig = {
  apiKey: "AIzaSyBtKM1QyKfFkpsWFPL9EJfyVkwpjCnpyLI",
  authDomain: "bala-food-club.firebaseapp.com",
  projectId: "bala-food-club",
  storageBucket: "bala-food-club.firebasestorage.app",
  messagingSenderId: "762893469848",
  appId: "1:762893469848:web:2c8bf812358fdb2cb6e8ed",
  measurementId: "G-PK0L297HC3",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();

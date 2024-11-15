// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAcmp16wlpZjKwPKESg3uniDMR5kCuMtz4",
  authDomain: "user-authentication-demo-2345f.firebaseapp.com",
  projectId: "user-authentication-demo-2345f",
  storageBucket: "user-authentication-demo-2345f.firebasestorage.app",
  messagingSenderId: "717526159069",
  appId: "1:717526159069:web:5d5f202ccb0f09f715d534"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth };

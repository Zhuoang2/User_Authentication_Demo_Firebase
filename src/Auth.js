// src/Auth.js
import React, { useState } from "react";
import { auth } from "./firebaseConfig";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
} from "firebase/auth";

function Auth() {
  const [isRegistering, setIsRegistering] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const toggleRegistering = () => {
    setIsRegistering(!isRegistering);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleEmailPasswordAuth = (e) => {
    e.preventDefault();
    if (isRegistering) {
      // Register new user
      createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          console.log("Registered:", userCredential.user);
        })
        .catch((error) => {
          console.error("Error registering:", error);
        });
    } else {
      // Log in existing user
      signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          console.log("Logged in:", userCredential.user);
        })
        .catch((error) => {
          console.error("Error logging in:", error);
        });
    }
  };

  const handleGoogleAuth = () => {
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider)
      .then((result) => {
        console.log("Google Sign-in successful:", result.user);
      })
      .catch((error) => {
        console.error("Error with Google Sign-in:", error);
      });
  };

  return (
    <div>
      <h2>{isRegistering ? "Register" : "Log In"}</h2>
      <form onSubmit={handleEmailPasswordAuth}>
        <input
          type="email"
          value={email}
          onChange={handleEmailChange}
          placeholder="Email"
          required
        />
        <br />
        <input
          type="password"
          value={password}
          onChange={handlePasswordChange}
          placeholder="Password"
          required
        />
        <br />
        <button type="submit">{isRegistering ? "Register" : "Log In"}</button>
      </form>
      <button onClick={handleGoogleAuth}>
        Sign {isRegistering ? "Up" : "In"} with Google
      </button>
      <br />
      <button onClick={toggleRegistering}>
        {isRegistering
          ? "Already have an account? Log In"
          : "Don't have an account? Register"}
      </button>
    </div>
  );
}

export default Auth;

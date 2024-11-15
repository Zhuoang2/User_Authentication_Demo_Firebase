// src/App.js
import React, { useContext } from "react";
import Auth from "./Auth";
import { AuthContext } from "./AuthContext";

function App() {
  const { currentUser, logout } = useContext(AuthContext);

  return (
    <div className="App">
      {currentUser ? (
        <div>
          <h2>Welcome, {currentUser.email || currentUser.displayName}</h2>
          <button onClick={logout}>Log Out</button>
          {/* Your protected components go here */}
        </div>
      ) : (
        <Auth />
      )}
    </div>
  );
}

export default App;



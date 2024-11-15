// src/Auth.js
import React, { useState } from "react";
import { auth } from "./firebaseConfig";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
} from "firebase/auth";
import {
  Container,
  TextField,
  Button,
  Typography,
  Link,
  Grid,
  Box,
  Divider,
} from "@mui/material";
import { Google } from "@mui/icons-material";


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
    <Container maxWidth="xs">
      <Box
        sx={{
          marginTop: 8,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Typography component="h1" variant="h5">
          {isRegistering ? "Register" : "Sign In"}
        </Typography>
        <Box
          component="form"
          onSubmit={handleEmailPasswordAuth}
          noValidate
          sx={{ mt: 1 }}
        >
          <TextField
            margin="normal"
            required
            fullWidth
            label="Email Address"
            type="email"
            value={email}
            onChange={handleEmailChange}
            autoComplete="email"
            autoFocus
          />
          <TextField
            margin="normal"
            required
            fullWidth
            label="Password"
            type="password"
            value={password}
            onChange={handlePasswordChange}
            autoComplete="current-password"
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
          >
            {isRegistering ? "Register" : "Sign In"}
          </Button>
          <Divider sx={{ my: 2 }}>OR</Divider>
          <Button
            fullWidth
            variant="outlined"
            startIcon={<Google />}
            onClick={handleGoogleAuth}
          >
            Sign {isRegistering ? "Up" : "In"} with Google
          </Button>
          <Grid container justifyContent="flex-end" sx={{ mt: 2 }}>
            <Grid item>
              <Link href="#" variant="body2" onClick={toggleRegistering}>
                {isRegistering
                  ? "Already have an account? Sign in"
                  : "Don't have an account? Register"}
              </Link>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </Container>
  );
}

export default Auth;

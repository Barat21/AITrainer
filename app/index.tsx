import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, Alert, StyleSheet } from "react-native";
import { useRouter } from "expo-router";
import { LinearGradient } from "expo-linear-gradient";
import { FontAwesome } from "@expo/vector-icons";
import LottieView from "lottie-react-native";
import { sendPasswordResetEmail, signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebaseConfig"; // Import Firebase Auth


export default function LoginScreen() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

const handleLogin = async () => {
  if (!email || !password) {
    Alert.alert("Login Failed", "Please enter email and password.");
    return;
  }

  try {
    await signInWithEmailAndPassword(auth, email, password);
    Alert.alert("Success", "Login successful!");
    router.push("/Homescreen"); // Navigate to home screen
  } catch (error) {
    if (error instanceof Error) {
      Alert.alert("Error", error.message);
    }else{
      Alert.alert("Error", "Login Failed");
    }  
  }
};


  const handleSSOLogin = () => {
    Alert.alert("SSO Login", "Redirecting to Single Sign-On...");
  };

  const handleForgotPassword = () => {
    if (!email) {
      Alert.alert("Forgot Password", "Please enter your email first.");
      return;
    }
  
    sendPasswordResetEmail(auth, email)
      .then(() => {
        Alert.alert("Password Reset", "Check your email for reset instructions.");
      })
      .catch((error) => {
        if (error instanceof Error) {
          Alert.alert("Error", error.message);
        }else{
          Alert.alert("Error", "Unable to send password verification link at the moment.");
        }      
      });
  };
  

  return (
    <LinearGradient colors={["#141E30", "#243B55"]} style={styles.container}>
      {/* Replace Image with Lottie Animation */}
      <Text style={styles.title}>Welcome Back</Text>

      <LottieView
        source={{ uri: "https://lottie.host/6ace859b-2acf-4cae-8424-b47b43676a4c/lfw37bxu1N.lottie" }}
        autoPlay
        loop
        style={styles.lottieAnimation}
      />

      <TextInput
        style={styles.input}
        placeholder="Email"
        placeholderTextColor="#ccc"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        placeholderTextColor="#ccc"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />

      <TouchableOpacity style={styles.loginButton} onPress={handleLogin}>
        <Text style={styles.loginText}>Login</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.ssoButton} onPress={handleSSOLogin}>
        <FontAwesome name="google" size={20} color="#fff" />
        <Text style={styles.ssoText}>Login with Google</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={handleForgotPassword}>
        <Text style={styles.forgotPassword}>Forgot Password?</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => router.push("/signup")} style={styles.signupButton}>
        <Text style={styles.signupText}>Don't have an account? Sign Up</Text>
      </TouchableOpacity>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
  lottieAnimation: {
    width: 150, // Adjust size as needed
    height: 150,
    marginBottom: 20,
  },
  title: {
    fontSize: 26,
    fontWeight: "bold",
    color: "#fff",
  },
  input: {
    width: "100%",
    height: 50,
    backgroundColor: "rgba(255, 255, 255, 0.2)",
    borderRadius: 10,
    paddingHorizontal: 15,
    color: "#fff",
    marginBottom: 15,
  },
  loginButton: {
    width: "100%",
    height: 50,
    backgroundColor: "#ff6b6b",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
    marginBottom: 10,
  },
  loginText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
  },
  ssoButton: {
    width: "100%",
    height: 50,
    backgroundColor: "#4285F4",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
    marginBottom: 10,
  },
  ssoText: {
    color: "#fff",
    fontSize: 16,
    marginLeft: 10,
  },
  forgotPassword: {
    color: "#ccc",
    marginTop: 10,
  },
  signupButton: {
    marginTop: 20,
  },
  signupText: {
    color: "#4A90E2",
    fontSize: 16,
  },
});

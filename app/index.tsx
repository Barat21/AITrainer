import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, Alert, StyleSheet, Image } from "react-native";
import { useRouter } from "expo-router";
import { LinearGradient } from "expo-linear-gradient";
import { FontAwesome } from "@expo/vector-icons";

export default function LoginScreen() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  const handleLogin = () => {
    if (email === "a" && password === "a") {
      router.push("/Homescreen"); // Navigate to home screen
    } else {
      Alert.alert("Login Failed", "Invalid email or password");
    }
  };

  const handleSSOLogin = () => {
    Alert.alert("SSO Login", "Redirecting to Single Sign-On...");
  };

  return (
    <LinearGradient colors={["#141E30", "#243B55"]} style={styles.container}>
      <Image source={{ uri: "https://cdn-icons-png.flaticon.com/512/847/847969.png" }} style={styles.avatar} />

      <Text style={styles.title}>Welcome Back</Text>

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

      <TouchableOpacity onPress={() => Alert.alert("Reset Password", "Redirecting to forgot password...")}>
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
  avatar: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 20,
  },
  title: {
    fontSize: 26,
    fontWeight: "bold",
    color: "#fff",
    marginBottom: 20,
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

import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert } from "react-native";
import { useRouter } from "expo-router";
import { auth, signInWithEmailAndPassword } from "../firebaseConfig";
import { Auth, createUserWithEmailAndPassword } from "firebase/auth";
import LottieView from "lottie-react-native";

export default function SignupScreen() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSignup = async () => {
    if (!email || !password) {
      Alert.alert("Error", "Please enter both email and password");
      return;
    }

    try {
      await createUserWithEmailAndPassword(auth, email, password);
      Alert.alert(
        "Signup Successful",
        "Please login with your email and password",
        [{ text: "OK", onPress: () => router.push("/") }] // Navigate after user acknowledges
      );
        } catch (error) {
      if (error instanceof Error) {
        Alert.alert("Error", error.message);
      }else{
        Alert.alert("Error", "Something Went Wrong");
      }
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Create an Account</Text>

      <LottieView
        source={{ uri: "https://lottie.host/665be306-a27c-4b5b-b99c-445884097c28/zQrkRQ3mRy.lottie" }}
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

      <TouchableOpacity style={styles.button} onPress={handleSignup}>
        <Text style={styles.buttonText}>Sign Up</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => router.push("/")} style={styles.link}>
        <Text style={styles.linkText}>Already have an account? Log in</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#141E30",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#fff",
  },
  input: {
    width: "80%",
    height: 50,
    backgroundColor: "#243B55",
    borderRadius: 10,
    paddingHorizontal: 15,
    color: "#fff",
    marginBottom: 15,
  },
  button: {
    width: "80%",
    height: 50,
    backgroundColor: "#4A90E2",
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 10,
  },
  buttonText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
  },
  link: {
    marginTop: 15,
  },
  linkText: {
    color: "#4A90E2",
    fontSize: 16,
  },
  lottieAnimation: {
    width: 150, // Adjust size as needed
    height: 150,
    marginBottom: 20,
  },
});


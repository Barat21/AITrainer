import React from "react";
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from "react-native";
import { useRouter } from "expo-router";
import { FontAwesome } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";
import { StatusBar } from "react-native";


export default function SignupScreen() {
  const router = useRouter();

  return (
    <LinearGradient colors={["#141E30", "#243B55"]} style={styles.gradient}>
      {/* ✅ Fix: Expo Status Bar */}
      <StatusBar barStyle="light-content" translucent backgroundColor="transparent" />

      <View style={styles.container}>
        <Text style={styles.title}>Create an Account</Text>

        <TextInput 
          style={styles.input} 
          placeholder="Full Name" 
          placeholderTextColor="#ccc" 
        />
        <TextInput 
          style={styles.input} 
          placeholder="Email" 
          placeholderTextColor="#ccc" 
          keyboardType="email-address" 
        />
        <TextInput 
          style={styles.input} 
          placeholder="Password" 
          placeholderTextColor="#ccc" 
          secureTextEntry 
        />

        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Sign Up</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.ssoButton}>
          <FontAwesome name="google" size={20} color="#fff" />
          <Text style={styles.ssoText}>Sign Up with Google</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => router.push("/")} style={styles.link}>
          <Text style={styles.linkText}>Already have an account? Log in</Text>
        </TouchableOpacity>
      </View>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  gradient: {
    flex: 1,
  },
  container: { 
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#fff",
    marginBottom: 20,
  },
  input: {
    width: "80%",
    height: 50,
    backgroundColor: "rgba(255, 255, 255, 0.1)", 
    borderRadius: 10,
    paddingHorizontal: 15,
    color: "#fff",
    marginBottom: 15,
    borderWidth: 1,
    borderColor: "rgba(255, 255, 255, 0.3)", 
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
  ssoButton: {
    width: "80%",
    height: 50,
    backgroundColor: "#4285F4",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
    marginTop: 10,
  },
  ssoText: {
    color: "#fff",
    fontSize: 16,
    marginLeft: 10,
  },
});

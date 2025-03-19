import React, { useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet, Animated } from "react-native";
import { database, ref, set } from "./config/firebaseConfig"; // Import Firebase functions

const HomeScreen: React.FC = () => {
  const [isOn, setIsOn] = useState(false);
  const scaleValue = new Animated.Value(1);

  const toggleLight = () => {
    // Animate the button when clicked
    Animated.sequence([
      Animated.timing(scaleValue, { toValue: 1.1, duration: 100, useNativeDriver: true }),
      Animated.timing(scaleValue, { toValue: 1, duration: 100, useNativeDriver: true }),
    ]).start();

    const newState = !isOn;
    setIsOn(newState);

    // Update Firebase database
    set(ref(database, "/switch"), newState ? 1 : 0)
      .then(() => console.log("Light status updated in Firebase"))
      .catch((error) => console.error("Firebase update error:", error));
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Smart Home Automation</Text>

      <Animated.View style={{ transform: [{ scale: scaleValue }] }}>
        <TouchableOpacity
          style={[styles.button, { backgroundColor: isOn ? "#FF3B30" : "#007BFF" }]}
          onPress={toggleLight}
        >
          <Text style={styles.buttonText}>{isOn ? "Turn Off Light" : "Turn On Light"}</Text>
        </TouchableOpacity>
      </Animated.View>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: "center", alignItems: "center", padding: 20 },
  title: { fontSize: 24, fontWeight: "bold", marginBottom: 20 },
  button: {
    paddingVertical: 12,
    paddingHorizontal: 25,
    borderRadius: 30,
    elevation: 5, // Shadow effect
    shadowColor: "#000",
    shadowOffset: { width: 2, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
  },
  buttonText: { color: "#FFF", fontSize: 18, fontWeight: "bold" },
});

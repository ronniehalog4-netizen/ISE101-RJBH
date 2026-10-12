import React from "react";
import { Text, View, StyleSheet } from "react-native";

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Hello, I'm Ronnie!</Text>
      <Text style={styles.subtitle}>Welcome to React Native!</Text>
      <Text style={styles.section}>BSIS 3A</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#e6f7ff",
    padding: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#003366",
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 18,
    color: "#555555",
    marginBottom: 12,
  },
  section: {
    fontSize: 16,
    color: "#008080",
    marginTop: 5,
  },
});

import React from "react";
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from "react-native";

export default function LoginScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Carease</Text>
      <Text style={styles.subtitle}>Elder Care, Simplified</Text>

      <TextInput placeholder="Email" style={styles.input} />
      <TextInput placeholder="Password" style={styles.input} secureTextEntry />

      <TouchableOpacity
        style={styles.primaryButton}
        onPress={() => navigation.navigate("RoleSelect")}
      >
        <Text style={styles.primaryText}>Login</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => navigation.navigate("Signup")}>
        <Text style={styles.link}>New user? Create account</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: "center", padding: 25, backgroundColor: "#fff" },
  title: { fontSize: 34, fontWeight: "bold", color: "#1CA7A6", textAlign: "center" },
  subtitle: { textAlign: "center", marginBottom: 35, color: "#666" },
  input: {
    backgroundColor: "#F3FDFC",
    padding: 15,
    borderRadius: 12,
    marginBottom: 15,
    fontSize: 16,
  },
  primaryButton: {
    backgroundColor: "#1CA7A6",
    padding: 16,
    borderRadius: 12,
    marginTop: 10,
  },
  primaryText: { color: "#fff", textAlign: "center", fontSize: 18 },
  link: { textAlign: "center", marginTop: 18, color: "#2ECC71" },
});

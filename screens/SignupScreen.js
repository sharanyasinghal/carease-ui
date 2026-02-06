import React from "react";
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from "react-native";

export default function SignupScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Create Account</Text>

      <TextInput placeholder="Full Name" style={styles.input} />
      <TextInput placeholder="Email" style={styles.input} />
      <TextInput placeholder="Password" style={styles.input} secureTextEntry />

      <TouchableOpacity
        style={styles.primaryButton}
        onPress={() => navigation.navigate("RoleSelect")}
      >
        <Text style={styles.primaryText}>Continue</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: "center", padding: 25, backgroundColor: "#fff" },
  title: { fontSize: 26, color: "#1CA7A6", textAlign: "center", marginBottom: 25 },
  input: {
    backgroundColor: "#F3FDFC",
    padding: 15,
    borderRadius: 12,
    marginBottom: 15,
    fontSize: 16,
  },
  primaryButton: {
    backgroundColor: "#2ECC71",
    padding: 16,
    borderRadius: 12,
  },
  primaryText: { color: "#fff", textAlign: "center", fontSize: 18 },
});

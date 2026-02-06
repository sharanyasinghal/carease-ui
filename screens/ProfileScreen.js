import React from "react";
import { View, Text, StyleSheet } from "react-native";

export default function ProfileScreen({ route }) {
  const role = route?.params?.role ?? "User";

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{role} Dashboard</Text>

      <View style={styles.card}>
        <Text style={styles.text}>Name: Demo User</Text>
        <Text style={styles.text}>Email: demo@carease.com</Text>
        <Text style={styles.text}>Role: {role}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 25, backgroundColor: "#fff" },
  title: { fontSize: 24, color: "#1CA7A6", marginBottom: 20 },
  card: {
    backgroundColor: "#F3FDFC",
    padding: 20,
    borderRadius: 16,
  },
  text: { fontSize: 16, marginBottom: 8 },
});

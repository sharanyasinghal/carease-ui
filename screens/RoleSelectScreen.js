import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";

export default function RoleSelectScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Who are you?</Text>

      <TouchableOpacity
        style={styles.card}
        onPress={() => navigation.navigate("Profile", { role: "Elder" })}
      >
        <Text style={styles.cardTitle}>Elder</Text>
        <Text style={styles.cardText}>Simple reminders & SOS</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.card}
        onPress={() => navigation.navigate("Profile", { role: "Caregiver" })}
      >
        <Text style={styles.cardTitle}>Caregiver</Text>
        <Text style={styles.cardText}>Track & manage care</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: "center", padding: 25, backgroundColor: "#fff" },
  title: { fontSize: 24, textAlign: "center", marginBottom: 30 },
  card: {
    backgroundColor: "#F3FDFC",
    padding: 22,
    borderRadius: 16,
    marginBottom: 20,
    borderLeftWidth: 6,
    borderLeftColor: "#1CA7A6",
  },
  cardTitle: { fontSize: 20, fontWeight: "600" },
  cardText: { color: "#666", marginTop: 6 },
});

import React, { useState } from "react";
import {
  View,
  StyleSheet,
  SafeAreaView,
  ScrollView,
  Text,
  ActivityIndicator,
} from "react-native";
import { AuthProvider, useAuth } from "./context/AuthContext";
import LoginScreen from "./login";
import SignupScreen from "./signup";
import TimeZoneList from "./components/TimeZoneList";
import LocationList from "./components/LocationList";

function NavigationWrapper() {
  const { user, isLoading } = useAuth();
  const [showSignup, setShowSignup] = useState(false);

  if (isLoading) {
    return (
      <View style={styles.centered}>
        <ActivityIndicator size="large" />
      </View>
    );
  }

  if (!user) {
    return showSignup ? (
      <SignupScreen onSwitch={() => setShowSignup(false)} />
    ) : (
      <LoginScreen onSwitch={() => setShowSignup(true)} />
    );
  }

  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView contentContainerStyle={styles.container}>
        <View style={styles.header}>
          <Text style={styles.h1}>Global TimeZone Manager</Text>
          <Text style={styles.p}>
            View, Add, Edit or Delete Timezones below.
          </Text>
        </View>
        <View style={styles.main}>
          <TimeZoneList />
          <LocationList />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

export default function App() {
  return (
    <AuthProvider>
      <NavigationWrapper />
    </AuthProvider>
  );
}

const styles = StyleSheet.create({
  centered: { flex: 1, justifyContent: "center", alignItems: "center" },
  safeArea: { flex: 1, backgroundColor: "#fff" },
  container: { padding: 20 },
  header: { marginBottom: 20 },
  h1: { fontSize: 24, fontWeight: "bold", marginBottom: 8 },
  p: { fontSize: 16, color: "#666" },
  main: { gap: 20 },
});

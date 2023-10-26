import React from "react";
import { StyleSheet, View, Text } from "react-native";
import { useFonts, Poppins_700Bold } from "@expo-google-fonts/poppins";
import HomeScreen from "./screens/HomeScreen";

export default function App() {
  let [fontsLoaded] = useFonts({
    Poppins_700Bold,
  });

  if (!fontsLoaded) {
    return (
      <View style={styles.container}>
        <Text>Loading...</Text>
      </View>
    );
  }

  return (
    <HomeScreen />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});

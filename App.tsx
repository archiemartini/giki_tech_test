import React from "react";
import { StyleSheet, View, Text } from "react-native";
import formatNumberWithCommas from "./utils/formatNumberWithCommas";
import Hero from "./components/Hero";
import data from "./data.json";
import EstimationInfo from "./components/EstimationInfo";
import Target2030 from "./components/Target2030";
import { useFonts, Poppins_700Bold } from "@expo-google-fonts/poppins";

export default function App() {
  const footprintValue = formatNumberWithCommas(data.footprint);
  const endOfYearTargetValue = formatNumberWithCommas(data.end_of_year_target);
  const leftToCutValue = formatNumberWithCommas(data.left_to_cut);
  const twentyThirtyTargetValue = formatNumberWithCommas(
    data.twenty_thirty_target,
  );

  let [fontsLoaded] = useFonts({
    Poppins_700Bold,
  });

  if (!fontsLoaded) {
    return <View style={styles.container}><Text>Loading...</Text></View>;
  }


  return (
    <View style={styles.container}>
      <Hero footprintValue={footprintValue} />
      <EstimationInfo
        endOfYearTarget={endOfYearTargetValue}
        leftToCut={leftToCutValue}
      />
      <Target2030 twentyThirtyTarget={twentyThirtyTargetValue} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    gap: 25,
  },
});

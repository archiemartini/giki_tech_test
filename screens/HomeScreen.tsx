import React from "react";
import { StyleSheet, View } from "react-native";
import { formatNumberWithCommas } from "../utils/numberUtils";
import Hero from "../components/Hero";
import data from "../data.json";
import EstimationInfo from "../components/EstimationInfo";
import Target2030 from "../components/Target2030";

export default function HomeScreen() {
  // assuming/mocking data coming from the backend in json format, then using a numberUtil to stringify and add commas in the thousands
  const footprintValue = formatNumberWithCommas(data.footprint);
  const endOfYearTargetValue = formatNumberWithCommas(data.end_of_year_target);
  const leftToCutValue = formatNumberWithCommas(data.left_to_cut);
  const twentyThirtyTargetValue = formatNumberWithCommas(
    data.twenty_thirty_target,
  );

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


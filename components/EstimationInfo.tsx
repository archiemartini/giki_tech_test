import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { moderateScale } from "react-native-size-matters";

const EstimationInfo = ({
  endOfYearTarget,
  leftToCut,
}: {
  endOfYearTarget: string;
  leftToCut: string;
}) => {
  return (
    <View style={styles.estimationContainer}>
      <View style={{ width: 100 }}>
        <Text style={[styles.text, styles.pink]}>End of{"\n"} year target</Text>
        <Text style={[styles.valueText, styles.text, styles.purple]}>
          {endOfYearTarget}
          <Text style={styles.unitDescriptorText}> kg</Text>
        </Text>
        <Text style={[styles.carbonInfoText, styles.text, styles.purple]}>
          of carbon emissions
        </Text>
      </View>
      <View style={{ width: 100 }}>
        <Text style={[styles.pink, styles.text]}>Left to cut this year</Text>
        <Text style={[styles.valueText, styles.text, styles.purple]}>
          {leftToCut}
          <Text style={styles.unitDescriptorText}> kg</Text>
        </Text>
        <Text style={[styles.carbonInfoText, styles.text, styles.purple]}>
          of carbon emissions
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  estimationContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    gap: 10,
  },
  text: {
    fontFamily: "Poppins_700Bold",
    textAlign: "center",
    fontWeight: "bold",
  },
  valueText: {
    fontSize: moderateScale(25),
  },
  unitDescriptorText: {
    fontWeight: "bold",
    fontSize: moderateScale(10),
  },
  carbonInfoText: {
    fontSize: moderateScale(8),
  },
  pink: {
    color: "#c44170",
  },
  purple: {
    color: "#5e2b68",
  },
});

export default EstimationInfo;

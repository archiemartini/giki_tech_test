import { View, Text, StyleSheet } from "react-native";
import { moderateScale } from "react-native-size-matters";

const Target2030 = ({ twentyThirtyTarget }: { twentyThirtyTarget: string }) => {
  return (
    <View style={[styles.twentyThirtyTargetView]}>
      <Text style={[styles.twentyThirtyTargetText, styles.purple]}>
        Your 2030 target is {twentyThirtyTarget} kg
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  twentyThirtyTargetView: {
    backgroundColor: "#ebd7ee",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 100,
    fontWeight: "bold",
  },
  twentyThirtyTargetText: {
    borderRadius: 100,
    fontWeight: "bold",
    fontSize: moderateScale(10),
  },
  purple: {
    color: "#5e2b68",
  },
});

export default Target2030;

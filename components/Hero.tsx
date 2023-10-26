import React from "react";
import {
  StyleSheet,
  Platform,
  Text,
  View,
  TouchableOpacity,
  Image,
  ImageSourcePropType,
} from "react-native";
import { moderateScale } from "react-native-size-matters";
import LeafIconSlim from "./SvgComponents/LeafIconSlim";
import LeafIconWide from "./SvgComponents/LeafIconWide";
import ButterflyIcon from "./SvgComponents/ButterflyIcon";

const Hero = ({ footprintValue }: { footprintValue: string }) => {
  const purpleCloudPNG: ImageSourcePropType = require("../assets/purple_cloud.png");
  const whiteCloudPNG: ImageSourcePropType = require("../assets/white_cloud.png");

  return (
    <View style={styles.container}>
      <Image
        style={styles.purpleCloud}
        source={purpleCloudPNG}
        resizeMode="contain"
      />
      <View style={{ position: "absolute", top: 0, right: 0 }}>
        <LeafIconSlim style={{ marginTop: 20, marginLeft: 10 }} />
        <LeafIconWide style={{ marginTop: -8 }} />
      </View>
      <View style={{ position: "absolute", bottom: 0, left: 0 }}>
        <LeafIconWide style={{}} rotation={"180deg"} />
        <LeafIconSlim style={{ marginTop: -15 }} rotation={"180deg"} />
      </View>
      <Image
        style={styles.whiteCloud}
        source={whiteCloudPNG}
        resizeMode="contain"
      />
      <ButterflyIcon style={styles.butterfly} />
      <View style={{ position: "absolute", alignItems: "center" }}>
        <Text style={[styles.footprintText, styles.text, styles.pink]}>
          Your footprint
        </Text>
        <Text style={[styles.valueText, styles.text, styles.purple]}>
          {footprintValue}
          <Text style={styles.unitDescriptorText}> kg</Text>
        </Text>
        <Text style={[styles.carbonInfoText, styles.text, styles.purple]}>
          of carbon emissions
        </Text>
        <TouchableOpacity style={[styles.takeAStepView, styles.shadow]}>
          <Text style={[styles.takeAStepInnerText, styles.text]}>
            Take a Step
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: moderateScale(300),
    height: moderateScale(200),
  },
  purpleCloud: {
    height: "90%",
    position: "absolute",
  },
  whiteCloud: {
    height: "85%",
    position: "relative",
  },
  butterfly: {
    position: "absolute",
    top: 0,
    left: 0,
    marginTop: 25,
    marginLeft: 25,
  },
  text: {
    textAlign: "center",
    fontWeight: "bold",
  },
  footprintText: {
    fontSize: moderateScale(12),
    marginTop: 10,
  },
  valueText: {
    fontSize: moderateScale(25),
  },
  unitDescriptorText: {
    fontWeight: "bold",
    fontSize: moderateScale(12),
  },
  carbonInfoText: {
    fontSize: moderateScale(8),
  },
  takeAStepView: {
    marginTop: 8,
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 50,
    fontWeight: "100",
    backgroundColor: "#5e2b68",
  },
  takeAStepInnerText: {
    color: "#fff",
    fontSize: moderateScale(10),
  },
  shadow: {
    ...Platform.select({
      ios: {
        shadowColor: "#000",
        shadowOffset: {
          width: 0,
          height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
      },
      android: {
        elevation: 5,
      },
    }),
  },
  pink: {
    color: "#c44170",
  },
  purple: {
    color: "#5e2b68",
  },
});
export default Hero;

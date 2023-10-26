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
        testID="purple-cloud"
        style={styles.purpleCloud}
        source={purpleCloudPNG}
        resizeMode="contain"
      />
      <View style={{ position: "absolute", top: 0, right: 0 }}>
        <LeafIconSlim
          testID="leaf-icon-slim-1"
          style={{ position: "absolute", right: 35, top: 10 }}
        />
        <LeafIconWide
          testID="leaf-icon-wide-1"
          style={{ position: "absolute", right: 0, top: 40 }}
        />
      </View>
      <View style={{ position: "absolute", bottom: 0, left: 0 }}>
        <LeafIconWide
          testID="leaf-icon-wide-2"
          style={{ position: "absolute", bottom: 15, left: 8 }}
          rotation={"180deg"}
        />
        <LeafIconSlim
          testID="leaf-icon-slim-2"
          style={{ position: "absolute", bottom: -15, left: 45 }}
          rotation={"180deg"}
        />
      </View>
      <Image
        testID="white-cloud"
        style={styles.whiteCloud}
        source={whiteCloudPNG}
        resizeMode="contain"
      />
      <ButterflyIcon testID="butterfly-icon" style={styles.butterfly} />
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
    height: "95%",
    position: "absolute",
  },
  whiteCloud: {
    height: "87%",
    position: "relative",
  },
  butterfly: {
    position: "absolute",
    top: 25,
    left: 20,
  },
  text: {
    fontFamily: "Poppins_700Bold",
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

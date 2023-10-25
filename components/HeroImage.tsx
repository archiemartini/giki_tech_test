import React from 'react';
import { StyleSheet, Text, View, Image, ImageSourcePropType } from 'react-native';

const HeroImage: React.FC = () => {
  const purpleCloudPNG: ImageSourcePropType = require('../assets/purple_cloud.png');
  const whiteCloudPNG: ImageSourcePropType = require('../assets/white_cloud.png');
  // const leaf1: ImageSourcePropType = require('../assets/leaf1.svg');
  // const leaf2: ImageSourcePropType = require('../assets/leaf2.svg');
  // const butterfly: ImageSourcePropType = require('../assets/butterfly.svg');

  return (
    <View>
      <Text>HeroImage</Text>
      <Image
        style={styles.purpleCloud}
        source={purpleCloudPNG}
      />
      <Image
        style={styles.whiteCloud}
        source={whiteCloudPNG}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  purpleCloud: {
    height: (325 * 734) / 1111,
    aspectRatio: 1111 / 734,
    zIndex: 0,
  },
  whiteCloud: {
    height: (200 * 671) / 974,
    aspectRatio: 974 / 671,
    zIndex: 1,
  },
})

export default HeroImage;
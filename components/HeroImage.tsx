import React from 'react';
import { StyleSheet, Text, View, Image, ImageSourcePropType } from 'react-native';
import LeafIconSlim from './SvgComponents/LeafIconSlim';

const HeroImage: React.FC = () => {
  const purpleCloudPNG: ImageSourcePropType = require('../assets/purple_cloud.png');
  const whiteCloudPNG: ImageSourcePropType = require('../assets/white_cloud.png');

  return (
    <View >
      <Text>HeroImage</Text>
      <Image
        style={styles.purpleCloud}
        source={purpleCloudPNG}
      />
      <Image
        style={styles.whiteCloud}
        source={whiteCloudPNG}
      />

      <LeafIconSlim/>
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
});

export default HeroImage;

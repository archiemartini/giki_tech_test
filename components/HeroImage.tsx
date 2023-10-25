import React from 'react';
import { StyleSheet, Text, View, Image, ImageSourcePropType } from 'react-native';
import LeafIconSlim from './SvgComponents/LeafIconSlim';
import LeafIconWide from './SvgComponents/LeafIconWide';
import ButterflyIcon from './SvgComponents/ButterflyIcon';

const HeroImage: React.FC = () => {
  const purpleCloudPNG: ImageSourcePropType = require('../assets/purple_cloud.png');
  const whiteCloudPNG: ImageSourcePropType = require('../assets/white_cloud.png');

  return (
    <View style={styles.container}>
        <Image
          style={{height: 165, position: 'absolute'}}
          source={purpleCloudPNG}
          resizeMode="contain"
        />
        <Image
          style={{height: 150, position: 'relative'}}
          source={whiteCloudPNG}
          resizeMode="contain"
        />
        <ButterflyIcon
          style={{position: 'absolute', top: 0, left: 0, marginTop: 25, marginLeft: 25}}
        />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: 300,
    height: 200,
  }
});
export default HeroImage;

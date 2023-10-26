import React from 'react';
import { StyleSheet, Text, View, Image, ImageSourcePropType } from 'react-native';
import LeafIconSlim from './SvgComponents/LeafIconSlim';
import LeafIconWide from './SvgComponents/LeafIconWide';
import ButterflyIcon from './SvgComponents/ButterflyIcon';

const Hero = ({
  footprintValue,
}: {
  footprintValue: string
}) => {
  const purpleCloudPNG: ImageSourcePropType = require('../assets/purple_cloud.png');
  const whiteCloudPNG: ImageSourcePropType = require('../assets/white_cloud.png');

  return (
    <View style={styles.container}>
        <Image
          style={{height: '90%', position: 'absolute'}}
          source={purpleCloudPNG}
          resizeMode="contain"
        />
        <View 
          style={{position: 'absolute', top: 0, right: 0}}
        >
          <LeafIconSlim style={{marginTop: 20, marginLeft: 10}}/>
          <LeafIconWide style={{marginTop: -8}}/>
        </View>
        <View 
          style={{position: 'absolute', bottom: 0, left: 0}}
        >
          <LeafIconWide style={{}} 
          rotation={'180deg'}
          />
          <LeafIconSlim style={{marginTop: -15}} 
          rotation={'180deg'}
          />
        </View>
        <Image
          style={{height: '85%', position: 'relative'}}
          source={whiteCloudPNG}
          resizeMode="contain"
        />
        <ButterflyIcon
          style={{position: 'absolute', top: 0, left: 0, marginTop: 25, marginLeft: 25}}
        />
        <View style={{position: 'absolute', alignItems: 'center'}}>
          <Text 
              style={{fontSize: 12, marginTop: 10, color: '#c44170', ...styles.text}}
            >
              Your footprint
            </Text>
            <Text style={[{fontSize: 25, color: '#5e2b68'}, styles.text]}>
              {footprintValue}
              <Text style={{fontWeight: 'bold', fontSize: 12}}
              > kg
              </Text>
            </Text>
            <Text style={{fontSize: 8, color: '#5e2b68', ...styles.text}}>
              of carbon emissions
            </Text>
            <View 
              style={styles.takeAStep}
            >
              <Text style={{color: '#fff', fontSize: 10, paddingHorizontal: -25, ...styles.text}}>Take a Step</Text>
            </View>
        </View>
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
  },
  text: {
    textAlign: 'center',
    fontWeight: 'bold',
  },
  pink: {
    color: '#c44170'
  },
  takeAStep: {
    marginTop: 5,
    paddingHorizontal: 8,
    paddingVertical: 5,
    backgroundColor: '#5e2b68',
    borderRadius: 50,
    fontWeight: '100',
  },
});
export default Hero;

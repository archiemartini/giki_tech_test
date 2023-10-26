import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { moderateScale } from 'react-native-size-matters';
import formatNumberWithCommas from './utils/formatNumberWithCommas';
import Hero from './components/Hero';
import data from './data.json';

export default function App() {
  const footprintValue = formatNumberWithCommas(data.footprint)
  const endOfYearTargetValue = formatNumberWithCommas(data.end_of_year_target)
  const leftToCutValue = formatNumberWithCommas(data.left_to_cut)
  const twentyThirtyTargetValue = formatNumberWithCommas(data.twenty_thirty_target)

  return (
    <View style={styles.container}>
      <Hero footprintValue={footprintValue}/>
      <View style={styles.estimationContainer}>
        <View style={{width: 100}}>
          <Text 
            style={[styles.text, styles.pink, ]}
          >
            End of{"\n"} year target
          </Text>
          <Text 
            style={[styles.valueText, styles.text, styles.purple]}
          >
            {endOfYearTargetValue}
            <Text style={styles.unitDescriptorText}
            > kg
            </Text>
          </Text>
          <Text 
            style={[styles.carbonInfoText, styles.text, styles.purple]}
          >
            of carbon emissions
          </Text>
        </View>
        <View 
          style={{width: 100}}
        >
          <Text 
            style={[styles.pink, styles.text]}
          >
            Left to cut this year
          </Text>
          <Text 
            style={[styles.valueText, styles.text, styles.purple]}
          >
            {leftToCutValue}
            <Text 
              style={styles.unitDescriptorText}
            > kg
            </Text>
          </Text>
          <Text style={[styles.carbonInfoText, styles.text, styles.purple]}>
            of carbon emissions
          </Text>
        </View>
      </View>
      <View style={[styles.twentyThirtyTargetView]}>
        <Text style={[styles.twentyThirtyTargetText, styles.purple]}>Your 2030 target is {twentyThirtyTargetValue} kg</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 25
  },
  estimationContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    gap: 10,
  },
  text: {
    textAlign: 'center',
    fontWeight: 'bold',
  },
  valueText: {
    fontSize: moderateScale(25),
  },
  unitDescriptorText: {
      fontWeight: 'bold',
      fontSize: moderateScale(10)
  },
  carbonInfoText:   {
    fontSize: moderateScale(8)
  },
  twentyThirtyTargetView: {
    backgroundColor: '#ebd7ee',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 100,
    fontWeight: 'bold',
  },
  twentyThirtyTargetText: {
    borderRadius: 100,
    fontWeight: 'bold',
    fontSize: moderateScale(10)
  },
  pink: {
    color: '#c44170'
  },
  purple: {
    color: '#5e2b68'
  },
});

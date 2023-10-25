import { StyleSheet, Text, View } from 'react-native';
import formatNumberWithCommas from './utils/formatNumberWithCommas';
import HeroImage from './components/HeroImage';

// replicating value received from backend, assuming an integer value
const FOOTPRINT = 7565
const END_OF_YEAR_TARGET_VALUE = 5855
const LEFT_TO_CUT_VALUE = 409
const TWENTY_THIRTY_TARGET_VALUE = 2500

export default function App() {
  const endOfYearTargetValue = formatNumberWithCommas(END_OF_YEAR_TARGET_VALUE)
  const leftToCutValue = formatNumberWithCommas(LEFT_TO_CUT_VALUE)
  const twentyThirtyTargetValue = formatNumberWithCommas(TWENTY_THIRTY_TARGET_VALUE)

  return (
    <View style={styles.container}>
      <HeroImage />
      <View style={styles.estimationContainer}>
        <View style={{width: 100}}>
          <Text style={[styles.pink, styles.text]}>End of year target</Text>
          <Text 
            style={[{fontSize: 25}, styles.purple, styles.text]}
          >
            {endOfYearTargetValue}
            <Text style={{fontWeight: 'bold', fontSize: 12}}
            > kg
            </Text>
          </Text>
          <Text style={{fontSize: 8, color: '#5e2b68', ...styles.text}}>
            of carbon emissions
          </Text>
        </View>
        <View style={{width: 100}}>
          <Text 
            style={[styles.pink, styles.text]}
          >
            Left to cut this year
          </Text>
          <Text style={[{fontSize: 25, color: '#5e2b68'}, styles.text]}>
            {leftToCutValue}
            <Text style={{fontWeight: 'bold', fontSize: 12}}
            > kg
            </Text>
          </Text>
          <Text style={{fontSize: 8, color: '#5e2b68', ...styles.text}}>
            of carbon emissions
          </Text>
        </View>
      </View>
      <View style={[styles.twentyThirtyTarget]}>
        <Text style={styles.twentyThirtyTargetInner}>Your 2030 target is {twentyThirtyTargetValue} kg</Text>
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
  twentyThirtyTarget: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    backgroundColor: '#ebd7ee',
    borderRadius: 100,
    fontWeight: 'bold',
  },
  twentyThirtyTargetInner: {
    color: '#5e2b68',
    borderRadius: 100,
    fontWeight: 'bold',
  },
  pink: {
    color: '#c44170'
  },
  purple: {
    color: '#5e2b68'
  },
  lilac: {
    color: '#ebd7ee'
  }
});

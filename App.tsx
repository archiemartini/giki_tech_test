import { StyleSheet, Text, View } from 'react-native';
import formatNumberWithCommas from './utils/formatNumberWithCommas';

// replicating value received from backend, assuming an integer value
const END_OF_YEAR_TARGET_VALUE = 5855
const LEFT_TO_CUT_VALUE = 409
const TWENTY_THIRTY_TARGET_VALUE = 2500

export default function App() {
  const endOfYearValue = formatNumberWithCommas(END_OF_YEAR_TARGET_VALUE)
  const leftToCutValue = formatNumberWithCommas(LEFT_TO_CUT_VALUE)
  const twentyThirtyValue = formatNumberWithCommas(TWENTY_THIRTY_TARGET_VALUE)
  return (
    <View style={styles.container}>
      <View style={styles.estimationContainer}>
        <View style={{width: 100}}>
          <Text style={[styles.pink, styles.text]}>End of year target</Text>
          <Text style={[styles.purple, styles.text]}>{endOfYearValue}<Text style={{}}> kg</Text></Text>
        </View>
        <View style={{width: 100}}>
          <Text style={[styles.pink, styles.text]}>Left to cut this year</Text>
          <Text style={[{fontSize: 25}, styles.purple, styles.text]}>{leftToCutValue}<Text style={{fontWeight: 'bold'}}> kg</Text></Text>
        </View>
      </View>
      <View style={[styles.twentyThirtyTarget]}>
        <Text style={styles.twentyThirtyTargetInner}>Your 2030 target is {twentyThirtyValue} kg</Text>
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
  },
  estimationContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    gap: 10
  },
  text: {
    textAlign: 'center',
    fontWeight: 'bold'
  },
  twentyThirtyTarget: {
    padding: 15,
    backgroundColor: '#ebd7ee',
    borderRadius: 100,
    fontWeight: 700,
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

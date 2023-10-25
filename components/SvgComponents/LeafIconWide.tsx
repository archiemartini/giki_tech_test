import React from 'react';
import { View, StyleProp, ViewStyle } from 'react-native';
import Svg, { Path } from 'react-native-svg';

interface LeafIconWideProps {
  width?: number;
  height?: number;
  style?: StyleProp<ViewStyle>
}

const LeafIconWide = ({
  width = 86, 
  height = 30,
  style
}: LeafIconWideProps) => {
  return (
    <View style={style}>
      <Svg 
        width={width} 
        height={height} 
        viewBox="0 0 86 30" 
        fill="none" 
      >
        <Path
          d="M45.5631 0.766936C30.3631 -1.23306 9.22981 10.2669 0.563141 16.2669C0.563141 18.7671 29.5631 28.7668 48.0631 29.2668C62.8631 29.6668 79.2298 23.1001 85.5631 19.7668L70.5631 8.26678C68.5631 6.60017 60.7631 2.76694 45.5631 0.766936Z"
          fill="#4E812D"
        />
        <Path
          d="M23.6076 15.8595C33.164 14.3198 55.2113 12.3301 66.95 16.6894M38.8671 8.16893C37.0586 10.0416 34.2213 15.4123 37.3408 21.9138M48.5814 9.62966C47.0862 11.3007 44.7332 15.8812 47.2824 20.8351M58.9005 12.0305C57.2217 13.5538 54.039 17.2857 54.7387 20.0262"
          stroke="#E9A431"
          strokeWidth="1.3"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </Svg>
    </View>
  );
};

export default LeafIconWide;

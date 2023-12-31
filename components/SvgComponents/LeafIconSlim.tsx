import * as React from "react";
import { View, StyleProp, ViewStyle } from "react-native";
import Svg, { Path } from "react-native-svg";

interface LeafIconSlimProps {
  width?: number;
  height?: number;
  style?: StyleProp<ViewStyle>;
  rotation?: string;
  testID?: string;
}

const LeafIconSlim = ({
  width = 55,
  height = 48,
  style,
  rotation = "0deg",
  testID,
}: LeafIconSlimProps) => {
  return (
    <View
      testID={testID}
      style={[style, { transform: [{ rotate: rotation }] }]}
    >
      <Svg width={width} height={height} viewBox="0 0 55 48" fill="none">
        <Path
          d="M4.15098 47.1479C7.21505 35.5614 20.9088 10.0579 51.1715 0.735964C45.8426 13.4962 28.9781 40.6429 4.15098 47.1479Z"
          fill="#4E812D"
        />
        <Path
          d="M16.2224 35.5858C19.6365 30.6266 27.923 19.9376 33.7554 16.855M29.1546 14.8974C28.7435 16.7149 28.5742 20.9102 31.1851 23.1513M23.0662 21.5443C22.817 23.322 23.0684 27.4137 26.0678 29.5593"
          stroke="#E9A431"
          strokeWidth="1.3"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </Svg>
    </View>
  );
};

export default LeafIconSlim;

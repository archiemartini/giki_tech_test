import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

const LeafSvg1 = (props) => {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 55 48"
      fill="none"
      role="img"
      {...props}
    >
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
  );
}

export default LeafSvg1;
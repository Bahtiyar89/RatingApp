import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

function ShevronLeft(props) {
  return (
    <Svg
      width={8}
      height={16}
      viewBox="0 0 8 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}>
      <Path
        d="M7.375 14.75L.625 8l6.75-6.75"
        stroke="#000"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}

export default ShevronLeft;

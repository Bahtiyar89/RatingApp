import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

function UploadSvg(props) {
  return (
    <Svg
      width={16}
      height={16}
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}>
      <Path
        d="M2 11.333v2c0 .737.597 1.334 1.333 1.334h9.334c.736 0 1.333-.597 1.333-1.334v-2M10.667 4L8 1.333 5.333 4M8 1.333v9.334"
        stroke="#fff"
        strokeWidth={1.33333}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}

export default UploadSvg;

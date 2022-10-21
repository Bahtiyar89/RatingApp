import * as React from 'react';
import Svg, {
  G,
  Rect,
  Path,
  Defs,
  LinearGradient,
  Stop,
  ClipPath,
} from 'react-native-svg';
/* SVGR has dropped some elements not supported by react-native-svg: filter */

function GradientSvg(props) {
  return (
    <Svg
      width={92}
      height={92}
      viewBox="0 0 92 92"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}>
      <G filter="url(#filter0_d_62_1904)">
        <G clipPath="url(#clip0_62_1904)">
          <Rect x={4} width={84} height={84} rx={14} fill="#6248FF" />
          <Path
            d="M116.48-37.459c-3.678-23.589-17.398-35.067-37.045-48.631-51.163-35.323-143.612-1.81-180.275 48.4-36.588 50.108-39.043 107.211-4.587 158.809 30.86 46.212 63.966 13.438 115.76-6.696 48.15-18.718 71.398 43.33 100.06.35 19.593-29.382-45.58-54.674-56.238-78.157C38.531 2.19 122.304-.105 116.48-37.46z"
            fill="url(#paint0_linear_62_1904)"
            fillOpacity={0.45}
          />
          <Path
            d="M105.735-14.424c-3.235-20.745-15.3-30.84-32.579-42.769C28.162-88.257-53.14-58.785-85.384-14.628c-32.177 44.067-34.336 94.286-4.034 139.662 27.14 40.641 56.254 11.818 101.803-5.888 42.345-16.461 62.79 38.106 87.996.307 17.231-25.84-40.083-48.082-49.457-68.734-13.74-30.274 59.933-32.293 54.811-65.143z"
            fill="url(#paint1_linear_62_1904)"
            fillOpacity={0.31}
          />
        </G>
      </G>
      <Defs>
        <LinearGradient
          id="paint0_linear_62_1904"
          x1={76.1673}
          y1={-87.447}
          x2={66.0109}
          y2={98.7539}
          gradientUnits="userSpaceOnUse">
          <Stop stopColor="#92A8F7" />
          <Stop offset={1} stopColor="#6268FF" />
        </LinearGradient>
        <LinearGradient
          id="paint1_linear_62_1904"
          x1={70.2825}
          y1={-58.3859}
          x2={61.3505}
          y2={105.366}
          gradientUnits="userSpaceOnUse">
          <Stop stopColor="#92A8F7" />
          <Stop offset={1} stopColor="#6268FF" />
        </LinearGradient>
        <ClipPath id="clip0_62_1904">
          <Rect x={4} width={84} height={84} rx={14} fill="#fff" />
        </ClipPath>
      </Defs>
    </Svg>
  );
}

export default GradientSvg;

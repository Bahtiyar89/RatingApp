import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

function MolotokSvg(props) {
  return (
    <Svg
      width={14}
      height={12}
      viewBox="0 0 14 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}>
      <Path
        d="M13.982 5.883c.057-.185-.03-.392-.102-.519a.36.36 0 00-.216-.161L7.045 3.227l.53-1.647a.672.672 0 00-.443-.85L5.383.198a.672.672 0 00-.84.45L3.196 5.128c-.108.36.1.738.46.84l1.68.477a.672.672 0 00.822-.439l.55-1.692 6.662 2.005a.256.256 0 00.08.013c.11-.003.409-.05.532-.45z"
        fill="#fff"
      />
      <Path
        d="M6.332 5.483l-2.995-.878-.1.348 2.983.867.112-.337zM7.55 1.697L4.49.8l-.1.347 3.046.886.113-.336z"
        fill="#6248FF"
      />
      <Path
        d="M6.827 9.828H1.221a.321.321 0 00-.321.321v.258c0 .17-.134.312-.304.32l-.292.016a.322.322 0 00.017.643H7.68A.321.321 0 008 11.065v-.032a.321.321 0 00-.321-.322h-.21a.321.321 0 01-.32-.32v-.242a.321.321 0 00-.322-.321z"
        fill="#fff"
      />
    </Svg>
  );
}

export default MolotokSvg;

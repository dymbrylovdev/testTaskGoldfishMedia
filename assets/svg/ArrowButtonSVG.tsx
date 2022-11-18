import * as React from "react"
import Svg, { Path } from "react-native-svg"

const ArrowButtonSVG = (props) => (
    <Svg
        width={16}
        height={16}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
    >
      <Path
          d="m1 1 14 14M15 1 1 15"
          stroke="#fff"
          strokeWidth={2}
          strokeLinecap="round"
          strokeLinejoin="round"
      />
    </Svg>
)

export default ArrowButtonSVG;

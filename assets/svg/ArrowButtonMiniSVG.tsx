import * as React from "react"
import Svg, { Path } from "react-native-svg"

const ArrowButtonMiniSVG = (props) => (
    <Svg
        width={10}
        height={11}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
    >
      <Path
          d="m1 1.5 8 8M9 1.5l-8 8"
          stroke="#1E63EE"
          strokeWidth={1.5}
          strokeLinecap="round"
          strokeLinejoin="round"
      />
    </Svg>
)

export default ArrowButtonMiniSVG;

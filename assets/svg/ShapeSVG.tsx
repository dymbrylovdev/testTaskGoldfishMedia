import * as React from "react"
import Svg, {
  Path,
} from "react-native-svg"

const ShapeSVG = (props) => (
    <Svg
        width={14}
        height={10}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
    >
      <Path
          d="M13.293.668a1 1 0 0 0-1.387 0L5 7.307 2.091 4.514a1 1 0 0 0-1.384-.001L.7 4.52a.93.93 0 0 0-.002 1.342l3.609 3.471a1 1 0 0 0 1.386 0l7.606-7.31A.936.936 0 0 0 13.3.675l-.007-.006Z"
          fill="#fff"
      />
    </Svg>
)

export default ShapeSVG;

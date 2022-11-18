import React, {Children, useState} from 'react';
import {StyleProp, TouchableOpacity, View, ViewStyle} from 'react-native';
import { styles } from './style';
import { TextInputMask } from 'react-native-masked-text';
import ShapeSVG from "../../../../assets/svg/ShapeSVG";

interface IProps {
  children: React.ReactNode;
  viewStyles?: StyleProp<ViewStyle>;
}

const RadioButton: React.FC<IProps> = ({
  children,
  viewStyles
}) => {
  const [isActive, setIsActive] = useState(false);
  return (
      <View style={[styles.container, viewStyles]}>
        <TouchableOpacity
            onPress={() => setIsActive(!isActive)}
            style={[styles.container__item_radio, isActive && {borderColor:'transparent', backgroundColor:  "#00C56D"}]}
        >
          {isActive && (
            <ShapeSVG/>
          )}
        </TouchableOpacity>
        <View>
          {children}
        </View>
      </View>

  );
};

export default React.memo(RadioButton);

import React from 'react';
import { View, Text, TouchableOpacity, StyleProp, ViewStyle, TextStyle } from 'react-native';
import { styles } from './style';
import LogoMiniSVG from "../../../../assets/svg/ArrowButtonSVG";

interface IProps {
  buttonStyle?: StyleProp<ViewStyle>;
  textStyle?: StyleProp<TextStyle>;
  text: string;
  disabled?: boolean;
  handler: () => void;
  loading?: boolean;
}

const HeaderModal: React.FC<IProps> = ({text, handler}) => (
  <View style={styles.wrapperBackBtn}>
    <TouchableOpacity
        style={styles.btn_back}
        onPress={handler}>
      <LogoMiniSVG style={{position: 'relative', right: 14}}/>
    </TouchableOpacity>
    <Text style={styles.text_title}>{text}</Text>
  </View>
);

export default HeaderModal;

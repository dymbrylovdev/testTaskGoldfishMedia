import React from 'react';
import {
  TouchableOpacity,
  Text,
  StyleProp,
  ViewStyle,
  TextStyle,
  View,
  ActivityIndicator,
} from 'react-native';
import {styles} from './style';

interface IProps {
  buttonStyle: StyleProp<ViewStyle>;
  textStyle: StyleProp<TextStyle>;
  text: string;
  disabled: boolean;
  handler: () => void;
  icon?: boolean;
  loading?: boolean;
  children?: React.ReactNode;
}

const Button: React.FC<IProps> = ({
  text,
  disabled,
  handler,
  buttonStyle,
  textStyle,
  icon,
  loading,
  children
}) => {
  return (
      <TouchableOpacity style={buttonStyle} disabled={disabled} onPress={() => handler()}>
        <View style={styles.button__style}>
          {loading ? (
              <ActivityIndicator color="white"/>
          ) : (
              <>
                {children ? children : null}
                <Text style={textStyle}>{text}</Text>
              </>
          )}
        </View>
      </TouchableOpacity>
  );
};

export default Button;

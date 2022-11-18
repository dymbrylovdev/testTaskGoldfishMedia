import React, {useState} from 'react';
import {SafeAreaView, StyleProp, StyleSheet, Text, TextInput, TextStyle, View, ViewStyle} from 'react-native';
import {styles} from "./style";
import PhoneMask from "../../common/phone-mask";

interface IProps {
  inputStyle?: StyleProp<ViewStyle>;
  textStyle?: StyleProp<TextStyle>;
  text: string;
  placeholder: string;
  disabled?: boolean;
  type?: string;
}

const CustomTextInput: React.FC<IProps> = ({
  text,
  placeholder,
  type
}) => {
  const [number, onChangeNumber] = React.useState(null);
  const [value, setValue] = useState('');

  return (
      <View style={styles.container}>
        <Text style={styles.text}>{text}</Text>
        {type === 'phone' ? (
           <PhoneMask value={value} setValue={setValue} />
        ) : (
          <TextInput
              style={styles.input}
              onChangeText={onChangeNumber}
              value={number}
              placeholder={placeholder}
          />
        )}
      </View>
  );
};


export default CustomTextInput;

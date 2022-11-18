import React from 'react';
import { View } from 'react-native';
import { styles } from './style';
import { TextInputMask } from 'react-native-masked-text';

interface IProps {
  value: string;
  setValue: (text: string) => void;
}

const PhoneMask: React.FC<IProps> = ({ value, setValue }) => {
  return (
    <View style={styles.wrapper__input__mask}>
      <TextInputMask
        type={'custom'}
        options={{
          mask: '+7 (999) 999-99-99',
        }}
        onFocus={() => value === '' && setValue('7 ')}
        style={styles.input__mask}
        onChangeText={(text) => text.length > 2 && setValue(text)}
        value={value}
        keyboardType="numeric"
        maxLength={18}
        autoCorrect={false}
        disableFullscreenUI={false}
        underlineColorAndroid="transparent"
        placeholder='Мобильный телефон'
      />
    </View>
  );
};

export default React.memo(PhoneMask);

import React from 'react';
import { View, Text } from 'react-native';
import {
  CodeField,
  Cursor,
  useBlurOnFulfill,
  useClearByFocusCell,
} from 'react-native-confirmation-code-field';
import { styles } from './style';

interface IProps {
  value: string;
  setValue: (text: string) => void;
  disabled: boolean;
  cellCount: number,
}

const CodeFieldComponent: React.FC<IProps> = ({
  value,
  setValue,
  disabled,
  cellCount
}) => {
  const ref = useBlurOnFulfill({ value, cellCount: cellCount });
  const [props, getCellOnLayoutHandler] = useClearByFocusCell({
    value,
    setValue
  });
  return (
    <View style={styles.wrapper__input__mask}>
      <CodeField
        onFocus={() => value.length === cellCount && setValue(value.slice(0, -1))}
        ref={ref}
        {...props}
        value={value}
        onChangeText={setValue}
        cellCount={cellCount}
        keyboardType="number-pad"
        textContentType="oneTimeCode"
        renderCell={({ index, symbol, isFocused }) => (
          <View style={styles.wrapper__code__field} key={index}>
            <Text style={[styles.input__mask, {opacity: disabled ? 0.5 : 1}]} onLayout={getCellOnLayoutHandler(index)}>
              {symbol || (isFocused ? <Cursor /> : null)}
            </Text>
          </View>
        )}
      />
    </View>
  );
};

export default React.memo(CodeFieldComponent);

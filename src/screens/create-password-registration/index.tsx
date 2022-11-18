import React, {useCallback, useMemo, useState} from "react";
import { StackScreenProps } from '@react-navigation/stack';
import {RootStackParamList} from "../../interfaces/navigate";
import {ScreenNames, UserType} from "../../utils/constants";
import {ScrollView, Text, View} from "react-native";
import {styles} from "./style";
import HeaderModal from "../../components/common/header";
import ArrowButtonMiniSVG from "../../../assets/svg/LogoMiniSVG";

import Button from "../../components/common/button";
import CodeFieldComponent from "../../components/common/code-field";
import RadioButton from "../../components/common/radio-button";

type StackProps = StackScreenProps<RootStackParamList, ScreenNames.CreatePasswordRegistration>;

const CreatePasswordRegistration: React.FC<StackProps> = ({
  route,
  navigation
}) => {
  const {typeUser} = route.params;
  const [value, setValue] = useState('');

  const isDoctor = useMemo(() => {
    return typeUser === UserType.Doctor
  }, [typeUser])


  const toBack = useCallback(() => {
      navigation.goBack();
  }, [])

  return (
      <ScrollView
          stickyHeaderIndices={[0]}
          renderToHardwareTextureAndroid
          nestedScrollEnabled={true}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{flexGrow: 1}}
          style={{ flex:1, backgroundColor: '#1E63EE'}}
      >
        <View style={{paddingHorizontal: 16,  backgroundColor: '#1E63EE'}}>
          <HeaderModal
              handler={toBack}
              text={`Регистрация в кабинете ${isDoctor ? "врача" : "пациента"}`}
          />
        </View>
        <View style={styles.container}>
          <View style={styles.form}>
            <View style={styles.form_logo}>
              <ArrowButtonMiniSVG />
            </View>
            <View style={styles.code_field}>
              <Text style={styles.code_field_title}>Придумайте пин-код{'\n'}для входа в приложение</Text>
              <CodeFieldComponent value={value} setValue={setValue} disabled={false} cellCount={4}/>
              <View style={{marginVertical: 23}}>
                <RadioButton>
                    <Text style={styles.text_radio_button}>
                      Входить без пароля
                    </Text>
                </RadioButton>
              </View>
            </View>
            <Button
                text={'Готово'}
                buttonStyle={styles.button__next}
                textStyle={styles.button__next_text}
                disabled={false}
                handler={() => {}}
            />
          </View>
        </View>
      </ScrollView>
  )
}
export default CreatePasswordRegistration;

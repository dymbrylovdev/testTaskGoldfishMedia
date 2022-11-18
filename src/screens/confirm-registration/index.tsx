import React, {useCallback, useMemo, useState} from "react";
import { StackScreenProps } from '@react-navigation/stack';
import {RootStackParamList} from "../../interfaces/navigate";
import {ScreenNames, UserType} from "../../utils/constants";
import {ScrollView, Text, TouchableOpacity, View} from "react-native";
import {styles} from "./style";
import HeaderModal from "../../components/common/header";
import ArrowButtonMiniSVG from "../../../assets/svg/LogoMiniSVG";

import Button from "../../components/common/button";
import CodeFieldComponent from "../../components/common/code-field";

type StackProps = StackScreenProps<RootStackParamList, ScreenNames.ConfirmRegistration>;

const ConfirmRegistrationScreen: React.FC<StackProps> = ({
  route,
  navigation
}) => {
  const {typeUser} = route.params;
  const [value, setValue] = useState('');

  const isDoctor = useMemo(() => {
    return typeUser === UserType.Doctor
  }, [typeUser])

  const toCreatePasswordRegistration = useCallback((typeUser: string) => {
    navigation.navigate(ScreenNames.CreatePasswordRegistration, {
      typeUser: typeUser
    });
  }, [])

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
              <Text style={styles.code_field_title}>Введите код авторизации</Text>
              <CodeFieldComponent value={value} setValue={setValue} disabled={false} cellCount={6}/>
              <TouchableOpacity>
                <Text style={styles.code_field_text_link}>Введите код авторизации</Text>
              </TouchableOpacity>
            </View>
            <Button
                text={'Продолжить'}
                buttonStyle={styles.button__next}
                textStyle={styles.button__next_text}
                disabled={false}
                handler={() => toCreatePasswordRegistration(typeUser)}
            />
          </View>
        </View>
      </ScrollView>
  )
}
export default ConfirmRegistrationScreen;

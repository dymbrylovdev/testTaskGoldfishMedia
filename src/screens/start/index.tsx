import React from "react";
import { StackScreenProps } from '@react-navigation/stack';
import {RootStackParamList} from "../../interfaces/navigate";
import {ScreenNames, UserType} from "../../utils/constants";
import {Text, View} from "react-native";
import {styles} from "./style";
import LogoSvg from "../../../assets/svg/LogoSVG";
import Button from "../../components/common/button";

type StackProps = StackScreenProps<RootStackParamList, ScreenNames.Start>;

const StartScreen: React.FC<StackProps> = ({navigation}) => {

  const toRegistration = (typeUser: string) => {
    navigation.navigate(ScreenNames.Registration, {
      typeUser: typeUser
    });
  }
  return (
      <View style={{paddingHorizontal: 16, flex:1, backgroundColor: '#1E63EE'}}>
        <View style={styles.container}>
          <View style={styles.wrap_logo}>
            <View style={styles.logo}>
              <LogoSvg/>
            </View>
            <Text style={styles.title}>
              Программа поддержки пациентов и врачей
            </Text>
          </View>
          <View style={{}}>
            <View>
              <View style={{alignItems: 'center'}}>
                <Text style={[styles.button_text, {fontSize: 21}]}>Регистрация</Text>
              </View>
              <Button
                  text={'Врач'}
                  buttonStyle={styles.button}
                  textStyle={styles.button_text}
                  disabled={false}
                  handler={() => toRegistration(UserType.Doctor)}
              />
              <Button
                  text={'Пациент'}
                  buttonStyle={styles.button}
                  textStyle={styles.button_text}
                  disabled={true}
                  handler={() => toRegistration(UserType.Patient)}
              />
            </View>
          </View>
        </View>

      </View>
  )
}
export default StartScreen;

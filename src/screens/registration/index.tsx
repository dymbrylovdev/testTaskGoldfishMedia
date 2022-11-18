import React, {useCallback, useMemo, useState} from "react";
import { StackScreenProps } from '@react-navigation/stack';
import {RootStackParamList} from "../../interfaces/navigate";
import {ScreenNames, UserType} from "../../utils/constants";
import {ScrollView, Text, TouchableOpacity, View} from "react-native";
import {styles} from "./style";
import HeaderModal from "../../components/common/header";
import CustomTextInput from "../../components/custom/CustomTextInput";
import * as DocumentPicker from 'expo-document-picker';
import {Picker} from '@react-native-picker/picker';
import DocumentSVG from "../../../assets/svg/DocumentSVG";
import RadioButton from "../../components/common/radio-button";
import Button from "../../components/common/button";
import LogoMiniSVG from "../../../assets/svg/LogoMiniSVG";
import ArrowButtonMiniSVG from "../../../assets/svg/ArrowButtonMiniSVG";

type StackProps = StackScreenProps<RootStackParamList, ScreenNames.Registration>;

const RegistrationScreen: React.FC<StackProps> = ({
  route,
  navigation
}) => {
  const {typeUser} = route.params;
  const isDoctor = useMemo(() => {
    return typeUser === UserType.Doctor
  }, [typeUser])
  const [selectedCity, setSelectedCity] = useState();

  const pickDocument = async () => {
    let result = await DocumentPicker.getDocumentAsync({});
    console.log(result);
  };

  const toConfirmRegistration = useCallback((typeUser: string) => {
    navigation.navigate(ScreenNames.ConfirmRegistration, {
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
              <LogoMiniSVG />
            </View>
            <CustomTextInput
                text={"Фамилия"}
                placeholder={"Фамилия"}
            />
            <CustomTextInput
                text={"Имя"}
                placeholder={"Имя"}
            />
            <CustomTextInput
                text={"Отчество"}
                placeholder={"Отчество"}
            />
            <CustomTextInput
                text={"Телефон"}
                placeholder={"Телефон"}
                type={"phone"}
            />
            <CustomTextInput
                text={"Email"}
                placeholder={"Email"}
            />
            <View style={styles.container_input}>
              <Text style={styles.text}>Город</Text>
              <View style={styles.select}>
                <Picker
                    mode={'dropdown'}
                    selectedValue={selectedCity}
                    onValueChange={(itemValue, itemIndex) =>
                        setSelectedCity(itemValue)
                    }>
                  <Picker.Item label="Выберите" enabled={false}/>
                  <Picker.Item label="Москва" value="Москва" />
                  <Picker.Item label="Питер" value="Питер" />
                </Picker>
              </View>
            </View>
            <View style={[styles.container_input, {marginBottom: 46}]}>
              <Text style={styles.text}>Диплом</Text>
              <View style={{flex:1}}>
                <TouchableOpacity
                    style={styles.document}
                    onPress={pickDocument}
                >
                  <View style={{marginRight:10}}>
                    <DocumentSVG/>
                  </View>
                  <Text style={styles.text_document}>Прикрепить файл</Text>
                </TouchableOpacity>
                <View style={styles.document_item}>
                  <View>
                    <Text style={styles.document_item_text}>Диплом</Text>
                  </View>
                  <TouchableOpacity >
                    <ArrowButtonMiniSVG />
                  </TouchableOpacity>
                </View>
              </View>
            </View>

            <View style={styles.container_input}>
              <Text style={styles.text}>Специали-
                зация</Text>
              <View style={styles.select}>
                <Picker
                    mode={'dropdown'}
                    selectedValue={selectedCity}
                    onValueChange={(itemValue, itemIndex) =>
                        setSelectedCity(itemValue)
                    }>
                  <Picker.Item
                      style={{color: '#A4A4A4'}}
                      label="Специализация"
                      enabled={false}/>
                  <Picker.Item label="Москва" value="Москва" />
                  <Picker.Item label="Питер" value="Питер" />
                </Picker>
              </View>
            </View>
            <RadioButton
                viewStyles={{marginBottom: 15, marginTop: 25}}
            >
              <TouchableOpacity>
                <Text style={styles.text_radio_button}>
                  Согласие на обработку персональных данных
                </Text>
              </TouchableOpacity>
            </RadioButton>
            <RadioButton
                viewStyles={{marginBottom: 15}}
            >
              <TouchableOpacity>
                <Text style={styles.text_radio_button}>
                  Согласие на участие в акциях
                </Text>
                <Text>по продвижению приложения</Text>
              </TouchableOpacity>
            </RadioButton>
            <RadioButton
                viewStyles={{marginBottom: 15}}
            >
              <TouchableOpacity>
                <Text style={styles.text_radio_button}>
                  Согласие на участие в галерее
                </Text>
                <Text>рекомендованных врачей</Text>
              </TouchableOpacity>
            </RadioButton>
            <View style={{marginBottom: 18}}>
              <CustomTextInput
                  text={"Введите\nпромокод"}
                  placeholder={"Промокод"}
              />
            </View>
            <Button
                text={'Пациент'}
                buttonStyle={styles.button__next}
                textStyle={styles.button__next_text}
                disabled={false}
                handler={() => toConfirmRegistration(typeUser)}
            />
          </View>
        </View>
      </ScrollView>
  )
}
export default RegistrationScreen;

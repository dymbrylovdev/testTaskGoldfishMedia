import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {View} from "react-native";
import {ScreenNames} from "../utils/constants";
import StartScreen from "../screens/start";
import {RootStackParamList} from "../interfaces/navigate";
import Constants from "expo-constants";
import RegistrationScreen from "../screens/registration";
import ConfirmRegistrationScreen from "../screens/confirm-registration";
import CreatePasswordRegistration from "../screens/create-password-registration";

const Stack = createNativeStackNavigator<RootStackParamList>();

const NavigationComponent: React.FC = () => {

  return (
      <NavigationContainer>
        <View style={{flex: 1, marginTop: Constants.statusBarHeight}}>
          <Stack.Navigator
              screenOptions={{
                headerShown: false,
              }}>
            <Stack.Screen
                name={ScreenNames.Start}
                component={StartScreen}
            />
            <Stack.Screen
                name={ScreenNames.Registration}
                component={RegistrationScreen}
            />
            <Stack.Screen
                name={ScreenNames.ConfirmRegistration}
                component={ConfirmRegistrationScreen}
            />
            <Stack.Screen
                name={ScreenNames.CreatePasswordRegistration}
                component={CreatePasswordRegistration}
            />
          </Stack.Navigator>
        </View>
      </NavigationContainer>
  );
};

export default NavigationComponent;

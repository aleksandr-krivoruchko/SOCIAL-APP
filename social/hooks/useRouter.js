import React from "react";
import { View, TouchableOpacity } from "react-native";
import { Feather } from "react-native-vector-icons";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

const AuthStack = createNativeStackNavigator();
const MainTabs = createBottomTabNavigator();

import { RegistrationScreen } from "../screens/auth/RegistrationScreen";
import { LoginScreen } from "../screens/auth/LoginScreen";
import { HomeScreen } from "../screens/main/HomeScreen";

export const useRoute = (isAuth) => {
  if (isAuth) {
    return <HomeScreen />;
  }
  return (
    <AuthStack.Navigator initialRouteName="Login">
      <AuthStack.Screen
        name="Register"
        component={RegistrationScreen}
        options={{ headerShown: false }}
      />
      <AuthStack.Screen
        name="Login"
        component={LoginScreen}
        options={{ headerShown: false }}
      />
    </AuthStack.Navigator>
  );
};

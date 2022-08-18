import "react-native-gesture-handler";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import * as Font from "expo-font";
// import { AppLoading } from "expo";
import { RegistrationScreen } from "./screens/RegistrationScreen";
import { LoginScreen } from "./screens/LoginScreen";

const Stack = createNativeStackNavigator();
const loadFonts = async () => {
  await Font.loadAsync({
    "Roboto-Regular": require("./assets/fonts/Roboto-Regular.ttf"),
    "Roboto-Medium": require("./assets/fonts/Roboto-Medium.ttf"),
  });
};

export default function App() {
  //  const [isReady, setIsReady] = React.useState(false);
  //   if (!isReady) {
  //     return (
  //       <AppLoading startAsync={loadFonts} onFinish={() => setIsReady(true)} />
  //     );
  //   }

  React.useEffect(() => {
    loadFonts();
  }, []);

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Register"
          component={RegistrationScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Login"
          component={LoginScreen}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

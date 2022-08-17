import React from "react";
import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  Keyboard,
  TouchableWithoutFeedback,
} from "react-native";
import * as Font from "expo-font";
import { AppLoading } from "expo";
import { RegistrationScreen } from "./screens/RegistrationScreen";
import { LoginScreen } from "./screens/LoginScreen";

const loadFonts = async () => {
  await Font.loadAsync({
    "Roboto-Regular": require("./assets/fonts/Roboto-Medium.ttf"),
    "Roboto-Medium": require("./assets/fonts/Roboto-Medium.ttf"),
    "Roboto-Bold": require("./assets/fonts/Roboto-Bold.ttf"),
  });
};

export default function App() {
  const [isReady, setIsReady] = React.useState(false);
  const [isShowKeyboard, setIsShowKeyboard] = React.useState(false);

  const keyboardHide = () => {
    setIsShowKeyboard(false);
    Keyboard.dismiss();
  };

  //   if (!isReady) {
  //     return (
  //       <AppLoading startAsync={loadFonts} onFinish={() => setIsReady(true)} />
  //     );
  //   }

  return (
    <TouchableWithoutFeedback onPress={keyboardHide}>
      <View style={styles.container}>
        <ImageBackground
          source={require("./assets/background-image.jpg")}
          style={styles.image}>
          <RegistrationScreen
            isShowKeyboard={isShowKeyboard}
            setIsShowKeyboard={setIsShowKeyboard}
            keyboardHide={keyboardHide}
          />
          {/* <LoginScreen /> */}
        </ImageBackground>
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000",
  },
  text: {
    color: "#00008b",
    fontSize: 40,
    fontFamily: "Roboto-Medium",
  },
  image: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "flex-end",

    //  alignItems: "center",
    //  justifyContent: "center",
  },
});

import React from "react";

import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Platform,
  Keyboard,
  KeyboardAvoidingView,
} from "react-native";

export function LoginScreen() {
  const [isShowKeyboard, setIsShowKeyboard] = React.useState(false);

  const keyboardHide = () => {
    setIsShowKeyboard(true);
    Keyboard.dismiss();
  };

  return (
    <View style={styles.container}>
      <View style={{ alignItems: "center" }}>
        <Text style={styles.title}>Войти</Text>
      </View>
      {/* <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}> */}
      <View style={styles.form}>
        <TextInput
          style={styles.input}
          placeholder="Адрес электронной почты"
          onFocus={() => setIsShowKeyboard(true)}
        />
        <TextInput
          style={styles.input}
          placeholder="Пароль"
          secureTextEntry={true}
          onFocus={() => setIsShowKeyboard(true)}
        />
        <TouchableOpacity
          style={styles.button}
          activeOpacity={0.7}
          onFocus={keyboardHide}>
          <Text style={styles.btnText}>Войти</Text>
        </TouchableOpacity>
      </View>
      <View style={{ alignItems: "center" }}>
        <Text style={styles.link}>Нет аккаунта? Зарегистрироваться</Text>
      </View>
      {/* </KeyboardAvoidingView> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    paddingTop: 90,
    paddingBottom: 40,
    backgroundColor: "#fff",
    borderTopStartRadius: 25,
    borderTopEndRadius: 25,

    //  marginTop: 219,
  },
  title: {
    color: "#000",
    fontSize: 36,
    marginBottom: 32,
    //  fontFamily: "Roboto-Bold",
  },
  form: {
    marginHorizontal: 16,
  },
  input: {
    height: 50,
    padding: 16,
    borderWidth: 1,
    backgroundColor: "#F6F6F6",
    borderColor: "#E8E8E8",
    borderRadius: 8,
    marginBottom: 16,
    placeholderTextColor: "#BDBDBD",
    fontSize: 16,
  },
  button: {
    height: 50,
    backgroundColor: Platform.OS === "android" ? "#FF6C00" : "#000",
    borderRadius: 100,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 16,
  },
  btnText: {
    color: "#fff",
    fontSize: 16,
  },
  link: {
    color: "#1B4371",
    fontSize: 16,
  },
});

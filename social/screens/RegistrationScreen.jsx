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
  TouchableWithoutFeedback,
} from "react-native";

const initialState = {
  login: "",
  email: "",
  password: "",
};

export function RegistrationScreen({ isShowKeyboard, setIsShowKeyboard }) {
  const [state, setState] = React.useState(initialState);

  const onSubmit = (e) => {
    setIsShowKeyboard(false);
    Keyboard.dismiss();
    console.log(state);
    setState(initialState);
  };

  return (
    <View style={{ ...styles.container, marginTop: isShowKeyboard ? 40 : 0 }}>
      <View style={{ alignItems: "center" }}>
        <Text style={styles.title}>Регистрация</Text>
      </View>

      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}>
        <View style={styles.form}>
          <TextInput
            style={styles.input}
            placeholder="Логин"
            onFocus={() => setIsShowKeyboard(true)}
            onChangeText={(value) =>
              setState((prevState) => ({ ...prevState, login: value }))
            }
            value={state.login}
          />
          <TextInput
            style={styles.input}
            placeholder="Адресс электронной почты"
            onFocus={() => setIsShowKeyboard(true)}
            onChangeText={(value) =>
              setState((prevState) => ({ ...prevState, email: value }))
            }
            value={state.email}
          />
          <TextInput
            style={styles.input}
            placeholder="Пароль"
            secureTextEntry={true}
            onFocus={() => setIsShowKeyboard(true)}
            onChangeText={(value) =>
              setState((prevState) => ({ ...prevState, password: value }))
            }
            value={state.password}
          />
          <TouchableOpacity
            style={styles.button}
            activeOpacity={0.7}
            onPress={onSubmit}>
            <Text style={styles.btnText}>Зарегистрироваться</Text>
          </TouchableOpacity>
          <View style={{ alignItems: "center" }}>
            <Text style={styles.link}>Уже есть аккаунт? Войти</Text>
          </View>
        </View>
      </KeyboardAvoidingView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: -0.7,
    paddingTop: 92,
    paddingBottom: 45,
    justifyContent: "flex-start",
    backgroundColor: "#fff",
    borderTopStartRadius: 25,
    borderTopEndRadius: 25,
  },
  title: {
    color: "#000",
    fontSize: 36,
    marginBottom: 32,
    fontFamily: "Roboto-Bold",
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

import React from "react";
import { useDispatch } from "react-redux";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  ImageBackground,
  TouchableOpacity,
  Platform,
  Keyboard,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
} from "react-native";
import { signUp } from "../../redux/auth/authOperations";
import { auth } from "../../firebase/firebase";

const initialState = {
  login: "",
  email: "",
  password: "",
};

export function RegistrationScreen({ navigation }) {
  const [state, setState] = React.useState(initialState);
  const [isShowKeyboard, setIsShowKeyboard] = React.useState(false);
  const [isFocused1, setIsFocused1] = React.useState(false);
  const [isFocused2, setIsFocused2] = React.useState(false);
  const [isFocused3, setIsFocused3] = React.useState(false);
  const dispatch = useDispatch();

  const keyboardHide = () => {
    setIsShowKeyboard(false);
    Keyboard.dismiss();
  };

  const onSubmit = () => {
    keyboardHide();
    //  dispatch(signUp(state));
    auth
      .createUserWithEmailAndPassword(state.email, state.password)
      .then((userCredential) => {
        const user = userCredential.user;
        console.log(user.email);
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
      });
    setState(initialState);
  };

  return (
    <TouchableWithoutFeedback onPress={onSubmit}>
      <View style={styles.container}>
        <ImageBackground
          source={require("../../assets/background-image.jpg")}
          style={styles.image}>
          <View
            style={{ ...styles.content, marginTop: isShowKeyboard ? 40 : 0 }}>
            <View style={{ alignItems: "center" }}>
              <Text style={styles.title}>Регистрация</Text>
            </View>

            <KeyboardAvoidingView
              behavior={Platform.OS === "ios" ? "padding" : "height"}>
              <View style={styles.form}>
                <TextInput
                  style={{
                    ...styles.input,
                    borderColor: isFocused1 ? "#FF6C00" : "#E8E8E8",
                  }}
                  placeholder="Логин"
                  onFocus={() => {
                    setIsShowKeyboard(true);
                    setIsFocused1(true);
                  }}
                  onBlur={() => setIsFocused1(false)}
                  onChangeText={(value) =>
                    setState((prevState) => ({ ...prevState, login: value }))
                  }
                  value={state.login}
                />
                <TextInput
                  style={{
                    ...styles.input,
                    borderColor: isFocused2 ? "#FF6C00" : "#E8E8E8",
                  }}
                  placeholder="Адрес электронной почты"
                  onFocus={() => {
                    setIsShowKeyboard(true);
                    setIsFocused2(true);
                  }}
                  onBlur={() => setIsFocused2(false)}
                  onChangeText={(value) =>
                    setState((prevState) => ({ ...prevState, email: value }))
                  }
                  value={state.email}
                />
                <TextInput
                  style={{
                    ...styles.input,
                    borderColor: isFocused3 ? "#FF6C00" : "#E8E8E8",
                  }}
                  placeholder="Пароль"
                  secureTextEntry={true}
                  onFocus={() => {
                    setIsShowKeyboard(true);
                    setIsFocused3(true);
                  }}
                  onBlur={() => setIsFocused3(false)}
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
                <TouchableOpacity
                  onPress={() => navigation.navigate("Login")}
                  style={{ alignItems: "center" }}>
                  <Text style={styles.link}>Уже есть аккаунт? Войти</Text>
                </TouchableOpacity>
              </View>
            </KeyboardAvoidingView>
          </View>
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

  content: {
    flex: -0.7,
    paddingTop: 92,
    paddingBottom: 45,
    justifyContent: "flex-start",
    backgroundColor: "#fff",
    borderTopStartRadius: 25,
    borderTopEndRadius: 25,
  },
  text: {
    color: "#00008b",
    fontSize: 40,
    fontFamily: "Roboto-Regular",
  },
  image: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "flex-end",
  },

  title: {
    color: "#000",
    fontSize: 36,
    marginBottom: 32,
    fontFamily: "Roboto-Medium",
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
    fontFamily: "Roboto-Regular",
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
    fontFamily: "Roboto-Regular",
  },
  link: {
    color: "#1B4371",
    fontSize: 16,
    fontFamily: "Roboto-Regular",
  },
});

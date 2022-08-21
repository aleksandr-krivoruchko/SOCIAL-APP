import React from "react";
import "react-native-gesture-handler";
import * as Font from "expo-font";
import { NavigationContainer } from "@react-navigation/native";
import { useRoute } from "./hooks/useRouter";
// import { AppLoading } from "expo";

const loadFonts = async () => {
  await Font.loadAsync({
    "Roboto-Regular": require("./assets/fonts/Roboto-Regular.ttf"),
    "Roboto-Medium": require("./assets/fonts/Roboto-Medium.ttf"),
    "Roboto-Bold": require("./assets/fonts/Roboto-Bold.ttf"),
  });
};

export default function App() {
  const [isAuth, setIsAuth] = React.useState(null);

  const routing = useRoute(true);
  //  const [isReady, setIsReady] = React.useState(false);
  //   if (!isReady) {
  //     return (
  //       <AppLoading startAsync={loadFonts} onFinish={() => setIsReady(true)} />
  //     );
  //   }

  React.useEffect(() => {
    loadFonts();
  }, []);

  return <NavigationContainer>{routing}</NavigationContainer>;
}

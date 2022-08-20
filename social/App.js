import React from "react";
import "react-native-gesture-handler";
import * as Font from "expo-font";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
// import { AppLoading } from "expo";
import { RegistrationScreen } from "./screens/auth/RegistrationScreen";
import { LoginScreen } from "./screens/auth/LoginScreen";
import { HomeScreen } from "./screens/main/HomeScreen";
import { CommentsScreen } from "./screens/main/CommentsScreen";
import { CreatePostsScreen } from "./screens/main/CreatePostsScreen";
import { MapScreen } from "./screens/main/MapScreen";
import { PostsScreen } from "./screens/main/PostsScreen";
import { ProfileScreen } from "./screens/main/ProfileScreen";

const AuthStack = createNativeStackNavigator();
const MainTabs = createBottomTabNavigator();

const loadFonts = async () => {
  await Font.loadAsync({
    "Roboto-Regular": require("./assets/fonts/Roboto-Regular.ttf"),
    "Roboto-Medium": require("./assets/fonts/Roboto-Medium.ttf"),
  });
};

const useRoute = (isAuth) => {
  if (isAuth) {
    return (
      <MainTabs.Navigator>
        <MainTabs.Screen name="Home" component={HomeScreen} />
        <MainTabs.Screen name="Comments" component={CommentsScreen} />
        <MainTabs.Screen name="Create" component={CreatePostsScreen} />
        <MainTabs.Screen name="Posts" component={PostsScreen} />
        <MainTabs.Screen name="Profile" component={ProfileScreen} />
        <MainTabs.Screen name="Map" component={MapScreen} />
      </MainTabs.Navigator>
    );
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

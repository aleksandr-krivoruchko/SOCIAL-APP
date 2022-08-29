import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Feather } from "react-native-vector-icons";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { PostsScreen } from "../main/PostsScreen";
import { CreatePostsScreen } from "../main/CreatePostsScreen";
import { ProfileScreen } from "../main/ProfileScreen";
import { useNavigation } from "@react-navigation/native";

const MainTabs = createBottomTabNavigator();

const tabBarPosts = {
  title: "Публикации",
  headerTitleAlign: "center",
  headerRightContainerStyle: {
    paddingRight: 16,
  },
  headerStyle: {
    backgroundColor: "#fff",
  },
  headerTintColor: "#212121",
  headerTitleStyle: {
    fontSize: 17,
    fontFamily: "Roboto-Medium",
  },
  headerRight: () => (
    <TouchableOpacity onPress={() => alert("This is a button!")}>
      <Feather name="log-out" size={24} color="#BDBDBD" />
    </TouchableOpacity>
  ),
  tabBarIcon: () => (
    <Feather name="grid" size={24} color="rgba(33, 33, 33, 0.8)" />
  ),
  tabBarHideOnKeyboard: true,
};

const tabBarCreate = {
  title: "Создать публикацию",
  headerTitleAlign: "center",
  headerLeftContainerStyle: {
    paddingLeft: 20,
  },
  headerStyle: {
    backgroundColor: "#fff",
  },
  headerTintColor: "#212121",
  headerTitleStyle: {
    fontSize: 17,
    fontFamily: "Roboto-Medium",
  },
  //   headerLeft: () => (
  //     <TouchableOpacity
  //       onPress={() => {
  //         nav.goBack();
  //       }}>
  //       <Feather name="arrow-left" size={24} color="#212121" />
  //     </TouchableOpacity>
  //   ),

  tabBarIcon: () => (
    <View
      style={{
        width: 70,
        height: 40,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#FF6C00",
        borderRadius: 20,
      }}>
      <Feather name="plus" size={24} color="#fff" />
    </View>
  ),
  tabBarHideOnKeyboard: true,
  tabBarStyle: { display: "none" },
};

const tabBarUser = {
  tabBarIcon: () => (
    <Feather name="user" size={24} color="rgba(33, 33, 33, 0.8)" />
  ),
  headerShown: false,
  tabBarHideOnKeyboard: true,
  tabBarStyle: { display: "none" },
};

export const HomeScreen = () => {
  const nav = useNavigation();

  return (
    <MainTabs.Navigator
      initialRouteName="Posts"
      screenOptions={{ tabBarShowLabel: false }}>
      <MainTabs.Screen
        name="Posts"
        component={PostsScreen}
        options={tabBarPosts}
      />
      <MainTabs.Screen
        name="Create"
        component={CreatePostsScreen}
        options={{
          ...tabBarCreate,
          headerLeft: () => (
            <TouchableOpacity
              onPress={() => {
                nav.goBack();
              }}>
              <Feather name="arrow-left" size={24} color="#212121" />
            </TouchableOpacity>
          ),
        }}
      />
      <MainTabs.Screen
        name="Profile"
        component={ProfileScreen}
        options={tabBarUser}
      />
    </MainTabs.Navigator>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});

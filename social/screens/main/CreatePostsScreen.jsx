import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Feather } from "react-native-vector-icons";
import { MapScreen } from "../main/MapScreen";

const CreateTabs = createBottomTabNavigator();

export function CreatePostsScreen() {
  return <Text>CreateScreen</Text>;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000",
    alignItems: "center",
  },
  text: {
    color: "#fff",
    fontSize: 40,
    fontFamily: "Roboto-Regular",
  },
});

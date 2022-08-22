import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { DefaultScreen } from "../nested/DefaultScreen";
import { CommentsScreen } from "../nested/CommentsScreen";
import { MapScreen } from "../nested/MapScreen";

const NestedScreen = createNativeStackNavigator();

export const PostsScreen = () => {
  return (
    <NestedScreen.Navigator initialRouteName="DefaultScreen">
      <NestedScreen.Screen
        name="DefaultScreen"
        component={DefaultScreen}
        options={{ headerShown: false }}
      />
      <NestedScreen.Screen name="Comments" component={CommentsScreen} />
      <NestedScreen.Screen name="Map" component={MapScreen} />
    </NestedScreen.Navigator>
  );
};

import React from "react";
import { StyleSheet, Text, View } from "react-native";

export function ProfileScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>ProfileScreen</Text>
    </View>
  );
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

import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import { Feather } from "react-native-vector-icons";

export function DefaultScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.wrapper}>
        <Image source={require("../../assets/images/avatar.png")} />
        <View style={styles.text}>
          <Text style={styles.name}>Natali Romanova</Text>
          <Text style={styles.email}>email@example.com</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: 16,
    marginVertical: 30,
    //  justifyContent: "center",
    //  alignItems: "center",
    //  flexDirection: "row",
    //  paddingHorizontal: 16,
    //  height: 88,
    //  paddingBottom: 11,
    //  borderBottomColor: "rgba(0, 0, 0, 0.3)",
    //  borderBottomWidth: 1,
    //  backgroundColor: "#fff",
    //  alignItems: "flex-end",
    //  justifyContent: "space-between",
  },
  wrapper: {
    flex: 0.1,
    flexDirection: "row",
    alignItems: "center",
  },
  text: {
    marginLeft: 10,
  },
  name: {
    color: "#212121",
    fontSize: 13,
    fontStyle: "normal",
    lineHeight: 15,
    fontFamily: "Roboto-Bold",
  },
  email: {
    color: "rgba(33, 33, 33, 0.8)",
    fontSize: 11,
    fontStyle: "normal",
    lineHeight: 13,
    fontFamily: "Roboto-Regular",
  },
});

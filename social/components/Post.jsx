import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  FlatList,
  SafeAreaView,
} from "react-native";
import { Feather } from "react-native-vector-icons";

export function Post({ item }) {
  const { photo, name, comments, location } = item;
  return (
    <View style={{ marginBottom: 30 }}>
      <Image source={{ uri: photo }} style={styles.image} />
      <Text style={styles.name}>{name ?? "Photo name"}</Text>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          marginHorizontal: 5,
        }}>
        <View style={{ flexDirection: "row" }}>
          <Feather name="message-circle" size={18} color="#BDBDBD" />
          <Text style={styles.comment}>{comments ?? 0}</Text>
        </View>
        <View style={{ flexDirection: "row" }}>
          <Feather name="map-pin" size={18} color="#BDBDBD" />
          <Text style={styles.location}>{location ?? "Location"}</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  image: { height: 240, borderRadius: 8 },
  name: {
    color: "#212121",
    fontSize: 16,
    fontStyle: "normal",
    lineHeight: 19,
    fontFamily: "Roboto-Medium",
    marginTop: 8,
    marginBottom: 8,
    marginLeft: 5,
  },
  location: {
    color: "#212121",
    fontSize: 16,
    fontStyle: "normal",
    lineHeight: 19,
    fontFamily: "Roboto-Medium",
    marginLeft: 6,
    textDecorationLine: "underline",
  },
  comment: {
    color: "#BDBDBD",
    fontSize: 16,
    fontStyle: "normal",
    lineHeight: 19,
    fontFamily: "Roboto-Medium",
    marginLeft: 6,
  },
});

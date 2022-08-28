import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  FlatList,
  SafeAreaView,
} from "react-native";
import { Post } from "../../components/Post";

const Item = () => (
  <View style={styles.wrapper}>
    <Image
      source={require("../../assets/images/avatar.png")}
      style={{ width: 60, height: 60 }}
    />
    <View style={styles.text}>
      <Text style={styles.name}>NAME</Text>
      <Text style={styles.email}>EMAIL</Text>
    </View>
  </View>
);

export function DefaultScreen({ route, navigation }) {
  const [posts, setPosts] = React.useState([]);
  const renderItem = ({ item }) => (
    <Post
      item={item}
      toMap={() => navigation.navigate("Map")}
      toComments={() => navigation.navigate("Comments")}
    />
  );
  console.log("route params default", route.params);

  React.useEffect(() => {
    if (route.params) {
      setPosts((prevState) => [...prevState, route.params]);
    }
  }, [route.params]);

  return (
    <View style={styles.container}>
      <Item />
      <SafeAreaView>
        <FlatList
          data={posts}
          renderItem={renderItem}
          keyExtractor={(item, idx) => idx.toString()}
        />
      </SafeAreaView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    //  backgroundColor: "#fff",
    marginHorizontal: 16,
    marginVertical: 30,
    marginBottom: 20,
  },
  wrapper: {
    height: 50,
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 30,
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

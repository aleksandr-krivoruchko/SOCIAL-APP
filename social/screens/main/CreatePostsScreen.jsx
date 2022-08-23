import React, { useState, useEffect, useRef } from "react";
import {
  Text,
  View,
  TouchableOpacity,
  StyleSheet,
  TextInput,
  TouchableHighlight,
  Image,
} from "react-native";
import { Camera } from "expo-camera";
import * as Location from "expo-location";
import * as MediaLibrary from "expo-media-library";
import { Feather } from "react-native-vector-icons";

export function CreatePostsScreen({ navigation }) {
  //   const [hasPermission, setHasPermission] = useState(null);
  const [cameraRef, setCameraRef] = useState(null);
  const [type, setType] = useState(Camera.Constants.Type.back);
  const [photo, setPhoto] = useState(null);
  const [name, setName] = useState(null);
  const [location, setLocation] = useState(null);
  //   useEffect(() => {
  //     (async () => {
  //       const { status } = await Camera.requestCameraPermissionsAsync();
  //       // await MediaLibrary.requestPermissionsAsync();
  //       console.log("status", status);
  //       setHasPermission(status === "granted");
  //     })();
  //   }, []);

  //   if (!hasPermission) {
  //     return <Text>No access to camera</Text>;
  //   }

  const onSubmit = () => {
    navigation.navigate("DefaultScreen", {
      photo,
      name,
      location,
    });
  };

  return (
    <View style={styles.container}>
      <View style={{ marginHorizontal: 16, marginTop: 30 }}>
        <Camera
          style={styles.camera}
          type={type}
          ref={(ref) => {
            setCameraRef(ref);
          }}>
          {photo && (
            <View style={styles.takePhotoContainer}>
              <Image
                source={{ uri: photo }}
                style={{ height: 200, width: 200 }}
              />
            </View>
          )}
          <View style={styles.photoView}>
            <TouchableOpacity
              style={styles.flipContainer}
              onPress={() => {
                setType(
                  type === Camera.Constants.Type.back
                    ? Camera.Constants.Type.front
                    : Camera.Constants.Type.back
                );
              }}>
              <Text style={{ fontSize: 18, marginBottom: 10, color: "white" }}>
                Flip
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.snap}
              onPress={async () => {
                if (cameraRef) {
                  const { uri } = await cameraRef.takePictureAsync({});
                  const location = await Location.getCurrentPositionAsync({});

                  console.log("loc", location);

                  setPhoto(uri);
                  setLocation(location);
                  //  await MediaLibrary.createAssetAsync(uri);
                }
              }}>
              <View style={styles.takePhotoOut}>
                <View style={styles.takePhotoInner}></View>
              </View>
            </TouchableOpacity>
          </View>
        </Camera>
        <Text style={styles.text}>Загрузите фото</Text>
        <TextInput
          style={styles.input}
          placeholder="Название..."
          onChangeText={(value) => setName(value)}
          value={name}
        />
        <TextInput
          style={styles.input}
          placeholder="Местность..."
          onChangeText={(value) => setLocation(value)}
          value={location}
        />
        <TouchableHighlight
          style={styles.button}
          activeOpacity={0.6}
          underlayColor={"#FF6C00"}
          onPress={onSubmit}>
          <Text style={styles.btnText}>Опубликовать</Text>
        </TouchableHighlight>
        <TouchableHighlight
          style={styles.button}
          activeOpacity={0.6}
          underlayColor={"#FF6C00"}
          onPress={() => console.log("delete")}>
          <Feather name="trash-2" size={24} color="#DADADA" />
        </TouchableHighlight>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  camera: {
    height: 240,
    alignItems: "center",
    justifyContent: "flex-end",
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "#E8E8E8",
    backgroundColor: "#F6F6F6",
    marginBottom: 10,
  },
  photoView: {
    flex: 1,
    backgroundColor: "transparent",
    justifyContent: "flex-end",
  },

  flipContainer: {
    flex: 0.2,
    alignSelf: "center",
  },

  snap: { alignSelf: "center" },

  takePhotoOut: {
    borderWidth: 2,
    borderColor: "white",
    height: 50,
    width: 50,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 50,
  },

  takePhotoInner: {
    borderWidth: 2,
    borderColor: "white",
    height: 40,
    width: 40,
    backgroundColor: "white",
    borderRadius: 50,
  },
  takePhotoContainer: {
    position: "absolute",
    top: 50,
    left: 10,
    borderColor: "#fff",
    borderWidth: 1,
  },
  text: {
    color: "#BDBDBD",
    fontSize: 16,
    fontFamily: "Roboto-Regular",
    marginBottom: 30,
  },
  input: {
    color: "#000",
    fontSize: 16,
    fontFamily: "Roboto-Regular",
    marginBottom: 30,
    paddingTop: 15,
    paddingBottom: 15,
    borderBottomColor: "#E8E8E8",
    borderBottomWidth: 1,
    placeholderTextColor: "#BDBDBD",
  },
  button: {
    height: 50,
    backgroundColor: "#F6F6F6",
    borderRadius: 100,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 16,
  },
  btnText: {
    color: "#BDBDBD",
    fontSize: 16,
    fontFamily: "Roboto-Regular",
  },
});

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
import { Camera, CameraType } from "expo-camera";
import * as Location from "expo-location";
import * as MediaLibrary from "expo-media-library";
import { Feather } from "react-native-vector-icons";
import Button from "../../components/Button";

export function CreatePostsScreen({ navigation }) {
  const [name, setName] = useState(null);
  const [location, setLocation] = useState(null);
  const [hasCameraPermission, setHasCameraPermission] = useState(null);
  const [image, setImage] = useState(null);
  const [type, setType] = useState(Camera.Constants.Type.back);
  const cameraRef = useRef(null);

  useEffect(() => {
    (async () => {
      const { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== "granted") {
        setErrorMsg("Permission to access location was denied");
        return;
      }
    })();
  }, []);

  useEffect(() => {
    (async () => {
      MediaLibrary.requestPermissionsAsync();
      const cameraStatus = await Camera.requestCameraPermissionsAsync();
      setHasCameraPermission(cameraStatus.status === "granted");
    })();
  }, []);

  const takePicture = async () => {
    if (cameraRef) {
      try {
        const { uri } = await cameraRef.current.takePictureAsync();
        setImage(uri);

        const location = await Location.getCurrentPositionAsync({});
        console.log(location);
        setLocation(location);
      } catch (error) {
        console.log(error);
      }
    }
  };

  const savePicture = async () => {
    if (image) {
      try {
        await MediaLibrary.createAssetAsync(image);
        alert("Picture saved! 🎉");
        setImage(null);
        console.log("saved successfully");
      } catch (error) {
        console.log(error);
      }
    }
  };

  if (!hasCameraPermission) {
    return <Text>No access to camera</Text>;
  }

  const onSubmit = () => {
    if (!image) {
      console.log("Make the photo");
      return;
    }
    navigation.navigate("DefaultScreen", {
      image,
      name,
      location,
    });
    setName(null);
    setLocation(null);
  };

  return (
    <View style={styles.container}>
      <View style={{ marginHorizontal: 16, marginTop: 10 }}>
        <View style={styles.containerCamera}>
          {!image ? (
            <Camera style={styles.camera} type={type} ref={cameraRef}>
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                  paddingHorizontal: 30,
                }}>
                <Button
                  title=""
                  icon="retweet"
                  onPress={() => {
                    setType(
                      type === CameraType.back
                        ? CameraType.front
                        : CameraType.back
                    );
                  }}
                />
              </View>
            </Camera>
          ) : (
            <Image source={{ uri: image }} style={styles.camera} />
          )}

          <View style={styles.controls}>
            {image ? (
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                  paddingHorizontal: 50,
                }}>
                <Button
                  title="Re-take"
                  onPress={() => setImage(null)}
                  icon="retweet"
                />
                <Button title="Save" onPress={savePicture} icon="check" />
              </View>
            ) : (
              <Button
                title="Take a picture"
                onPress={takePicture}
                icon="camera"
              />
            )}
          </View>
        </View>
        {/* <Text style={styles.text}>Загрузите фото</Text> */}
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
  containerCamera: {
    height: 250,
    justifyContent: "center",
    //  paddingTop: Constants.statusBarHeight,
    backgroundColor: "#000",
    //  padding: 8,
  },
  //   controls: {
  //     flex: 0.5,
  //   },
  camera: {
    flex: 1,
  },
  //   topControls: {
  //     flex: 1,
  //   },

  //   camera: {
  //     height: 200,
  //     alignItems: "center",
  //     justifyContent: "flex-end",
  //     borderRadius: 10,
  //     borderWidth: 1,
  //     borderColor: "#E8E8E8",
  //     backgroundColor: "#F6F6F6",
  //     marginBottom: 10,
  //   },
  //   photoView: {
  //     flex: 1,
  //     backgroundColor: "transparent",
  //     justifyContent: "flex-end",
  //   },

  //   flipContainer: {
  //     flex: 0.2,
  //     alignSelf: "center",
  //   },

  //   snap: { alignSelf: "center" },

  //   takePhotoOut: {
  //     borderWidth: 2,
  //     borderColor: "white",
  //     height: 50,
  //     width: 50,
  //     display: "flex",
  //     justifyContent: "center",
  //     alignItems: "center",
  //     borderRadius: 50,
  //   },

  //   takePhotoInner: {
  //     borderWidth: 2,
  //     borderColor: "white",
  //     height: 40,
  //     width: 40,
  //     backgroundColor: "white",
  //     borderRadius: 50,
  //   },
  //   takePhotoContainer: {
  //     position: "absolute",
  //     top: 50,
  //     left: 10,
  //     borderColor: "#fff",
  //     borderWidth: 1,
  //   },
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

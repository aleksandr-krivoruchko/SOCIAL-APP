// import React, { useState, useEffect, useRef } from "react";
// import { Text, View, TouchableOpacity, StyleSheet } from "react-native";
// import { Camera } from "expo-camera";
// import * as MediaLibrary from "expo-media-library";

// export function CreatePostsScreen() {
//   const [hasPermission, setHasPermission] = useState(null);
//   const [cameraRef, setCameraRef] = useState(null);
//   const [type, setType] = useState(Camera.Constants.Type.back);
//   const [photo, setPhoto] = useState(null);

//   useEffect(() => {
//     (async () => {
//       const { status } = await Camera.requestCameraPermissionsAsync();
//       await MediaLibrary.requestPermissionsAsync();

//       setHasPermission(status === "granted");
//     })();
//   }, []);

//   if (hasPermission === null) {
//     return <View />;
//   }
//   if (hasPermission === false) {
//     return <Text>No access to camera</Text>;
//   }

//   return (
//     <View style={styles.container}>
//       <Camera
//         style={styles.camera}
//         type={type}
//         ref={(ref) => {
//           setCameraRef(ref);
//         }}>
//         {photo && (
//           <View style={styles.takePhotoContainer}>
//             <Image
//               source={{ uri: photo }}
//               style={{ height: 200, width: 200 }}
//             />
//           </View>
//         )}
//         <View style={styles.photoView}>
//           <TouchableOpacity
//             style={styles.flipContainer}
//             onPress={() => {
//               setType(
//                 type === Camera.Constants.Type.back
//                   ? Camera.Constants.Type.front
//                   : Camera.Constants.Type.back
//               );
//             }}>
//             <Text style={{ fontSize: 18, marginBottom: 10, color: "white" }}>
//               Flip
//             </Text>
//           </TouchableOpacity>
//           <TouchableOpacity
//             style={styles.button}
//             onPress={async () => {
//               if (cameraRef) {
//                 const { uri } = await cameraRef.takePictureAsync();
//                 console.log(uri);
//                 setPhoto(photo.uri);
//                 await MediaLibrary.createAssetAsync(uri);
//               }
//             }}>
//             <View style={styles.takePhotoOut}>
//               <View style={styles.takePhotoInner}></View>
//             </View>
//           </TouchableOpacity>
//         </View>
//       </Camera>
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: { flex: 1 },
//   camera: { flex: 1 },
//   photoView: {
//     flex: 1,
//     backgroundColor: "transparent",
//     justifyContent: "flex-end",
//   },

//   flipContainer: {
//     flex: 0.1,
//     alignSelf: "flex-end",
//   },

//   button: { alignSelf: "center" },

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
// });
import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  TextInput,
  TouchableHighlight,
} from "react-native";
import { Camera } from "expo-camera";
import { TouchableOpacity } from "react-native-gesture-handler";
import { Feather } from "react-native-vector-icons";

export const CreatePostsScreen = () => {
  const [camera, setCamera] = useState(null);
  const [photo, setPhoto] = useState(null);

  const takePhoto = async () => {
    const photo = await camera.takePictureAsync();
    setPhoto(photo.uri);
    console.log("photo", photo);
  };

  const onSubmit = () => {
    console.log("qqqqqqqq");
  };
  return (
    <View style={styles.container}>
      <View style={{ marginHorizontal: 16, marginTop: 30 }}>
        <Camera style={styles.camera} ref={setCamera}>
          {photo && (
            <View style={styles.takePhotoContainer}>
              <Image
                source={{ uri: photo }}
                style={{ height: 200, width: 200 }}
              />
            </View>
          )}
          <TouchableOpacity onPress={takePhoto} style={styles.snapContainer}>
            <Text style={styles.snap}>SNAP</Text>
          </TouchableOpacity>
        </Camera>
        <Text style={styles.text}>Загрузите фото</Text>
        <TextInput style={styles.input} placeholder="Название..." />
        <TextInput style={styles.input} placeholder="Местность..." />
        <TouchableHighlight
          style={styles.button}
          activeOpacity={0.6}
          underlayColor={"#FF6C00"}
          onPress={onSubmit}>
          <Text style={styles.btnText}>Опубликовать</Text>
        </TouchableHighlight>
      </View>
    </View>
  );
};

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
  snap: {
    color: "#fff",
  },
  snapContainer: {
    borderWidth: 1,
    borderColor: "#ff0000",
    width: 70,
    height: 70,
    borderRadius: 50,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 20,
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

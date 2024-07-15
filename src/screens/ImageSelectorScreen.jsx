import { StyleSheet, Text, View, Image, Pressable } from "react-native";
import React, { useState } from "react";
import * as ImagePicker from "expo-image-picker";
import Theme from "../theme/Theme";
import { useDispatch, useSelector } from "react-redux";
import { setImage } from "../features/ImageSlice";

export default function ImageSelectorScreen({ navigation }) {
  // const [image, setImage] = useState(null);
  const image = useSelector((state) => state.image.image);
  const dispatch = useDispatch();
  const verifyCameraPermissions = async () => {
    const { status } = await ImagePicker.requestCameraPermissionsAsync();
    if (status !== "granted") {
      return false;
    }
    return true;
  };
  const pickImage = async (imageSource = "camera") => {
    const isCameraOk = await verifyCameraPermissions();
    if (isCameraOk) {
      let result;
      if (imageSource === "camera") {
        result = await ImagePicker.launchCameraAsync({
          mediaTypes: ImagePicker.MediaTypeOptions.Images,
          allowsEditing: true,
          aspect: [1, 1],
          base64: true,
          quality: 0.2,
        });
      }
      if (imageSource === "library") {
        result = await ImagePicker.launchImageLibraryAsync({
          mediaTypes: ImagePicker.MediaTypeOptions.Images,
          allowsEditing: true,
          aspect: [1, 1],
          base64: true,
          quality: 0.2,
        });
      }

      if (!result.canceled && result.assets && result.assets.length > 0) {
        // setImage(`data:image/jpeg;base64,${result.assets[0].base64}`);
        dispatch(
          setImage({
            image: `data:image/jpeg;base64,${result.assets[0].base64}`,
          })
        );
      }
    }
  };

  const confirmImage = async () => {
    navigation.goBack();
  };
  return (
    <View style={styles.container}>
      {!image ? (
        <View>
          <Image
            resizeMode="contain"
            style={styles.avatar}
            source={require("../../assets/images/user.png")}
          />
          <View style={{ marginVertical: 20 }}>
            <Pressable onPress={() => pickImage("camera")} style={styles.btn}>
              <Text style={styles.btnText}>Tomar Foto</Text>
            </Pressable>
            <Pressable onPress={() => pickImage("library")} style={styles.btn}>
              <Text style={styles.btnText}>Seleccionar de la Galería</Text>
            </Pressable>
          </View>
        </View>
      ) : (
        <View>
          <Image
            resizeMode="contain"
            style={styles.avatar}
            source={{ uri: image }}
          />
          <View style={{ marginVertical: 20 }}>
            <Pressable onPress={() => pickImage("camera")} style={styles.btn}>
              <Text style={styles.btnText}>Tomar Foto</Text>
            </Pressable>
            <Pressable onPress={() => pickImage("library")} style={styles.btn}>
              <Text style={styles.btnText}>Seleccionar de la Galería</Text>
            </Pressable>
          </View>
          <Pressable
            onPress={confirmImage}
            style={{ ...styles.btn, backgroundColor: Theme.colors.success }}
          >
            <Text style={styles.btnText}>Confirmar Foto</Text>
          </Pressable>
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  btn: {
    backgroundColor: Theme.colors.primary,
    padding: 10,
    borderRadius: 10,
    marginTop: 10, // Añadido para separar los botones
  },
  btnText: {
    color: "white",
    textAlign: "center",
    textTransform: "uppercase",
  },
  avatar: {
    width: 100,
    height: 100,
    borderRadius: 50,
    alignSelf: "center",
  },
});

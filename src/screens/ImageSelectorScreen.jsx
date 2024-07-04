import { StyleSheet, Text, View, Image, Pressable } from "react-native";
import React, { useState } from "react";
import * as ImagePicker from "expo-image-picker";
import Theme from "../theme/Theme";

export default function ImageSelectorScreen() {
  const [image, setImage] = useState(null);
  const verifyCameraPermissions = async () => {
    const { status } = await ImagePicker.requestCameraPermissionsAsync();
    if (status !== "granted") {
      return false;
    }
    return true;
  };
  const pickImage = async () => {
    const isCameraOk = await verifyCameraPermissions();
    if (isCameraOk) {
      // launchLibraryAsync;
      let result = await ImagePicker.launchCameraAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        allowsEditing: true,
        aspect: [1, 1],
        base64: true,
        quality: 0.2,
      });
      if (!result.canceled && result.assets && result.assets.length > 0) {
        setImage(`data:image/jpeg;base64,${result.assets[0].base64}`);
      }
    }
  };

  const confirmImage = async () => {};
  return (
    <View style={styles.container}>
      {!image ? (
        <View>
          <Image
            resizeMode="contain"
            style={{ width: 200, height: 200 }}
            source={require("../../assets/images/user.png")}
          />
          <Pressable onPress={pickImage} style={styles.btn}>
            <Text style={styles.btnText}>Tomar Foto</Text>
          </Pressable>
        </View>
      ) : (
        <View>
          <Image
            resizeMode="contain"
            style={{ width: 200, height: 200 }}
            source={{ uri: image }}
          />
          <Pressable onPress={pickImage} style={styles.btn}>
            <Text style={styles.btnText}>Tomar Foto</Text>
          </Pressable>
          <Pressable onPress={confirmImage} style={styles.btn}>
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
});

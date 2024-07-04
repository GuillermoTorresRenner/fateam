import { StyleSheet, Text, View, Pressable } from "react-native";
import { FontAwesome6 } from "@expo/vector-icons";
import { useState } from "react";

import React from "react";

const MyProfileScreen = ({ navigation }) => {
  const [img, setImg] = useState(null);
  return (
    <View>
      {img ? (
        <Text>Imagen user</Text>
      ) : (
        <Pressable
          style={{ alignSelf: "center", marginTop: 20 }}
          onPress={() => navigation.navigate("ImageSelectorScreen")}
        >
          <FontAwesome6 name="circle-user" size={60} color="black" />
        </Pressable>
      )}
      <Text>MyProfileScreen</Text>
    </View>
  );
};

export default MyProfileScreen;

const styles = StyleSheet.create({});

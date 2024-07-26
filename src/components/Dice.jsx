import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { FontAwesome6 } from "@expo/vector-icons";
import Theme from "../theme/Theme";

export default function Dice({ dice }) {
  return (
    <View
      style={{
        ...styles.dice,
        backgroundColor:
          dice === 1
            ? Theme.colors.danger
            : dice === 2
            ? Theme.colors.danger
            : dice === 3
            ? Theme.colors.warning
            : dice === 4
            ? Theme.colors.warning
            : dice === 5
            ? Theme.colors.success
            : Theme.colors.success,
      }}
    >
      <FontAwesome6
        name={
          dice === 1
            ? "minus"
            : dice === 2
            ? "minus"
            : dice === 3
            ? "circle"
            : dice === 4
            ? "circle"
            : dice === 5
            ? "add"
            : "add"
        }
        size={20}
        color="black"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  dice: {
    width: 60,
    height: 60,

    alignItems: "center",
    justifyContent: "center",
    padding: 10,
    borderWidth: 1,
    borderRadius: 10,
  },
});

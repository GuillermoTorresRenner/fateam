import { StyleSheet, Text, View } from "react-native";
import React from "react";
import Theme from "../theme/Theme";

export default function BoxedTitle({ title }) {
  return (
    <View style={styles.box}>
      <Text style={styles.text}>{title}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  box: {
    backgroundColor: Theme.colors.dark,
    padding: 10,
    margin: 10,
    borderRadius: 6,
  },
  text: {
    color: Theme.colors.white,
    fontSize: Theme.fontSizes.sm,
    fontWeight: "bold",
    textTransform: "uppercase",
  },
});

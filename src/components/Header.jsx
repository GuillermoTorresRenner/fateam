import { StyleSheet, Text, View } from "react-native";
import React from "react";
import Theme from "../theme/Theme";

export default Header = ({ title }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: 70,
    backgroundColor: Theme.colors.secondary,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    color: Theme.colors.white,
    fontSize: Theme.fontSizes.md,
  },
});

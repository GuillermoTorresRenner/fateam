import { StyleSheet, Text, View } from "react-native";
import React from "react";
import Theme from "../theme/Theme";

export default function ResultCard({ result, accion }) {
  return (
    <View style={styles.container}>
      <Text>{result}</Text>
      <Text>{accion}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 10,
    width: "95%",
    alignSelf: "center",
    marginVertical: 10,
    borderRadius: 10,
    backgroundColor: Theme.colors.tertiary,
  },
});

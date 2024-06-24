import { StyleSheet, Text, View } from "react-native";
import React from "react";
import Theme from "../theme/Theme";

export default function TextCharacterProfile({
  attibute,
  value,
  backgroundColor,
}) {
  return (
    <View style={{ ...styles.container, backgroundColor }}>
      <Text style={styles.attibute}>{attibute} </Text>
      <Text style={styles.value}>{value}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: " flex-start",
    alignItems: "center",
    padding: 10,
    margin: 10,
    borderRadius: 20,
  },
  attibute: {
    fontWeight: "bold",
    paddingLeft: 10,
    textTransform: "uppercase",
    color: Theme.colors.white,
    borderBottomWidth: 2,
    width: "100%",
    textAlign: "center",
    paddingBottom: 5,
    borderBottomColor: Theme.colors.white,
  },
  value: {
    paddingRight: 10,
    color: Theme.colors.light,
    textAlign: "center",
    paddingVertical: 10,
  },
});

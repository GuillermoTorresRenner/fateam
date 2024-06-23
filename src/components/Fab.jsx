import { StyleSheet, TouchableOpacity } from "react-native";
import theme from "../theme/Theme";
import React from "react";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";

export default function Fab({ navigation, goto }) {
  return (
    <TouchableOpacity
      style={styles.fab}
      onPress={() => navigation.navigate(goto)}
    >
      <Icon name="plus" color="white" size={20} />
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  fab: {
    position: "absolute",
    margin: 16,
    right: 0,
    bottom: 0,
    backgroundColor: theme.colors.primary,
    borderRadius: 30,
    padding: 15,
    alignItems: "center",
    justifyContent: "center",
    elevation: 8,
  },
});

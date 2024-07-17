import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { useSelector } from "react-redux";

export default function DicesScreen() {
  const character = useSelector((state) => state.character.character);
  return (
    <View>
      <Text>{character.nombre}</Text>
    </View>
  );
}

const styles = StyleSheet.create({});

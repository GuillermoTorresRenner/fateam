import { StyleSheet, Text, View } from "react-native";
import React from "react";

export default function RollDiceScreen({ navigation, route }) {
  console.log(route.params);
  const {
    action,
    style,
    help,
    advantage,
    impulse,
    proeza,
    ptoFate,
    dificulty,
    disadvantage,
    otherPenalties,
    consecuences,
  } = route.params;

  return (
    <View>
      <Text>{action}</Text>
    </View>
  );
}

const styles = StyleSheet.create({});

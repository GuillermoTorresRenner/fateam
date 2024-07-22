import { StyleSheet, Text, View } from "react-native";
import React from "react";
import Fab from "../components/Fab";

export default function NotesScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text>NotesScreen</Text>
      <Fab goto={"CreateNoteScreen"} navigation={navigation} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

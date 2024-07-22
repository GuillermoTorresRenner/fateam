import { StyleSheet, Text, View, FlatList } from "react-native";
import React from "react";
import Fab from "../components/Fab";
import { useSelector } from "react-redux";
import Theme from "../theme/Theme";
import NotesCard from "../components/NotesCard";
export default function NotesScreen({ navigation }) {
  const { notas } = useSelector((state) => state.character.character);

  return (
    <View style={styles.container}>
      {notas ? (
        <FlatList
          data={notas}
          renderItem={({ item }) => (
            <NotesCard note={item} navigation={navigation} />
          )}
        />
      ) : (
        <Text style={styles.text}>Todavía nos has creados notas</Text>
      )}

      <Fab goto={"CreateNoteScreen"} navigation={navigation} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  text: {
    marginVertical: "50%",
    fontSize: Theme.fontSizes.lg,
    fontWeight: "bold",
    textAlign: "center",
  },
});

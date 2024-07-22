import { Pressable, StyleSheet, Text, View } from "react-native";
import React from "react";
import moment from "moment";
import Theme from "../theme/Theme";

export default function NotesCard({ note, navigation }) {
  return (
    <Pressable
      onPress={() => {
        navigation.navigate("EditNoteScreen", { note });
      }}
      style={({ pressed }) => ({
        ...styles.card,
        opacity: pressed ? 0.5 : 1,
      })}
    >
      <Text style={styles.title}>{note.title}</Text>
      <Text style={styles.note}>{note.note}</Text>
      <Text style={styles.createdAt}>
        Nota creada el {moment(note.createdAt).format("DD/MM/YYYY")} a las{" "}
        {moment(note.createdAt).format("HH:mm")}
      </Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  card: {
    padding: 20,
    margin: 10,
    backgroundColor: Theme.colors.white,
    borderRadius: 10,
    shadowColor: "black",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.26,
    shadowRadius: 8,
    elevation: 5,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
    color: Theme.colors.tertiary,
  },
  note: {
    fontSize: Theme.fontSizes.xs,
    marginVertical: 10,
  },
  createdAt: {
    fontSize: Theme.fontSizes.sm,
    color: Theme.colors.light,
    textAlign: "right",
  },
});

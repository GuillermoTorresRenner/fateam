import { StyleSheet, Text, View, Alert } from "react-native";
import React from "react";
import BoxedTitle from "../components/BoxedTitle";
import IconedButton from "../components/IconedButton";
import { Formik } from "formik";
import Input from "../components/Input";
import { useUpdateCharacterMutation } from "../services/characterServices";
import { useDispatch, useSelector } from "react-redux";
import { setCharacter } from "../features/CharacterSlice";

export default function EditNoteScreen({ navigation, route }) {
  const [trigger] = useUpdateCharacterMutation();
  const character = useSelector((state) => state.character.character);
  const dispatch = useDispatch();
  const { title, note } = route.params.note;
  const showAlert = () =>
    Alert.alert(
      "¿Eliminar Nota?",
      `¿Estás seguro de que deseas eliminar la nota ${title}?`,
      [
        {
          text: "Cancelar",
          style: "cancel",
        },
        {
          style: "destructive",
          text: "Eliminar",
          onPress: deleteNote,
        },
      ]
    );
  const handleSubmit = (values) => {
    const EditedNote = { ...values, createdAt: new Date().toISOString() };
    const newNotes = character.notas.filter((nota) => nota.title !== title);
    newNotes.push(EditedNote);
    dispatch(setCharacter({ ...character, notas: newNotes }));
    trigger({ ...character, notas: newNotes });
    navigation.goBack();
  };

  const deleteNote = () => {
    const newNotes = character.notas.filter((nota) => nota.title !== title);
    dispatch(setCharacter({ ...character, notas: newNotes }));
    trigger({ ...character, notas: newNotes });
    navigation.goBack();
  };

  return (
    <View>
      <Formik
        initialValues={{
          title,
          note,
        }}
        onSubmit={handleSubmit}
      >
        {(formikProps) => (
          <View>
            <BoxedTitle title="título" />
            <Input
              formikProps={formikProps}
              inputName={"title"}
              placeholder={"Título de la nota"}
            />
            <BoxedTitle title="Nota" />
            <Input
              formikProps={formikProps}
              inputName={"note"}
              placeholder={"Nota"}
              multiline={true}
            />

            <View
              style={{
                flexDirection: "row",
                justifyContent: "center",
                marginTop: "40%",
              }}
            >
              <IconedButton type={"save"} onPress={formikProps.handleSubmit} />
              <IconedButton type={"delete"} onPress={showAlert} />
            </View>
          </View>
        )}
      </Formik>
    </View>
  );
}

const styles = StyleSheet.create({});

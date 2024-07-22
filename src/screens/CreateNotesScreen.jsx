import { StyleSheet, Text, View } from "react-native";
import React from "react";
import BoxedTitle from "../components/BoxedTitle";
import IconedButton from "../components/IconedButton";
import { Formik } from "formik";
import Input from "../components/Input";
import { useUpdateCharacterMutation } from "../services/characterServices";
import { useDispatch, useSelector } from "react-redux";
import { setCharacter } from "../features/CharacterSlice";

export default function CreateNotes({ navigation }) {
  const [trigger] = useUpdateCharacterMutation();
  const character = useSelector((state) => state.character.character);
  const dispatch = useDispatch();

  const handleSubmit = (values) => {
    const newNote = { ...values, createdAt: new Date().toISOString() };
    dispatch(
      setCharacter({
        ...character,
        notas: character.notas ? [...character.notas, newNote] : [newNote],
      })
    );
    trigger({
      ...character,
      notas: character.notas ? [...character.notas, newNote] : [newNote],
    });
    navigation.goBack();
  };

  return (
    <View>
      <Formik
        initialValues={{
          title: "",
          note: "",
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

            <IconedButton type={"save"} onPress={formikProps.handleSubmit} />
          </View>
        )}
      </Formik>
    </View>
  );
}

const styles = StyleSheet.create({});

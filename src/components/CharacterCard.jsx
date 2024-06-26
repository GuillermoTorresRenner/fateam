import { StyleSheet, Text, View, Image, Pressable } from "react-native";
import React from "react";
import Theme from "../theme/Theme";
import StylesChip from "./StylesChip";
//importaciones para el store
import { setCharacter } from "../features/CharacterSlice";
import { useDispatch, useSelector } from "react-redux";

export default function CharacterCard({ character, navigation, route }) {
  //constante para poder llamar a las funciones del store
  const dispatch = useDispatch();

  const handleCharacter = () => {
    //Llamamos a la función del store para setear el personaje seleccionado
    dispatch(setCharacter(character));
    navigation.navigate("CharacterDetailScreen", character);
  };

  /*Eventualmente cuando tenga conexión a la base de datos la manera de poder navegar será enviando
     el ID del personaje para ser buscado en la pantalla de detalle mediante otro llamado a la Api*/
  return (
    <Pressable onPress={handleCharacter}>
      <View style={styles.card}>
        <Image source={{ uri: character.avatar }} style={styles.avatar} />
        <Text style={styles.title}>{character.nombre}</Text>
        <Text style={styles.description}>{character.descripcion}</Text>
        <View style={styles.stylesBar}>
          <StylesChip attribute="cauto" value={character.cauto} />
          <StylesChip attribute="furtivo" value={character.furtivo} />
          <StylesChip attribute="ingenioso" value={character.ingenioso} />
          <StylesChip attribute="llamativo" value={character.llamativo} />
          <StylesChip attribute="rapido" value={character.rapido} />
          <StylesChip attribute="vigoroso" value={character.vigoroso} />
        </View>
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: Theme.colors.white,
    padding: 20,
    marginVertical: 10,
    marginHorizontal: 20,
    borderRadius: 12,
    shadowColor: Theme.colors.black,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    color: Theme.colors.primary,
    marginBottom: 8,
  },
  avatar: {
    width: 100,
    height: 100,
    borderRadius: 50,
    alignSelf: "center",
    objectFit: "contain",
  },

  stylesBar: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginVertical: 5,
    backgroundColor: "#E9E9E9",
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderRadius: 8,
    marginVertical: 10,
  },
});

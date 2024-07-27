import { StyleSheet, Text, View, Image, Pressable } from "react-native";
import React from "react";
import Theme from "../theme/Theme";
import StylesChip from "./StylesChip";
import defaulImage from "../../assets/images/user.png";
import { useDispatch } from "react-redux";
import { setCharacter } from "../features/CharacterSlice";

export default function CharacterCard({ character, navigation }) {
  const dispatch = useDispatch();
  const handleCharacter = () => {
    //guardar personaje en store
    dispatch(setCharacter(character));
    navigation.navigate("playScreen");
  };

  return (
    <Pressable onPress={handleCharacter}>
      <View style={styles.card}>
        {character.avatar === "" || character.avatar === undefined ? (
          <Image source={defaulImage} style={styles.avatar} />
        ) : (
          <Image source={{ uri: character.avatar }} style={styles.avatar} />
        )}
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

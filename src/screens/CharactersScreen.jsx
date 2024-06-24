import { StyleSheet, View, FlatList } from "react-native";
import React from "react";
import Fab from "../components/Fab";
import CharacterCard from "../components/CharacterCard";
import mock from "../utils/mock";

const CharactersScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <FlatList
        data={mock}
        keyExtractor={(char) => char.nombre}
        renderItem={({ item }) => (
          <CharacterCard character={item} navigation={navigation} />
        )}
      />
      <Fab goto={"Crear Personaje"} navigation={navigation} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scrollView: {
    flex: 1,
  },
});

export default CharactersScreen;

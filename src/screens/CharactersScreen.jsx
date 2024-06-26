import { StyleSheet, View, FlatList } from "react-native";
import React from "react";
import Fab from "../components/Fab";
import CharacterCard from "../components/CharacterCard";
import { useGetCharactersQuery } from "../services/characterServices";

const CharactersScreen = ({ navigation }) => {
  //Implementación de RTK Query
  const { data } = useGetCharactersQuery();
  return (
    <View style={styles.container}>
      <FlatList
        data={data}
        keyExtractor={(char) => char.nombre}
        renderItem={({ item }) => (
          <CharacterCard character={item} navigation={navigation} />
        )}
      />
      <Fab goto={"CreateCharacterScreen"} navigation={navigation} />
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

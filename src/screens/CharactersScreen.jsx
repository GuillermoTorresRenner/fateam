import { StyleSheet, View, FlatList, Text } from "react-native";
import React, { useEffect } from "react";
import Fab from "../components/Fab";
import CharacterCard from "../components/CharacterCard";
import { useGetCharactersByUserIdQuery } from "../services/characterServices";
import { useSelector } from "react-redux";
import Theme from "../theme/Theme";

const CharactersScreen = ({ navigation }) => {
  const ownerId = useSelector((state) => state.user.value.userId);
  // Implementación de RTK Query
  const { data, isError, isLoading } = useGetCharactersByUserIdQuery(ownerId);

  // Manejar la carga y los errores
  if (isLoading) return <Text style={styles.text}>Cargando personajes...</Text>;
  if (isError || !data)
    return <Text>Error al cargar los personajes o no existen personajes.</Text>;

  return (
    <View style={styles.container}>
      <FlatList
        data={data}
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
  text: {
    textAlign: "center",
    fontSize: Theme.fontSizes.md,
    marginTop: "25%",
    color: Theme.colors.tertiary,
    fontWeight: "bold",
  },
});

export default CharactersScreen;

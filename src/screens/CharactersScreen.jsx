import {
  StyleSheet,
  View,
  FlatList,
  Text,
  ActivityIndicator,
} from "react-native";
import Fab from "../components/Fab";
import CharacterCard from "../components/CharacterCard";
import { useGetCharactersByUserIdQuery } from "../services/characterServices";
import { useSelector } from "react-redux";
import Theme from "../theme/Theme";

const CharactersScreen = ({ navigation }) => {
  const ownerId = useSelector((state) => state.user.value.userId);
  const { data, isError, isLoading } = useGetCharactersByUserIdQuery(ownerId);

  const renderCharacter = ({ item }) => (
    <CharacterCard character={item} navigation={navigation} />
  );

  if (isLoading) {
    return (
      <View style={styles.centered}>
        <Text style={{ marginBottom: 30, fontSize: Theme.fontSizes.lg }}>
          Cargando personajes
        </Text>
        <ActivityIndicator size="large" color={Theme.colors.primary} />
      </View>
    );
  }

  if (isError || !data) {
    return (
      <View style={styles.centered}>
        <Text style={styles.text}>
          Error al cargar los personajes o no existen personajes.
        </Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <FlatList
        data={data}
        renderItem={renderCharacter}
        keyExtractor={(item) => item.nombre} // Asumiendo que cada `character` tiene un `id` único.
      />
      <Fab goto={"CreateCharacterScreen"} navigation={navigation} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  centered: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    textAlign: "center",
    fontSize: Theme.fontSizes.md,
    color: Theme.colors.tertiary,
    fontWeight: "bold",
  },
});

export default CharactersScreen;

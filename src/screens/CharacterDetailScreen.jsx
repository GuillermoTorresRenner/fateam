import { ScrollView, View, StyleSheet, Text, Image, Alert } from "react-native";

import BoxedTitle from "../components/BoxedTitle";
import IconedButton from "../components/IconedButton";
import TextCharacterProfile from "../components/TextCharacterProfile";
import StylesChip from "../components/StylesChip";
import Theme from "../theme/Theme";
import defaultImage from "../../assets/images/user.png";
import { useSelector } from "react-redux";
import { useDeleteChararacterMutation } from "../services/characterServices";
export default function CharacterDetailScreen({ navigation, route }) {
  const character = useSelector((state) => state.character.character);
  const [triggerDeleteCharacter] = useDeleteChararacterMutation();
  const showAlert = () =>
    Alert.alert(
      "¿Eliminar Personaje?",
      `¿Estás seguro de que deseas eliminar a ${character.nombre}?`,
      [
        {
          text: "Cancelar",
          style: "cancel",
        },
        {
          style: "destructive",
          text: "Eliminar",
          onPress: deleteCharacter,
        },
      ]
    );

  const deleteCharacter = () => {
    triggerDeleteCharacter(character.id);
    navigation.navigate("CharactersScreen");
  };
  return (
    <ScrollView>
      {character.avatar === "" ? (
        <Image source={defaultImage} style={styles.avatar} />
      ) : (
        <Image source={{ uri: character.avatar }} style={styles.avatar} />
      )}
      {/* IDENTIDAD */}
      <BoxedTitle title="Identidad" />
      <TextCharacterProfile
        attibute="Nombre"
        value={character.nombre}
        backgroundColor={Theme.colors.tertiary}
      />
      <TextCharacterProfile
        attibute="Descripción"
        value={character.descripcion}
        backgroundColor={Theme.colors.tertiary}
      />

      {/* ASPECTOS */}
      <BoxedTitle title="Aspectos" />
      <TextCharacterProfile
        attibute="Aspecto Principal"
        value={character.aspectoPrincipal}
        backgroundColor={Theme.colors.tertiary}
      />
      <TextCharacterProfile
        attibute="Complicación"
        value={character.complicacion}
        backgroundColor={Theme.colors.tertiary}
      />
      <TextCharacterProfile
        attibute="Aspecto"
        value={character.aspecto1}
        backgroundColor={Theme.colors.tertiary}
      />
      <TextCharacterProfile
        attibute="Aspecto"
        value={character.aspecto2}
        backgroundColor={Theme.colors.tertiary}
      />
      <TextCharacterProfile
        attibute="Aspecto"
        value={character.aspecto3}
        backgroundColor={Theme.colors.tertiary}
      />

      {/* ESTILOS */}
      <BoxedTitle title="Estilos" />
      <View style={styles.characterStyles}>
        <View style={styles.styleContainer}>
          <StylesChip attribute="cauto" value={character.cauto} />
          <Text style={styles.styleText}>cauto</Text>
        </View>
        <View style={styles.styleContainer}>
          <StylesChip attribute="furtivo" value={character.furtivo} />
          <Text style={styles.styleText}>Furtivo</Text>
        </View>
        <View style={styles.styleContainer}>
          <StylesChip attribute="ingenioso" value={character.ingenioso} />
          <Text style={styles.styleText}>Ingenioso</Text>
        </View>
        <View style={styles.styleContainer}>
          <StylesChip attribute="llamativo" value={character.llamativo} />
          <Text style={styles.styleText}>Llamativo</Text>
        </View>
        <View style={styles.styleContainer}>
          <StylesChip attribute="rapido" value={character.rapido} />
          <Text style={styles.styleText}>Rápido</Text>
        </View>
        <View style={styles.styleContainer}>
          <StylesChip attribute="vigoroso" value={character.vigoroso} />
          <Text style={styles.styleText}>Vigoroso</Text>
        </View>
      </View>

      {/* PROEZAS */}
      <BoxedTitle title="Proezas" />
      <TextCharacterProfile
        attibute="Proeza"
        value={character.proeza1}
        backgroundColor={Theme.colors.tertiary}
      />
      <TextCharacterProfile
        attibute="Proeza"
        value={character.proeza2}
        backgroundColor={Theme.colors.tertiary}
      />
      <TextCharacterProfile
        attibute="Proeza"
        value={character.proeza3}
        backgroundColor={Theme.colors.tertiary}
      />
      <TextCharacterProfile
        attibute="Proeza"
        value={character.proeza4}
        backgroundColor={Theme.colors.tertiary}
      />
      <TextCharacterProfile
        attibute="Proeza"
        value={character.proeza5}
        backgroundColor={Theme.colors.tertiary}
      />

      <View style={styles.buttons}>
        <IconedButton
          onPress={() => navigation.navigate("EditCharacterScreen")}
          type="edit"
        />
        <IconedButton onPress={showAlert} type="delete" />
      </View>
    </ScrollView>
  );
}
const styles = StyleSheet.create({
  characterStyles: {
    flexDirection: "row",
    justifyContent: "space-around",
    paddingHorizontal: 10,
  },
  styleContainer: {
    alignItems: "center",
  },
  styleText: {
    color: Theme.colors.tertiary,
    fontWeight: "bold",
    fontSize: 9,
  },
  avatar: {
    width: 100,
    height: 100,
    alignSelf: "center",
    borderRadius: 50,
    marginVertical: 10,
    objectFit: "contain",
  },
  buttons: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginVertical: 10,
  },
});

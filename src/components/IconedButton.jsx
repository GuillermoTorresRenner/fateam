import { StyleSheet, Text, Pressable } from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import Theme from "../theme/Theme";

export default function IconedButton({ onPress, type }) {
  return (
    <Pressable
      onPress={onPress}
      style={{
        ...styles.btn,
        backgroundColor:
          type === "save"
            ? Theme.colors.success
            : type === "edit"
            ? Theme.colors.warning
            : Theme.colors.danger,
      }}
    >
      <>
        {type === "save" ? (
          <FontAwesome name="save" size={24} color={Theme.colors.white} />
        ) : type === "edit" ? (
          <FontAwesome name="edit" size={24} color={Theme.colors.white} />
        ) : (
          <FontAwesome name="trash" size={24} color={Theme.colors.white} />
        )}
      </>
      <Text style={styles.text}>
        {type === "save" ? "Guardar" : type === "edit" ? "Editar" : "Borrar"}
      </Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  btn: {
    flexDirection: "row",
    justifyContent: "center",
    gap: 10,
    padding: 10,
    borderRadius: 5,
    margin: 10,
  },
  text: {
    color: Theme.colors.white,
    textTransform: "uppercase",
  },
});

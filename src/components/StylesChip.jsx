import { StyleSheet, Text, View, Image } from "react-native";
import React from "react";
import cauto from "../../assets/images/cauto.png";
import furtivo from "../../assets/images/furtivo.png";
import llamativo from "../../assets/images/llamativo.png";
import ingenioso from "../../assets/images/ingenioso.png";
import rapido from "../../assets/images/rapido.png";
import vigoroso from "../../assets/images/vigoroso.png";

export default function StylesChip({ attribute, value }) {
  return (
    <View style={styles.attribute}>
      <Image
        resizeMode="contain"
        source={
          attribute === "cauto"
            ? cauto
            : attribute === "furtivo"
            ? furtivo
            : attribute === "llamativo"
            ? llamativo
            : attribute === "ingenioso"
            ? ingenioso
            : attribute === "rapido"
            ? rapido
            : vigoroso
        }
        style={styles.icon}
      />
      <Text>{value}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  icon: {
    width: 20,
    height: 20,
    alignSelf: "center",
  },
  attribute: {
    width: 40,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 40,
    borderColor: Theme.colors.tertiary,
    borderWidth: 2,
  },
});

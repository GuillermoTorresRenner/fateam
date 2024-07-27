import { StyleSheet, Text, View, Image, Pressable } from "react-native";
import React from "react";
import cauto from "../../assets/images/cauto.png";
import furtivo from "../../assets/images/furtivo.png";
import ingenioso from "../../assets/images/ingenioso.png";
import llamativo from "../../assets/images/llamativo.png";
import rapido from "../../assets/images/rapido.png";
import vigoroso from "../../assets/images/vigoroso.png";
import Theme from "../theme/Theme";

export default function StylesCards({ style, setStyle }) {
  const selectAcion = (selected) => {
    setStyle(selected);
  };
  const descriocionCauto =
    "Realizarás una acción con cautela, evitando riesgos innecesarios y asegurándote de que todo salga bien.";
  const descriocionFurtivo =
    "Realizarás una acción con sigilo y discreción, evitando ser detectado y pasando desapercibido.";
  const descriocionIngenioso =
    "Realizarás una acción con astucia e inteligencia, usando tu razonamiento e intuición.";
  const descriocionLlamativo =
    "Realizarás una acción con estilo y elegancia, llamando la atención y dejando una impresión duradera.";
  const descriocionRapido =
    "Realizarás una acción con rapidez y agilidad, moviéndote con destreza y eficacia. ";
  const descriocionVigoroso =
    "Realizarás una acción con fuerza y determinación, demostrando tu valentía y tu coraje.";
  return (
    <View>
      <View style={styles.container}>
        <Pressable
          onPress={() => selectAcion("cauto")}
          style={({ pressed }) => ({
            opacity: pressed ? 0.5 : 1,
            ...styles.card,
            backgroundColor:
              style === "cauto" ? Theme.colors.primary : Theme.colors.white,
          })}
        >
          <Image
            tintColor={"black"}
            resizeMode="contain"
            source={cauto}
            style={{
              width: 30,
              height: 30,
              alignSelf: "center",
            }}
          />
          <Text style={styles.text}>Cauto</Text>
        </Pressable>
        <Pressable
          onPress={() => selectAcion("furtivo")}
          style={({ pressed }) => ({
            opacity: pressed ? 0.5 : 1,
            ...styles.card,
            backgroundColor:
              style === "furtivo" ? Theme.colors.primary : Theme.colors.white,
          })}
        >
          <Image
            tintColor={"black"}
            source={furtivo}
            resizeMode="contain"
            style={{
              width: 30,
              height: 30,
              alignSelf: "center",
            }}
          />
          <Text style={styles.text}>Furtivo</Text>
        </Pressable>
        <Pressable
          onPress={() => selectAcion("ingenioso")}
          style={({ pressed }) => ({
            opacity: pressed ? 0.5 : 1,
            ...styles.card,
            backgroundColor:
              style === "ingenioso" ? Theme.colors.primary : Theme.colors.white,
          })}
        >
          <Image
            tintColor={"black"}
            resizeMode="contain"
            source={ingenioso}
            style={{
              width: 30,
              height: 30,
              alignSelf: "center",
            }}
          />
          <Text style={styles.text}>Ingenioso</Text>
        </Pressable>
        <Pressable
          onPress={() => selectAcion("llamativo")}
          style={({ pressed }) => ({
            opacity: pressed ? 0.5 : 1,
            ...styles.card,
            backgroundColor:
              style === "llamativo" ? Theme.colors.primary : Theme.colors.white,
          })}
        >
          <Image
            tintColor={"black"}
            resizeMode="contain"
            source={llamativo}
            style={{
              width: 30,
              height: 30,
              alignSelf: "center",
            }}
          />
          <Text style={styles.text}>Llamativo</Text>
        </Pressable>
        <Pressable
          onPress={() => selectAcion("rapido")}
          style={({ pressed }) => ({
            opacity: pressed ? 0.5 : 1,
            ...styles.card,
            backgroundColor:
              style === "rapido" ? Theme.colors.primary : Theme.colors.white,
          })}
        >
          <Image
            tintColor={"black"}
            resizeMode="contain"
            source={rapido}
            style={{
              width: 30,
              height: 30,
              alignSelf: "center",
            }}
          />
          <Text style={styles.text}>Rápido</Text>
        </Pressable>
        <Pressable
          onPress={() => selectAcion("vigoroso")}
          style={({ pressed }) => ({
            opacity: pressed ? 0.5 : 1,
            ...styles.card,
            backgroundColor:
              style === "vigoroso" ? Theme.colors.primary : Theme.colors.white,
          })}
        >
          <Image
            tintColor={"black"}
            resizeMode="contain"
            source={vigoroso}
            style={{
              width: 30,
              height: 30,
              alignSelf: "center",
            }}
          />
          <Text style={styles.text}>Vigoroso</Text>
        </Pressable>
      </View>
      <Text style={styles.description}>
        {style === "cauto"
          ? descriocionCauto
          : style === "furtivo"
          ? descriocionFurtivo
          : style === "ingenioso"
          ? descriocionIngenioso
          : style === "llamativo"
          ? descriocionLlamativo
          : style === "rapido"
          ? descriocionRapido
          : style === "vigoroso"
          ? descriocionVigoroso
          : ""}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-around",
  },
  card: {
    paddingHorizontal: 5,
    paddingVertical: 10,
    borderRadius: 10,
    alignItems: "center",
    shadowColor: Theme.colors.black,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    backgroundColor: Theme.colors.white,
    width: "15%",
  },
  text: {
    fontWeight: "bold",
    fontSize: 8,
  },
  description: {
    padding: 15,
    fontSize: Theme.fontSizes.sm,
  },
});

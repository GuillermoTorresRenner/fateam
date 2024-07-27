import { StyleSheet, Text, View, Image } from "react-native";
import React, { useEffect, useState } from "react";
import cauto from "../../assets/images/cauto.png";
import furtivo from "../../assets/images/furtivo.png";
import ingenioso from "../../assets/images/ingenioso.png";
import llamativo from "../../assets/images/llamativo.png";
import atacar from "../../assets/images/atacar.png";
import defender from "../../assets/images/defender.png";
import superar from "../../assets/images/superar.png";
import ventaja from "../../assets/images/ventaja.png";
import Theme from "../theme/Theme";

export default function ResultCard({ result, accion, estilo }) {
  const [explainText, setExplainText] = useState("");
  useEffect(() => {
    switch (result) {
      case "Fallo":
        switch (accion) {
          case "atacar":
            setExplainText("No se produce ningún efecto");

            break;
          case "defender":
            setExplainText(
              "Sufres las consecuencias del éxito de tu oponente."
            );

            break;
          case "ventaja":
            setExplainText(
              "No creas ni descubres ningún aspecto, o lo haces, pero tu oponente consigue una invocación gratuita (y tú no)."
            );

            break;
          case "superar":
            setExplainText(
              "Fallas, o bien tienes éxito con un coste importante."
            );

            break;
          default:
            setExplainText("");
        }

        break;
      case "Empate":
        switch (accion) {
          case "atacar":
            setExplainText(
              "El ataque no daña al objetivo, pero consigues un impulso."
            );

            break;
          case "defender":
            setExplainText(
              "Observa la acción de tu oponente para determinar que sucede."
            );

            break;
          case "ventaja":
            setExplainText(
              "Consigues un impulso si creas un nuevo aspecto, o se trata como un éxito si buscabas un aspecto existente."
            );

            break;
          case "superar":
            setExplainText("Tienes éxito con un coste leve.");

            break;
          default:
            setExplainText("");
        }
        break;
      case "Éxito":
        switch (accion) {
          case "atacar":
            setExplainText("El ataque acierta y causa daño.");

            break;
          case "defender":
            setExplainText("Tu oponente no consigue lo que buscaba.");

            break;
          case "ventaja":
            setExplainText(
              "Creas o descubres el aspecto y consigues una invocación gratuita."
            );

            break;
          case "superar":
            setExplainText("Consigues tu objetivo.");

            break;
          default:
            setExplainText("");
        }
        break;
      case "Éxito Crítico":
        switch (accion) {
          case "atacar":
            setExplainText(
              "El ataque acierta y causa daño. Puedes reducir el daño en 1 para conseguir un impulso."
            );

            break;
          case "defender":
            setExplainText(
              "Tu oponente no consigue lo que buscaba y además obtienes un impulso."
            );

            break;
          case "ventaja":
            setExplainText(
              "Creas o descubres el aspecto y consigues dos invocaciones gratuitas de este."
            );

            break;
          case "superar":
            setExplainText("Consigues tu objetivo y un impulso.");

            break;
          default:
            setExplainText("");
        }
        break;
      default:
        setExplainText("");
    }
  }, [result]);

  return (
    <View style={styles.container}>
      <View
        style={{
          ...styles.resultCard,
          backgroundColor:
            result === "Fallo"
              ? Theme.colors.danger
              : result === "Empate"
              ? Theme.colors.warning
              : result === "Éxito"
              ? Theme.colors.success
              : result === "Éxito Crítico"
              ? Theme.colors.success
              : "",
        }}
      >
        <Image
          source={
            accion === "atacar"
              ? atacar
              : accion === "defender"
              ? defender
              : accion === "superar"
              ? superar
              : accion === "ventaja"
              ? ventaja
              : ""
          }
          tintColor={Theme.colors.white}
          style={styles.image}
          resizeMode="contain"
        />
        <Text style={styles.result}>{result}</Text>
        <Image
          source={
            estilo === "cauto"
              ? cauto
              : estilo === "furtivo"
              ? furtivo
              : estilo === "ingenioso"
              ? ingenioso
              : estilo === "llamativo"
              ? llamativo
              : ""
          }
          tintColor={Theme.colors.white}
          style={styles.image}
          resizeMode="contain"
        />
      </View>
      <View style={styles.explainSection}>
        <Text style={styles.explainText}>{explainText}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: "space-between",
    alignItems: "center",
    padding: 10,
    width: "95%",
    alignSelf: "center",
    marginVertical: 10,
    borderRadius: 10,
    backgroundColor: Theme.colors.tertiary,
  },
  result: {
    textAlign: "center",
    fontSize: Theme.fontSizes.md,
    color: Theme.colors.white,
  },
  resultCard: {
    textAlign: "center",
    fontSize: Theme.fontSizes.md,
    color: Theme.colors.white,
    paddingVertical: 20,
    paddingHorizontal: 10,
    borderRadius: 10,
    borderWidth: 2,
    width: "90%",
    borderColor: Theme.colors.white,
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 10,
  },
  explainSection: {},
  explainText: {
    textAlign: "center",
    fontSize: Theme.fontSizes.md,
    color: Theme.colors.white,
    paddingVertical: 10,
    paddingHorizontal: 10,
    alignSelf: "center",
  },
  image: {
    width: 30,
    height: 30,
  },
});

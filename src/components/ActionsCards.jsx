import { StyleSheet, Text, View, Image, Pressable } from "react-native";
import React from "react";
import ventaja from "../../assets/images/ventaja.png";
import superar from "../../assets/images/superar.png";
import atacar from "../../assets/images/atacar.png";
import defender from "../../assets/images/defender.png";
import Theme from "../theme/Theme";

export default function ActionsCard({ action, setAction }) {
  const selectAcion = (selected) => {
    setAction(selected);
  };
  const descriocionVentaja =
    "Es todo aquello que intentes hacer para ayudarte a ti mismo o a tus amigos. Tomarse unos instantes para apuntar con el máximo cuidado tu pistola de protones, pasar varias horas investigando en la biblioteca de la escuela, o poner una zancadilla al atracador que pretende robarte: todo esto representa crear una ventaja. El objetivo de tu acción puede tener una oportunidad para utilizar una acción defensiva para detenerte. La ventaja que logres crear te permite hacer una de las tres cosas siguientes:• Crear un nuevo aspecto temporal. • Descubrir un aspecto temporal ya existente o un aspecto de otro personaje que desconocías anteriormente. • Sacar ventaja de un aspecto ya existente.";
  const descriocionSuperar =
    "La acción Superar se utiliza cuando debes dejar atrás algo que se interpone entre ti y una meta concreta: forzar una cerradura, zafarse de unas esposas, cruzar un abismo de un salto o pilotar una nave espacial a través de un campo de asteroides son buenos ejemplos. Actuar con el fin de eliminar o cambiar un aspecto temporal poco conveniente a menudo Eliminar supone tener que utilizar la acción de Superar.";
  ("Cuando un personaje intenta superar un desafío, debe superar un valor de dificultad. La dificultad se establece en función de lo complicado que sea el desafío. Por ejemplo, si un personaje intenta saltar un río, la dificultad puede ser de 2. El personaje deberá sacar un valor de 2 o más en la tirada de dados para superar el desafío.");
  const descriocionAtacar =
    "Utiliza la acción Atacar cuando intentes hacer daño a alguien, ya sea física o mentalmente: asestando un espadazo, disparando un fusil de rayos o profiriendo un insulto tremendo con la intención de herir a tu objetivo. El objetivo de tu ataque tiene una oportunidad de utilizar la acción Defender para detenerte.";
  const descriocionDefender =
    "Utiliza Defender cuando estés intentando evitar activamente que alguien haga alguna de las otras tres acciones: intentas parar un mandoble, seguir en pie, bloquear una puerta, etc. Normalmente esta acción se efectúa durante el turno de otra persona como reacción a su intento de Atacar, Superar o Crear una ventaja. También puedes tirar para oponerte a otras acciones que no sean un ataque o bien defender a otra persona de un ataque, siempre que puedas explicar por qué puedes hacerlo. Normalmente se acepta si la mayoría de los presentes en la mesa están de acuerdo en que es una explicación razonable, pero también puedes señalar un aspecto temporal relevante para justificarlo. Cuando lo haces, te conviertes en el objetivo de cualquier mal resultado.";
  return (
    <View>
      <View style={styles.container}>
        <Pressable
          onPress={() => selectAcion("ventaja")}
          style={({ pressed }) => ({
            opacity: pressed ? 0.5 : 1,
            ...styles.card,
            backgroundColor:
              action === "ventaja" ? Theme.colors.primary : Theme.colors.white,
          })}
        >
          <Image
            resizeMode="contain"
            source={ventaja}
            style={{
              width: 30,
              height: 30,
              alignSelf: "center",
            }}
          />
          <Text style={styles.text}>Ventaja</Text>
        </Pressable>
        <Pressable
          onPress={() => selectAcion("superar")}
          style={({ pressed }) => ({
            opacity: pressed ? 0.5 : 1,
            ...styles.card,
            backgroundColor:
              action === "superar" ? Theme.colors.primary : Theme.colors.white,
          })}
        >
          <Image
            resizeMode="contain"
            source={superar}
            style={{
              width: 30,
              height: 30,
              alignSelf: "center",
            }}
          />
          <Text style={styles.text}>Superar</Text>
        </Pressable>
        <Pressable
          onPress={() => selectAcion("atacar")}
          style={({ pressed }) => ({
            opacity: pressed ? 0.5 : 1,
            ...styles.card,
            backgroundColor:
              action === "atacar" ? Theme.colors.primary : Theme.colors.white,
          })}
        >
          <Image
            resizeMode="contain"
            source={atacar}
            style={{
              width: 30,
              height: 30,
              alignSelf: "center",
            }}
          />
          <Text style={styles.text}>Atacar</Text>
        </Pressable>
        <Pressable
          onPress={() => selectAcion("defender")}
          style={({ pressed }) => ({
            opacity: pressed ? 0.5 : 1,
            ...styles.card,
            backgroundColor:
              action === "defender" ? Theme.colors.primary : Theme.colors.white,
          })}
        >
          <Image
            resizeMode="contain"
            source={defender}
            style={{
              width: 30,
              height: 30,
              alignSelf: "center",
            }}
          />
          <Text style={styles.text}>Defender</Text>
        </Pressable>
      </View>
      <Text style={styles.description}>
        {action === "ventaja"
          ? descriocionVentaja
          : action === "superar"
          ? descriocionSuperar
          : action === "atacar"
          ? descriocionAtacar
          : action === "defender"
          ? descriocionDefender
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
    padding: 5,
    borderRadius: 10,
    alignItems: "center",
    shadowColor: Theme.colors.black,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    backgroundColor: Theme.colors.white,
    width: "20%",
  },
  text: {
    fontWeight: "bold",
  },
  description: {
    padding: 15,
    fontSize: Theme.fontSizes.sm,
  },
});

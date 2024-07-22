import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TextInput,
  Pressable,
  Alert,
} from "react-native";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import BoxedTitle from "../components/BoxedTitle";
import ActionsCards from "../components/ActionsCards";
import StylesCards from "../components/StylesCards";
import Theme from "../theme/Theme";
import { FontAwesome5 } from "@expo/vector-icons";
export default function DicesScreen({ navigation }) {
  const { cauto, furtivo, ingenioso, llamativo, rapido, vigoroso, puntosFate } =
    useSelector((state) => state.character.character);
  const [action, setAction] = useState(null);
  const [style, setStyle] = useState(null);
  const [help, setHelp] = useState(0);
  const [advantage, setAdvantage] = useState(0);
  const [impulse, setImpulse] = useState(0);
  const [proeza, setProeza] = useState(0);
  const [ptoFate, setPtoFate] = useState(0);
  const [dificulty, setDificulty] = useState(0);
  const [disadvantage, setDisadvantage] = useState(0);
  const [otherPenalties, setOtherPenalties] = useState(0);
  const [consecuences, setConsecuences] = useState(0);
  const [totalAdd, setTotlaAdd] = useState(0);
  const [totalSub, setTotalSub] = useState(0);
  useEffect(() => {
    setTotlaAdd(
      parseInt(help) +
        parseInt(advantage) +
        parseInt(impulse) +
        parseInt(proeza) +
        parseInt(ptoFate)
    );
  }, [help, advantage, impulse, proeza, ptoFate]);
  useEffect(() => {
    setTotalSub(
      parseInt(dificulty) +
        parseInt(disadvantage) +
        parseInt(otherPenalties) +
        parseInt(consecuences)
    );
  }, [dificulty, disadvantage, otherPenalties, consecuences]);

  const showAlert = (name) => {
    Alert.alert(
      "Seleciona un dato numérico",
      `${name} debe ser un valor numérico`,
      [{ text: "OK" }],
      {
        cancelable: false,
      }
    );
  };
  const consumePtos = () => {
    if (puntosFate > 0) {
      Alert.alert(
        "Gasto de Puntos Fate",
        `Tienes  ${puntosFate} puntos Fate. ¿Deseas gastar 1 punto Fate para obtener un bonificador de +2 ?`,

        [
          { text: "Gastar Punto", onPress: () => setPtoFate(2) },
          { text: "Cancelar" },
        ],
        {
          cancelable: false,
        }
      );
    } else {
      Alert.alert(
        "Gasto de Puntos Fate",
        `No tienes puntos Fate para gastar.No puedes usar este bonificador`,

        [{ text: "Cancelar" }],
        {
          cancelable: false,
        }
      );
    }
  };
  useEffect(() => {
    if (isNaN(help)) {
      setHelp(0);
      showAlert("Ayuda");
    }
    if (isNaN(advantage)) {
      setAdvantage(0);
      showAlert("Ventaja");
    }
    if (isNaN(impulse)) {
      setImpulse(0);
      showAlert("Impulso");
    }
    if (isNaN(proeza)) {
      setProeza(0);
      showAlert("Proeza");
    }
    if (isNaN(ptoFate)) {
      setPtoFate(0);
      showAlert("Pto Fate");
    }
    if (isNaN(dificulty)) {
      setDificulty(0);
      showAlert("Dificultad");
    }
    if (isNaN(disadvantage)) {
      setDisadvantage(0);
      showAlert("Desventaja");
    }
    if (isNaN(otherPenalties)) {
      setOtherPenalties(0);
    }
    if (isNaN(consecuences)) {
      setConsecuences(0);
      showAlert("Consecuencias");
    }
  }, [
    help,
    advantage,
    impulse,
    proeza,
    ptoFate,
    dificulty,
    disadvantage,
    otherPenalties,
    consecuences,
  ]);

  const roll = () => {
    if (!action || !style) {
      Alert.alert(
        "Selecciona una acción y un estilo",
        "Debes seleccionar una acción y un estilo para realizar la tirada",
        [{ text: "OK" }],
        {
          cancelable: false,
        }
      );
      return;
    }

    navigation.navigate("RollDiceScreen", {
      action,
      style,
      help,
      advantage,
      impulse,
      proeza,
      ptoFate,
      dificulty,
      disadvantage,
      otherPenalties,
      consecuences,
    });
  };
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <BoxedTitle title="Accion" />
      <View>
        <ActionsCards action={action} setAction={setAction} />
      </View>
      <BoxedTitle title="Estilo" />
      <View>
        <StylesCards style={style} setStyle={setStyle} />
        <Text style={styles.stylePoint}>
          {style === "cauto"
            ? cauto
            : style === "furtivo"
            ? furtivo
            : style === "llamativo"
            ? llamativo
            : style === "ingenioso"
            ? ingenioso
            : style === "rapido"
            ? rapido
            : vigoroso}
        </Text>
      </View>
      <BoxedTitle title="bonificadores" />
      <View style={styles.rowContainer}>
        <View style={styles.card}>
          <TextInput
            style={{ ...styles.input, color: Theme.colors.success }}
            value={help}
            onChangeText={setHelp}
            keyboardType="numeric"
          />
          <Text>ayuda</Text>
        </View>
        <View style={styles.card}>
          <TextInput
            style={{ ...styles.input, color: Theme.colors.success }}
            value={advantage}
            onChangeText={setAdvantage}
            keyboardType="numeric"
          />
          <Text>Ventaja</Text>
        </View>
        <View style={styles.card}>
          <TextInput
            style={{ ...styles.input, color: Theme.colors.success }}
            value={impulse}
            onChangeText={setImpulse}
            keyboardType="numeric"
          />
          <Text>Impulso</Text>
        </View>
        <View style={styles.card}>
          <TextInput
            style={{ ...styles.input, color: Theme.colors.success }}
            value={proeza}
            onChangeText={setProeza}
            keyboardType="numeric"
          />
          <Text>Proeza</Text>
        </View>
        <Pressable style={styles.card} onPress={consumePtos}>
          <Text style={{ ...styles.input, color: Theme.colors.success }}>
            {ptoFate === 0 ? "" : ptoFate}
          </Text>
          <Text>{puntosFate}: Ptos Fate</Text>
        </Pressable>
      </View>
      <Text style={styles.stylePoint}>{totalAdd}</Text>
      <BoxedTitle title="Dificultades" />
      <View style={styles.rowContainer}>
        <View style={styles.card}>
          <TextInput
            style={{ ...styles.input, color: Theme.colors.danger }}
            value={dificulty}
            onChangeText={setDificulty}
            keyboardType="numeric"
          />
          <Text>Dificultad</Text>
        </View>
        <View style={styles.card}>
          <TextInput
            style={{ ...styles.input, color: Theme.colors.danger }}
            value={disadvantage}
            onChangeText={setDisadvantage}
            keyboardType="numeric"
          />
          <Text>Desventaja</Text>
        </View>
        <View style={styles.card}>
          <TextInput
            style={{ ...styles.input, color: Theme.colors.danger }}
            value={consecuences}
            onChangeText={setConsecuences}
            keyboardType="numeric"
          />
          <Text>Consec.</Text>
        </View>
        <View style={styles.card}>
          <TextInput
            style={{ ...styles.input, color: Theme.colors.danger }}
            value={otherPenalties}
            onChangeText={setOtherPenalties}
            keyboardType="numeric"
          />
          <Text>Otros</Text>
        </View>
      </View>
      <Text style={{ ...styles.stylePoint, color: Theme.colors.danger }}>
        {totalSub}
      </Text>

      <BoxedTitle title="tirada" />
      <View style={{ justifyContent: "center", alignItems: "center" }}>
        <Pressable
          onPress={roll}
          style={({ pressed }) => ({
            opacity: pressed ? 0.5 : 1,
            marginBottom: 20,
          })}
        >
          <FontAwesome5
            name="dice-d6"
            size={100}
            color={Theme.colors.tertiary}
          />
        </Pressable>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  rowContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
  },
  stylePoint: {
    textAlign: "center",
    fontSize: Theme.fontSizes.lg,
    color: Theme.colors.success,
    fontWeight: "bold",
    backgroundColor: Theme.colors.white,
    width: 50,
    alignSelf: "center",
    marginVertical: 10,
    borderRadius: 50,
  },
  input: {
    height: 40,
    width: "90%",
    margin: 12,
    borderBottomWidth: 1,
    textAlign: "center",
    fontSize: Theme.fontSizes.lg,
    fontWeight: "bold",
  },
  card: {
    paddingHorizontal: 5,
    borderRadius: 10,
    alignItems: "center",
    shadowColor: Theme.colors.black,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    backgroundColor: Theme.colors.white,
    width: "18%",
    height: 80,
  },
});

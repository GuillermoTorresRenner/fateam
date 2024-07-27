import { StyleSheet, Text, View, ScrollView } from "react-native";
import React, { useEffect, useState } from "react";
import Dice from "../components/Dice";
import Theme from "../theme/Theme";
import ResultCard from "../components/ResultCard";

export default function RollDiceScreen({ navigation, route }) {
  const {
    action,
    style,
    stylePoints,
    help,
    advantage,
    impulse,
    proeza,
    ptoFate,
    dificulty,
    disadvantage,
    otherPenalties,
    consecuences,
  } = route.params;
  const critico = +dificulty + 3;
  const [dice1, setDice1] = useState(1);
  const [dice2, setDice2] = useState(1);
  const [dice3, setDice3] = useState(1);
  const [dice4, setDice4] = useState(1);
  const [bonificadores, setBonificadores] = useState(0);
  const [penalizadores, setPenalizadores] = useState(0);
  const [diceResult, setDiceResult] = useState(0);
  const [total, setTotal] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      setDice1(Math.floor(Math.random() * 6) + 1);
      setDice2(Math.floor(Math.random() * 6) + 1);
      setDice3(Math.floor(Math.random() * 6) + 1);
      setDice4(Math.floor(Math.random() * 6) + 1);
    }, 100);

    setTimeout(() => {
      clearInterval(interval);
    }, 1500);
  }, []);

  useEffect(() => {
    const total =
      +stylePoints + +help + +advantage + +impulse + +proeza + +ptoFate;
    setBonificadores(total);
  }, [stylePoints, help, advantage, impulse, proeza, ptoFate]);
  useEffect(() => {
    setPenalizadores(+disadvantage + +otherPenalties + +consecuences);
  }, [disadvantage, otherPenalties, consecuences]);

  const diceSum = (dado) => {
    if (dado === 1 || dado === 2) {
      return -1;
    } else if (dado === 3 || dado === 4) {
      return 0;
    } else if (dado === 5 || dado === 6) {
      return 1;
    }
    return 0;
  };
  useEffect(() => {
    setDiceResult(
      diceSum(dice1) + diceSum(dice2) + diceSum(dice3) + diceSum(dice4)
    );
  }, [dice1, dice2, dice3, dice4]);

  useEffect(() => {
    setTotal(bonificadores + diceResult - penalizadores);
  }, [bonificadores, diceResult, penalizadores]);

  return (
    <ScrollView>
      <View style={styles.dices}>
        <Dice dice={dice1} />
        <Dice dice={dice2} />
        <Dice dice={dice3} />
        <Dice dice={dice4} />
      </View>
      <View style={styles.bonus}>
        <View style={styles.sectionAdd}>
          <Text style={styles.text}>
            {style}: {stylePoints}
          </Text>
          <Text style={styles.text}>Ayuda: {help}</Text>
          <Text style={styles.text}>Ventaja: {advantage}</Text>
          <Text style={styles.text}>Impulso: {impulse}</Text>
          <Text style={styles.text}>Proeza: {proeza}</Text>
          <Text style={styles.text}>Punto Fate: {ptoFate}</Text>
        </View>
        <View style={styles.sectionSub}>
          <Text style={styles.text}>Desventajas: {disadvantage}</Text>
          <Text style={styles.text}>Otros: {otherPenalties}</Text>
          <Text style={styles.text}>Consecuencias: {consecuences}</Text>
        </View>
      </View>
      <View style={styles.bonus}>
        <Text
          style={{
            ...styles.result,
          }}
        >
          Tirada: {diceResult}
        </Text>
        <Text style={{ ...styles.result, backgroundColor: Theme.colors.light }}>
          +
        </Text>
        <Text style={{ ...styles.result }}>
          Bonificadores:
          {bonificadores}
        </Text>
        <Text style={{ ...styles.result, backgroundColor: Theme.colors.light }}>
          -
        </Text>
        <Text style={{ ...styles.result }}>Penalizadores:{penalizadores}</Text>
      </View>
      <View style={{ ...styles.data }}>
        <Text style={styles.text}>TOTAL: {total}</Text>

        <Text style={{ ...styles.result, backgroundColor: Theme.colors.light }}>
          vs
        </Text>
        <Text style={styles.text}>DIFICULTAD: {dificulty}</Text>
      </View>
      <ResultCard
        result={
          total >= critico
            ? "Éxito Crítico"
            : total > +dificulty
            ? "Éxito"
            : total == +dificulty
            ? "Empate"
            : total < +dificulty
            ? "Fallo"
            : ""
        }
        accion={action}
        estilo={style}
      />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  dices: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 10,
  },
  result: {
    textAlign: "center",
    fontSize: Theme.fontSizes.sm,
    color: Theme.colors.tertiary,
    paddingVertical: 10,
    paddingHorizontal: 10,
    alignSelf: "center",
    borderRadius: 10,
    borderWidth: 2,
    borderColor: Theme.colors.tertiary,
  },
  bonus: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 10,
  },
  sectionAdd: {
    width: "45%",
    padding: 10,
    borderWidth: 2,
    borderRadius: 10,
    backgroundColor: Theme.colors.tertiary,
    height: "100%",
    borderColor: Theme.colors.light,
  },
  sectionSub: {
    width: "45%",
    padding: 10,
    borderWidth: 2,
    borderRadius: 10,
    backgroundColor: Theme.colors.tertiary,
    height: "100%",
    borderColor: Theme.colors.light,
  },
  text: {
    color: Theme.colors.white,
    fontSize: Theme.fontSizes.md,
    marginBottom: 10,
  },
  data: {
    flexDirection: "row",
    backgroundColor: Theme.colors.dark,
    justifyContent: "space-between",
    alignItems: "center",
    alignContent: "center",
    color: Theme.colors.white,
    paddingVertical: 10,
    paddingHorizontal: 20,
    alignSelf: "center",
    gap: 10,
    width: "90%",
    borderRadius: 10,
    borderWidth: 2,
    borderColor: Theme.colors.tertiary,
  },
});

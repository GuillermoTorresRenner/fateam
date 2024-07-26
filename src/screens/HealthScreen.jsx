import React, { useState } from "react";
import {
  View,
  Switch,
  StyleSheet,
  Text,
  TextInput,
  ScrollView,
} from "react-native";
import InfoAlert from "../components/InfoAlert";
import Theme from "../theme/Theme";
import { useDispatch, useSelector } from "react-redux";
import { useUpdateCharacterMutation } from "../services/characterServices";
import { setCharacter } from "../features/CharacterSlice";
import IconedButton from "../components/IconedButton";

export default function HealthScreen({ navigation }) {
  const character = useSelector((state) => state.character.character);
  const [trigger] = useUpdateCharacterMutation();
  const dispatch = useDispatch();
  const updateData = () => {
    console.log("updateing data...");
    dispatch(
      setCharacter({
        ...character,
        stress1: stress1,
        stress2: stress2,
        stress3: stress3,
        consecuencia2: consecuencia2,
        consecuencia4: consecuencia4,
      })
    );
    trigger({
      ...character,
      stress1: stress1,
      stress2: stress2,
      stress3: stress3,
      consecuencia2: consecuencia2,
      consecuencia4: consecuencia4,
      consecuencia6: consecuencia6,
    });
  };
  //usamos este hook para grabar los cambios al abandonar el screen

  const [stress1, setStress1] = useState(character.stress1);
  const [stress2, setStress2] = useState(character.stress2);
  const [stress3, setStress3] = useState(character.stress3);
  const [consecuencia2, setConsecuencia2] = useState(character.consecuencia2);
  const [consecuencia4, setConsecuencia4] = useState(character.consecuencia4);
  const [consecuencia6, setConsecuencia6] = useState(character.consecuencia6);

  const toggleSwitch1 = () => setStress1((previousState) => !previousState);
  const toggleSwitch2 = () => setStress2((previousState) => !previousState);
  const toggleSwitch3 = () => setStress3((previousState) => !previousState);

  return (
    <ScrollView style={styles.container}>
      <View
        style={{
          flexDirection: "row",
          backgroundColor: Theme.colors.dark,
          alignItems: "baseline",
          paddingVertical: 5,
          width: "98%",
          alignSelf: "center",
          borderRadius: 10,
          marginVertical: 5,
          paddingHorizontal: "10%",
        }}
      >
        <Text style={{ ...styles.text, fontSize: Theme.fontSizes.md }}>
          Contadores de Stress
        </Text>
        <InfoAlert
          title={"Contadores de Stress"}
          description={
            "Si te alcanza un ataque y no quieres ser derrotado, puedes decidir sufrir estrés. El estrés representa que te cansas o estás molesto, que has sufrido una herida superficial, o cualquier otra circunstancia que desaparece rápidamente. Tu hoja de personaje tiene un contador de estrés, una fila con tres casillas. Cuando te alcanza un ataque y tachas una casilla de estrés, la casilla absorbe una cantidad de aumentos igual a su número: un aumento con la Casilla 1, dos con la Casilla 2 y tres con la Casilla 3. Solamente puedes tachar una casilla de estrés cada vez que te alcancen, pero sí puedes tachar una casilla de estrés y aceptar una o más consecuencias al mismo tiempo. No puedes tachar una casilla que ya ha sido tachada anteriormente"
          }
          navigation={navigation}
          currentPage={22}
        />
      </View>
      <View style={styles.section}>
        <View
          style={{
            ...styles.stressCard,
            backgroundColor: stress1
              ? Theme.colors.danger
              : Theme.colors.tertiary,
          }}
        >
          <Text style={styles.text}>Stress 1 </Text>
          <Switch
            trackColor={{
              false: Theme.colors.light,
              true: Theme.colors.dark,
            }}
            thumbColor={Theme.colors.tertiary}
            ios_backgroundColor="#3e3e3e"
            onValueChange={toggleSwitch1}
            value={stress1}
          />
        </View>
        <View
          style={{
            ...styles.stressCard,
            backgroundColor: stress2
              ? Theme.colors.danger
              : Theme.colors.tertiary,
          }}
        >
          <Text style={styles.text}>Stress 2 </Text>
          <Switch
            trackColor={{
              false: Theme.colors.light,
              true: Theme.colors.dark,
            }}
            thumbColor={Theme.colors.tertiary}
            ios_backgroundColor="#3e3e3e"
            onValueChange={toggleSwitch2}
            value={stress2}
          />
        </View>
        <View
          style={{
            ...styles.stressCard,
            backgroundColor: stress3
              ? Theme.colors.danger
              : Theme.colors.tertiary,
          }}
        >
          <Text style={styles.text}>Stress 3 </Text>

          <Switch
            trackColor={{
              false: Theme.colors.light,
              true: Theme.colors.dark,
            }}
            thumbColor={Theme.colors.tertiary}
            ios_backgroundColor="#3e3e3e"
            onValueChange={toggleSwitch3}
            value={stress3}
          />
        </View>
      </View>
      <View
        style={{
          flexDirection: "row",
          backgroundColor: Theme.colors.dark,
          alignItems: "baseline",
          paddingVertical: 5,
          paddingHorizontal: "20%",
          width: "98%",
          alignSelf: "center",
          borderRadius: 10,
          marginVertical: 5,
        }}
      >
        <Text
          style={{
            ...styles.text,
            fontSize: Theme.fontSizes.md,
          }}
        >
          Consecuencias
        </Text>
        <InfoAlert
          title={"Consecuencias"}
          description={
            "Las consecuencias son nuevos aspectos que tomas para reflejar el haber recibido daños graves de algún tipo. La hoja de personaje tiene tres espacios para anotar consecuencias. Cada uno está señalado por un número: 2 (consecuencia leve), 4 (consecuencia moderada) o 6 (consecuencia grave). Esto representa el número de aumentos que absorbe la consecuencia. Puedes tachar tantos como quieras para absorber un solo ataque, pero únicamente si el espacio está en blanco. Si ya has anotado una consecuencia moderada, no puedes anotar otra hasta que hagas algo para que la primera desaparezca. Un serio inconveniente de las consecuencias es que cada una es un nuevo aspecto que tus oponentes pueden invocar contra ti. Cuantas más tengas, más vulnerable eres. Además, igual que con los aspectos temporales, el personaje que los crea (en este caso, el personaje que te ha alcanzado) consigue una invocación gratuita de esa consecuencia. También puede decidir que sea uno de sus aliados el que utilice la invocación gratuita."
          }
          navigation={navigation}
          currentPage={23}
        />
      </View>
      <View style={styles.section}>
        <View
          style={{
            ...styles.consecuenceCard,
            backgroundColor:
              consecuencia2.length > 0
                ? Theme.colors.danger
                : Theme.colors.tertiary,
          }}
        >
          <Text style={styles.text}>Consecuencia 2 </Text>
          <TextInput
            value={consecuencia2}
            onChangeText={setConsecuencia2}
            style={styles.input}
          />
        </View>

        <View
          style={{
            ...styles.consecuenceCard,
            backgroundColor:
              consecuencia4.length > 0
                ? Theme.colors.danger
                : Theme.colors.tertiary,
          }}
        >
          <Text style={styles.text}>Consecuencia 4 </Text>
          <TextInput
            value={consecuencia4}
            onChangeText={setConsecuencia4}
            style={styles.input}
          />
        </View>
        <View
          style={{
            ...styles.consecuenceCard,
            backgroundColor:
              consecuencia6.length > 0
                ? Theme.colors.danger
                : Theme.colors.tertiary,
          }}
        >
          <Text style={styles.text}>Consecuencia 6 </Text>
          <TextInput
            value={consecuencia6}
            onChangeText={setConsecuencia6}
            style={styles.input}
          />
        </View>
      </View>
      {/* ---------------------- */}
      <IconedButton onPress={updateData} type={"save"} />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  stress: {
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 20,
  },

  text: {
    color: Theme.colors.light,
    fontSize: Theme.fontSizes.md,
    textAlign: "center",
  },
  section: {
    alignItems: "center",
    justifyContent: "center",
  },
  stressCard: {
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    borderRadius: 10,
    marginVertical: 2,
    paddingVertical: 2,
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    width: "90%",
  },
  consecuenceCard: {
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    borderRadius: 10,
    marginVertical: 2,
    paddingVertical: 2,
    justifyContent: "space-around",
    alignItems: "center",
    width: "90%",
    paddingHorizontal: 10,
  },
  input: {
    borderBottomWidth: 1,
    borderBottomColor: Theme.colors.light,
    borderRadius: 10,
    width: "100%",
    backgroundColor: Theme.colors.light,
    marginVertical: 10,
  },
});

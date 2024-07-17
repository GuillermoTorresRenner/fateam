import cauto from "../../assets/images/cauto.png";
import furtivo from "../../assets/images/furtivo.png";
import ingenioso from "../../assets/images/ingenioso.png";
import llamativo from "../../assets/images/llamativo.png";
import rapido from "../../assets/images/rapido.png";
import vigoroso from "../../assets/images/vigoroso.png";
import Slider from "@react-native-community/slider";
import Theme from "../theme/Theme";
import { StyleSheet, Text, View } from "react-native";

export default function StylesSlider({ formikProps, inputName }) {
  return (
    <View style={styles.slider}>
      <Text style={styles.sliderLabel}>
        {inputName}: {formikProps.values[inputName]}
      </Text>
      <Slider
        style={{ width: 200, height: 20 }}
        minimumValue={0}
        step={1}
        maximumValue={3}
        thumbImage={
          inputName === "cauto"
            ? cauto
            : inputName === "furtivo"
            ? furtivo
            : inputName === "ingenioso"
            ? ingenioso
            : inputName === "llamativo"
            ? llamativo
            : inputName === "rapido"
            ? rapido
            : vigoroso
        }
        minimumTrackTintColor={Theme.colors.success}
        maximumTrackTintColor={Theme.colors.secondary}
        value={formikProps.values[inputName]}
        onValueChange={(value) => formikProps.setFieldValue(inputName, value)}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  slider: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    width: "85%",
  },
  sliderLabel: {
    textTransform: "capitalize",
    fontSize: Theme.fontSizes.md,
    color: Theme.colors.tertiary,
    fontWeight: "bold",
    margin: 10,
  },
});

import { StyleSheet, Text, View, ScrollView } from "react-native";
import { Formik } from "formik";
import * as Yup from "yup";
import React from "react";
import BoxedTitle from "../components/BoxedTitle";
import Input from "../components/Input";
import Slider from "@react-native-community/slider";
import Theme from "../theme/Theme";
import Cauto from "../../assets/images/cauto.png";
import Furtivo from "../../assets/images/furtivo.png";
import Ingenioso from "../../assets/images/ingenioso.png";
import Llamativo from "../../assets/images/llamativo.png";
import Rapido from "../../assets/images/rapido.png";
import Vigoroso from "../../assets/images/vigoroso.png";
import IconedButton from "../components/IconedButton";
export default function CreateCharacterScreen() {
  const initialValues = {
    name: "",
    description: "",
    aspect1: "",
    aspect2: "",
    aspect3: "",
    cauto: 0,
    furtivo: 0,
    ingenioso: 0,
    llamativo: 0,
    rapido: 0,
    vigoroso: 0,
    proeza1: "",
    proeza2: "",
    proeza3: "",
    proeza4: "",
    proeza5: "",
  };
  const validationSchema = Yup.object().shape({
    name: Yup.string().required("El nombre es requerido"),
    description: Yup.string().required("La descripción es requerida"),
  });

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={(values) => console.log(values)}
      validationSchema={validationSchema}
    >
      {(formikProps) => (
        <ScrollView>
          <BoxedTitle title="Identidad" />
          <Input
            inputName="name"
            formikProps={formikProps}
            placeholder={"Nombre"}
          />
          <Input
            inputName="description"
            formikProps={formikProps}
            placeholder={"Descripción"}
          />

          <BoxedTitle title="Aspectos" />
          <Input
            inputName="aspect1"
            formikProps={formikProps}
            placeholder={"Aspecto"}
          />
          <Input
            inputName="aspect2"
            formikProps={formikProps}
            placeholder={"Aspecto"}
          />
          <Input
            inputName="aspect3"
            formikProps={formikProps}
            placeholder={"Aspecto"}
          />
          <BoxedTitle title="Estilos" />
          <View style={styles.slider}>
            <Text style={styles.sliderLabel}>
              Cauto: {formikProps.values.cauto}
            </Text>
            <Slider
              style={{ width: 200, height: 20 }}
              minimumValue={0}
              step={1}
              maximumValue={3}
              thumbImage={Cauto}
              minimumTrackTintColor={Theme.colors.success}
              maximumTrackTintColor={Theme.colors.secondary}
              value={formikProps.values.cauto}
              onValueChange={(value) =>
                formikProps.setFieldValue("cauto", value)
              }
            />
          </View>
          <View style={styles.slider}>
            <Text style={styles.sliderLabel}>
              Furtivo: {formikProps.values.furtivo}
            </Text>
            <Slider
              style={{ width: 200, height: 40 }}
              minimumValue={0}
              step={1}
              maximumValue={3}
              thumbImage={Furtivo}
              minimumTrackTintColor={Theme.colors.success}
              maximumTrackTintColor={Theme.colors.secondary}
              value={formikProps.values.furtivo}
              onValueChange={(value) =>
                formikProps.setFieldValue("furtivo", value)
              }
            />
          </View>
          <View style={styles.slider}>
            <Text style={styles.sliderLabel}>
              Ingenioso: {formikProps.values.ingenioso}
            </Text>
            <Slider
              style={{ width: 200, height: 40 }}
              minimumValue={0}
              step={1}
              maximumValue={3}
              thumbImage={Ingenioso}
              minimumTrackTintColor={Theme.colors.success}
              maximumTrackTintColor={Theme.colors.secondary}
              value={formikProps.values.ingenioso}
              onValueChange={(value) =>
                formikProps.setFieldValue("ingenioso", value)
              }
            />
          </View>
          <View style={styles.slider}>
            <Text style={styles.sliderLabel}>
              Llamativo: {formikProps.values.llamativo}
            </Text>
            <Slider
              style={{ width: 200, height: 40 }}
              minimumValue={0}
              step={1}
              maximumValue={3}
              thumbImage={Llamativo}
              minimumTrackTintColor={Theme.colors.success}
              maximumTrackTintColor={Theme.colors.secondary}
              value={formikProps.values.llamativo}
              onValueChange={(value) =>
                formikProps.setFieldValue("llamativo", value)
              }
            />
          </View>
          <View style={styles.slider}>
            <Text style={styles.sliderLabel}>
              Rápido: {formikProps.values.rapido}
            </Text>
            <Slider
              style={{ width: 200, height: 40 }}
              minimumValue={0}
              step={1}
              maximumValue={3}
              thumbImage={Rapido}
              minimumTrackTintColor={Theme.colors.success}
              maximumTrackTintColor={Theme.colors.secondary}
              value={formikProps.values.rapido}
              onValueChange={(value) =>
                formikProps.setFieldValue("rapido", value)
              }
            />
          </View>
          <View style={styles.slider}>
            <Text style={styles.sliderLabel}>
              Vigoroso: {formikProps.values.vigoroso}
            </Text>
            <Slider
              style={{ width: 200, height: 40 }}
              minimumValue={0}
              step={1}
              maximumValue={3}
              thumbImage={Vigoroso}
              minimumTrackTintColor={Theme.colors.success}
              maximumTrackTintColor={Theme.colors.secondary}
              value={formikProps.values.vigoroso}
              onValueChange={(value) =>
                formikProps.setFieldValue("vigoroso", value)
              }
            />
          </View>
          <BoxedTitle title="Proezas" />
          <Input
            inputName="proeza1"
            formikProps={formikProps}
            placeholder={"Proeza"}
            multiline={true}
          />
          <Input
            inputName="proeza2"
            formikProps={formikProps}
            placeholder={"Proeza"}
            multiline={true}
          />
          <Input
            inputName="proeza3"
            formikProps={formikProps}
            placeholder={"Proeza"}
            multiline={true}
          />
          <Input
            inputName="proeza4"
            formikProps={formikProps}
            placeholder={"Proeza"}
            multiline={true}
          />
          <Input
            inputName="proeza5"
            formikProps={formikProps}
            placeholder={"Proeza"}
            multiline={true}
          />
          <IconedButton onPress={formikProps.handleSubmit} type="save" />
        </ScrollView>
      )}
    </Formik>
  );
}

const styles = StyleSheet.create({
  slider: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    width: "100%",
  },
  sliderLabel: {
    fontSize: Theme.fontSizes.md,
    color: Theme.colors.secondary,
    fontWeight: "bold",
    margin: 10,
  },
});

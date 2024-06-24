import { Pressable, ScrollView } from "react-native";
import { Formik } from "formik";
import * as Yup from "yup";
import BoxedTitle from "../components/BoxedTitle";
import Input from "../components/Input";
import StylesSlider from "../components/StylesSlider";
import IconedButton from "../components/IconedButton";
import { FontAwesome6 } from "@expo/vector-icons";
export default function CreateCharacterScreen() {
  const initialValues = {
    nombre: "",
    descripcion: "",
    aspectoPrincipal: "",
    complicacion: "",
    aspecto1: "",
    aspecto2: "",
    aspecto3: "",
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
    avatar: "",
    stress1: false,
    stress2: false,
    stress3: false,
    consecuencia2: "",
    consecuencia4: "",
    consecuencia6: "",
    arecuperacion: 3,
    puntosFate: 3,
  };
  const validationSchema = Yup.object().shape({
    nombre: Yup.string().required("Campo requerido"),
    descripcion: Yup.string().required("Campo requerido"),
    aspectoPrincipal: Yup.string().required("Campo requerido"),
    complicacion: Yup.string().required("Campo requerido"),
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
          <Pressable
            style={{ alignSelf: "center" }}
            onPress={() => console.log("agregar avatar")}
          >
            <FontAwesome6 name="circle-user" size={60} color="black" />
          </Pressable>
          <Input
            inputName="nombre"
            formikProps={formikProps}
            placeholder={"Nombre"}
          />
          <Input
            inputName="descripcion"
            formikProps={formikProps}
            placeholder={"Descripción"}
          />
          <Input
            inputName="aspectoPrincipal"
            formikProps={formikProps}
            placeholder={"Aspecto Principal"}
          />
          <Input
            inputName="complicacion"
            formikProps={formikProps}
            placeholder={"Complicación"}
          />
          <BoxedTitle title="Aspectos" />
          <Input
            inputName="aspecto1"
            formikProps={formikProps}
            placeholder={"Aspecto"}
          />
          <Input
            inputName="aspecto2"
            formikProps={formikProps}
            placeholder={"Aspecto"}
          />
          <Input
            inputName="aspecto3"
            formikProps={formikProps}
            placeholder={"Aspecto"}
          />
          <BoxedTitle title="Estilos" />
          <StylesSlider formikProps={formikProps} inputName="cauto" />
          <StylesSlider formikProps={formikProps} inputName="furtivo" />
          <StylesSlider formikProps={formikProps} inputName="ingenioso" />
          <StylesSlider formikProps={formikProps} inputName="llamativo" />
          <StylesSlider formikProps={formikProps} inputName="rapido" />
          <StylesSlider formikProps={formikProps} inputName="vigoroso" />
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

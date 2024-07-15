import { Pressable, ScrollView, Image, StyleSheet } from "react-native";
import { Formik } from "formik";
import * as Yup from "yup";
import BoxedTitle from "../components/BoxedTitle";
import Input from "../components/Input";
import StylesSlider from "../components/StylesSlider";
import IconedButton from "../components/IconedButton";
import { useDispatch, useSelector } from "react-redux";
import { addCharacter } from "../features/CharacterSlice";
import { usePostChararacterMutation } from "../services/characterServices";
import addImage from "../../assets/images/addImage.png";

export default function CreateCharacterScreen({ navigation }) {
  const dispatch = useDispatch();
  const ownerId = useSelector((state) => state.user.value.userId);
  const image = useSelector((state) => state.image.image);
  const [trigger] = usePostChararacterMutation();
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
    avatar: null,
    stress1: false,
    stress2: false,
    stress3: false,
    consecuencia2: "",
    consecuencia4: "",
    consecuencia6: "",
    recuperacion: 3,
    puntosFate: 3,
  };
  const validationSchema = Yup.object().shape({
    nombre: Yup.string().required("Campo requerido"),
    descripcion: Yup.string().required("Campo requerido"),
    aspectoPrincipal: Yup.string().required("Campo requerido"),
    complicacion: Yup.string().required("Campo requerido"),
  });

  const handleSubmit = (values) => {
    //dispatch de la acción addCharacter con los valores del formulario
    dispatch(addCharacter({ ...values, ownerId }));
    //llamada a la mutación para enviar los datos a la base de datos
    trigger({ ...values, ownerId, avatar: image });
  };

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleSubmit}
      validationSchema={validationSchema}
    >
      {(formikProps) => (
        <ScrollView>
          <BoxedTitle title="Identidad" />
          {/* -------- */}
          <Pressable
            style={({ pressed }) => ({
              opacity: pressed ? 0.5 : 1,
            })}
            onPress={() => navigation.navigate("ImageSelectorScreen")}
          >
            {image ? (
              <Image
                source={{ uri: image }}
                style={styles.avatar}
                resizeMode="cover"
              />
            ) : (
              <Image
                source={addImage}
                style={styles.avatar}
                resizeMode="cover"
              />
            )}
          </Pressable>

          {/* ------------- */}
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
const styles = StyleSheet.create({
  avatar: {
    width: 100,
    height: 100,
    borderRadius: 50,
    alignSelf: "center",
    marginBottom: 20,
  },
});

import { Pressable, ScrollView, Image, StyleSheet, View } from "react-native";
import { Formik } from "formik";
import * as Yup from "yup";
import BoxedTitle from "../components/BoxedTitle";
import Input from "../components/Input";
import StylesSlider from "../components/StylesSlider";
import IconedButton from "../components/IconedButton";
import { useDispatch, useSelector } from "react-redux";
import { setCharacter } from "../features/CharacterSlice";
import { usePostChararacterMutation } from "../services/characterServices";
import addImage from "../../assets/images/addImage.png";
import InfoAlert from "../components/InfoAlert";
import uuid from "react-native-uuid";
import { clearImage } from "../features/ImageSlice";

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
    dispatch(setCharacter({ ...values, ownerId }));
    trigger({ ...values, ownerId, avatar: image, id: uuid.v4() });
    dispatch(clearImage());
    navigation.goBack();
  };

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleSubmit}
      validationSchema={validationSchema}
    >
      {(formikProps) => (
        <ScrollView showsVerticalScrollIndicator={false}>
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
          <View style={styles.block}>
            <Input
              inputName="nombre"
              formikProps={formikProps}
              placeholder={"Nombre"}
            />
            <InfoAlert
              title="Nombre"
              description="Es el nombre que tendrá tu personaje. Ejemplos: Elric de Melniboné,Númenor el Salvaje, Cassandra la bruja oscura"
              examples={[
                "Elric de Melniboné",
                "Númenor el Salvaje",
                "Cassandra la bruja oscura",
              ]}
              navigation={navigation}
              currentPage={9}
            />
          </View>
          <View style={styles.block}>
            <Input
              inputName="descripcion"
              formikProps={formikProps}
              placeholder={"Descripción"}
            />
            <InfoAlert
              title="Descripción"
              description="Es el resumen en un par de palabras acerca de la APARIENCIA de tu personaje en un concepto general"
              examples={[
                "Amanerado reportero del diario 'El Planeta'",
                "Rudo Motociclista con tatuajes en los tatuajes",
                "Robusto tenor de la ópera",
              ]}
              navigation={navigation}
              currentPage={9}
            />
          </View>
          <View style={styles.block}>
            <Input
              inputName="aspectoPrincipal"
              formikProps={formikProps}
              placeholder={"Aspecto Principal"}
            />
            <InfoAlert
              title="Aspecto Principal"
              description="Es un ASPECTO que representa el LEMA de vida de tu personaje, alguna CARACTERÍSTICA personal que lo defina, o una MOTIVACIÓN."
              examples={[
                "Gladiador, esposo de una mujer asesinada, de un hijo asesinado que tedrá su venganza en esa vida o la que sigue",
                "el último Caballero Jedi",
                "Una Robot enviado del futuro para proteger al elegido",
              ]}
              navigation={navigation}
              currentPage={8}
            />
          </View>
          <View style={styles.block}>
            <Input
              inputName="complicacion"
              formikProps={formikProps}
              placeholder={"Complicación"}
            />
            <InfoAlert
              title="Complicación"
              description="Es un ASPECTO que generalmente meterá en problemas a tu personaje. El director del juego o tus compañeros de partida te propondrán eventualmente pagarte una Ficha de destino si aceptas meterte en problemas con tu complicación. Elige sabiamente "
              examples={[
                "Los modales de un puerco",
                "Si es brillante debe ser mío",
                "Nada como insultar al hombre más peligroso del barrio para sentirme vivo",
                "no puedo evitar gritar cuando intento pasar desapercibido",
              ]}
              navigation={navigation}
              currentPage={9}
            />
          </View>
          <BoxedTitle title="Aspectos" />
          <View style={styles.block}>
            <Input
              inputName="aspecto1"
              formikProps={formikProps}
              placeholder={"Aspecto"}
            />
            <InfoAlert
              title="Aspectos"
              description="un ASPECTO es una CARACTERÍSTICA de tu personaje que puede ser usada para obtener ventajas en la partida a cambio de activarlas con puntos de destino. También sirven para asentar HECHOS"
              examples={[
                "Sino lo sé algo he leído al respecto",
                "Los reflejos de un gato",
                "El mejor amigo de un perro",
                "portador de la espada del destino",
              ]}
              navigation={navigation}
              currentPage={25}
            />
          </View>
          <View style={styles.block}>
            <Input
              inputName="aspecto2"
              formikProps={formikProps}
              placeholder={"Aspecto"}
            />
            <InfoAlert
              title="Aspectos"
              description="un ASPECTO es una CARACTERÍSTICA de tu personaje que puede ser usada para obtener ventajas en la partida a cambio de activarlas con puntos de destino. También sirven para asentar HECHOS"
              examples={[
                "Sino lo sé algo he leído al respecto",
                "Los reflejos de un gato",
                "El mejor amigo de un perro",
                "portador de la espada del destino",
              ]}
              navigation={navigation}
              currentPage={25}
            />
          </View>
          <View style={styles.block}>
            <Input
              inputName="aspecto3"
              formikProps={formikProps}
              placeholder={"Aspecto"}
            />
            <InfoAlert
              title="Aspectos"
              description="un ASPECTO es una CARACTERÍSTICA de tu personaje que puede ser usada para obtener ventajas en la partida a cambio de activarlas con puntos de destino. También sirven para asentar HECHOS"
              examples={[
                "Sino lo sé algo he leído al respecto",
                "Los reflejos de un gato",
                "El mejor amigo de un perro",
                "portador de la espada del destino",
              ]}
              navigation={navigation}
              currentPage={25}
            />
          </View>
          <BoxedTitle title="Estilos" />
          <View style={styles.block}>
            <StylesSlider formikProps={formikProps} inputName="cauto" />
            <InfoAlert
              title="Estilo Cauto"
              description="Representa lo MINUCIOSO que es tu personaje para realizar acciones como por ejemplo caminar con cuidado en un terreno complicado o cortar los cables de una bomba antes de que explote."
              examples={[
                "La puntuación que le puedes asignar va de 0 a 3, sabiendo que de todos tus 6 Estilos deben quedar | 1 = 0 (Mediocre) | 2 = 1 (Normal) | 2 = 2 (Bueno) | 1 = 3 (Grande) |",
              ]}
              navigation={navigation}
              currentPage={17}
            />
          </View>
          <View style={styles.block}>
            <StylesSlider formikProps={formikProps} inputName="furtivo" />
            <InfoAlert
              title="Estilo Furtivo"
              description="Representa lo SIGILOSO que es tu personaje para realizar acciones como por ejemplo colarte en una fiesta sin ser invitado. "
              examples={[
                "La puntuación que le puedes asignar va de 0 a 3, sabiendo que de todos tus 6 Estilos deben quedar | 1 = 0 (Mediocre) | 2 = 1 (Normal) | 2 = 2 (Bueno) | 1 = 3 (Grande) |",
              ]}
              navigation={navigation}
              currentPage={18}
            />
          </View>
          <View style={styles.block}>
            <StylesSlider formikProps={formikProps} inputName="ingenioso" />
            <InfoAlert
              InfoAlert
              title="Estilo Ingenioso"
              description="Representa tu capacidad de RESOLVER PROBLEMAS CON INTELIGENCIA para realizar acciones como por ejemplo hackear la pc del CEO de la empresa o descifrar el mensaje oculto en la carta del difunto."
              examples={[
                "La puntuación que le puedes asignar va de 0 a 3, sabiendo que de todos tus 6 Estilos deben quedar | 1 = 0 (Mediocre) | 2 = 1 (Normal) | 2 = 2 (Bueno) | 1 = 3 (Grande) |",
              ]}
              navigation={navigation}
              currentPage={18}
            />
          </View>
          <View style={styles.block}>
            <StylesSlider formikProps={formikProps} inputName="llamativo" />
            <InfoAlert
              title="Estilo Llamativo"
              description="Representa tu ASPECO FÍSICO, CARISMA y AUDACIA para realizar acciones como por ejemplo humillar a tu contrincante en un duelo de freestyle, asestar una patada con triple salto mortal, o subir la moral de tu ejército con un discurso inspirador."
              examples={[
                "La puntuación que le puedes asignar va de 0 a 3, sabiendo que de todos tus 6 Estilos deben quedar | 1 = 0 (Mediocre) | 2 = 1 (Normal) | 2 = 2 (Bueno) | 1 = 3 (Grande) |",
              ]}
              navigation={navigation}
              currentPage={18}
            />
          </View>
          <View style={styles.block}>
            <StylesSlider formikProps={formikProps} inputName="rapido" />
            <InfoAlert
              title="Estilo Rápido"
              description="Representa tu VELOCIDAD, COORDINACIÓN y AGILIDAD para realizar acciones como por ejemplo Esquivar un golpe, correr por un callejón lleno de obstáculos o saltar de un edificio a otro."
              examples={[
                "La puntuación que le puedes asignar va de 0 a 3, sabiendo que de todos tus 6 Estilos deben quedar | 1 = 0 (Mediocre) | 2 = 1 (Normal) | 2 = 2 (Bueno) | 1 = 3 (Grande) |",
              ]}
              navigation={navigation}
              currentPage={18}
            />
          </View>
          <View style={styles.block}>
            <StylesSlider formikProps={formikProps} inputName="vigoroso" />
            <InfoAlert
              title="Estilo Vigoroso"
              description="Representa tu FUERZA y POTENCIA FÍSICA para realizar acciones como por ejemplo abrir una puerta de una patada, talar un arbol, levantar un vehículo."
              examples={[
                "La puntuación que le puedes asignar va de 0 a 3, sabiendo que de todos tus 6 Estilos deben quedar | 1 = 0 (Mediocre) | 2 = 1 (Normal) | 2 = 2 (Bueno) | 1 = 3 (Grande) |",
              ]}
              navigation={navigation}
              currentPage={18}
            />
          </View>
          <BoxedTitle title="Proezas" />
          <View style={styles.block}>
            <Input
              inputName="proeza1"
              formikProps={formikProps}
              placeholder={"Proeza"}
              multiline={true}
            />

            <InfoAlert
              title="PROEZA 1"
              description="Las proezas son trucos, maniobras o técnicas que tu personaje conoce o tiene y cambian el modo en el que un estilo funciona para él o ella. Esto significa generalmente, que recibes un bono en ciertas situaciones, aunque en ocasiones te otorguen alguna otra habilidad o característica. Una proeza también puede representar un equipo especializado que te dan una ventaja con respecto a otros personajes."
              examples={[
                "Debido a que soy/tengo [describe algo que te haga excepcional, un objetoo elemento especial de tu equipo o cualquier otra cosa que te permita realizar cosas formidables], recibo un +2 para [elige una acción: Atacar, Defender, Crear una ventaja, Superar] de modo [elige un estilo: Cauto, Furtivo, Ingenioso, Llamativo, Rápido, Vigoroso] cuando [describe una circunstancia].",
              ]}
              navigation={navigation}
              currentPage={31}
            />
          </View>
          <View style={styles.block}>
            <Input
              inputName="proeza2"
              formikProps={formikProps}
              placeholder={"Proeza"}
              multiline={true}
            />
            <InfoAlert
              title="PROEZA 2"
              description="Las proezas son trucos, maniobras o técnicas que tu personaje conoce o tiene y cambian el modo en el que un estilo funciona para él o ella. Esto significa generalmente, que recibes un bono en ciertas situaciones, aunque en ocasiones te otorguen alguna otra habilidad o característica. Una proeza también puede representar un equipo especializado que te dan una ventaja con respecto a otros personajes."
              examples={[
                "Debido a que soy un charlatán de primera, gano un +2 para Crear una ventaja de modo Furtivo cuando converso con alguien.",
              ]}
              navigation={navigation}
              currentPage={31}
            />
          </View>
          <View style={styles.block}>
            <Input
              inputName="proeza3"
              formikProps={formikProps}
              placeholder={"Proeza"}
              multiline={true}
            />
            <InfoAlert
              title="PROEZA 3"
              description="Las proezas son trucos, maniobras o técnicas que tu personaje conoce o tiene y cambian el modo en el que un estilo funciona para él o ella. Esto significa generalmente, que recibes un bono en ciertas situaciones, aunque en ocasiones te otorguen alguna otra habilidad o característica. Una proeza también puede representar un equipo especializado que te dan una ventaja con respecto a otros personajes."
              examples={[
                "Debido a que soy aficionado los puzzles, gano un +2 para Superar obstáculos de modo Ingenioso cuando me encuentro ante un puzzle, un acertijo o un enigma similar.",
              ]}
              navigation={navigation}
              currentPage={31}
            />
          </View>
          <View style={styles.block}>
            <Input
              inputName="proeza4"
              formikProps={formikProps}
              placeholder={"Proeza"}
              multiline={true}
            />
            <InfoAlert
              title="PROEZA 4 (resta un punto de recuperación)"
              description="Las proezas son trucos, maniobras o técnicas que tu personaje conoce o tiene y cambian el modo en el que un estilo funciona para él o ella. Esto significa generalmente, que recibes un bono en ciertas situaciones, aunque en ocasiones te otorguen alguna otra habilidad o característica. Una proeza también puede representar un equipo especializado que te dan una ventaja con respecto a otros personajes."
              examples={[
                "Debido a que soy un duelista de fama mundial, gano un +2 para Atacar de modo Llamativo cuando lucho con mi espada en un duelo.",
              ]}
              navigation={navigation}
              currentPage={31}
            />
          </View>
          <View style={styles.block}>
            <Input
              inputName="proeza5"
              formikProps={formikProps}
              placeholder={"Proeza"}
              multiline={true}
            />
            <InfoAlert
              title="PROEZA 5 (resta un punto de recuperación)"
              description="Las proezas son trucos, maniobras o técnicas que tu personaje conoce o tiene y cambian el modo en el que un estilo funciona para él o ella. Esto significa generalmente, que recibes un bono en ciertas situaciones, aunque en ocasiones te otorguen alguna otra habilidad o característica. Una proeza también puede representar un equipo especializado que te dan una ventaja con respecto a otros personajes."
              examples={[
                "Debido a que tengo un gran escudo normando, gano un +2 para Defender de modo Vigoroso cuando utilizo mi escudo en combate cuerpo a cuerpo.",
              ]}
              navigation={navigation}
              currentPage={31}
            />
          </View>
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
  block: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-start",
    paddingRight: 20,
  },
});

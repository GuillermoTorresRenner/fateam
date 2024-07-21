import React, { useEffect, useState } from "react";
import { StyleSheet, Text, View, Image, Pressable } from "react-native";
import { Formik } from "formik";
import * as Yup from "yup";
import Input from "../components/Input";
import Logo from "../../assets/images/Logo.png";
import { StatusBar } from "expo-status-bar";
import theme from "../theme/Theme";
import { useRegisterMutation } from "../services/authService";

export default RegisterScreen = ({ navigation }) => {
  const [triggerRegister, result] = useRegisterMutation();
  useEffect(() => {
    if (result.isSuccess) {
      navigation.navigate("Login");
    }
  }, [result.isSuccess, navigation]);

  const initialValues = {
    email: "",
    password: "",
    confirmPassword: "",
  };
  const validationSchema = Yup.object().shape({
    email: Yup.string()
      .email("Email inválido")
      .required("Campo requerido")
      .lowercase(),
    password: Yup.string().required("Campo requerido"),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref("password"), null], "Las contraseñas no coinciden")
      .required("Campo requerido"),
  });

  const handleSubmit = (values) => {
    triggerRegister({
      email: values.email,
      password: values.password,
      returnSecureToken: true,
    });
  };

  return (
    <View style={styles.container}>
      <StatusBar hidden />
      <View style={styles.logoContainer}>
        <Image source={Logo} style={styles.logo} />
      </View>
      <Text style={styles.text}>Registro de Usuario</Text>
      <Text style={styles.text2}>ingresa tus credenciales</Text>

      <Formik
        initialValues={initialValues}
        onSubmit={handleSubmit}
        validationSchema={validationSchema}
      >
        {(formikProps) => (
          <View>
            <Input
              inputName="email"
              formikProps={formikProps}
              placeholder={"Email"}
            />
            <Input
              inputName="password"
              formikProps={formikProps}
              placeholder={"Password"}
            />
            <Input
              inputName="confirmPassword"
              formikProps={formikProps}
              placeholder={"Confirma tu Password"}
            />

            <View style={styles.btnContainer}>
              <Pressable
                onPress={formikProps.handleSubmit}
                style={({ pressed }) => ({
                  opacity: pressed ? 0.5 : 1,
                })}
              >
                <View style={styles.btn}>
                  <Text
                    style={{
                      color: theme.colors.white,
                      marginHorizontal: 5,
                    }}
                  >
                    Continuar
                  </Text>
                </View>
              </Pressable>
              <Pressable
                onPress={() => navigation.navigate("Login")}
                style={({ pressed }) => ({
                  opacity: pressed ? 0.5 : 1,
                })}
              >
                <Text style={styles.register}>Volver al Login</Text>
              </Pressable>
            </View>
          </View>
        )}
      </Formik>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    gap: 20,
    paddingHorizontal: "5%",
  },
  logoContainer: {
    alignItems: "center",
    width: "100%",
    marginBottom: 20,
  },
  logo: {
    width: "80%",
    resizeMode: "contain",
  },
  text: {
    color: theme.colors.primary,
    fontFamily: "title_bold",
    fontSize: theme.fontSizes.xl,
    textAlign: "center",
  },
  text2: {
    color: theme.colors.secondary,
    fontFamily: "title_bold",
    fontSize: theme.fontSizes.md,
    textAlign: "center",
  },

  btn: {
    flexDirection: "row",
    alignSelf: "center",
    padding: 5,
    backgroundColor: theme.colors.primary,
    borderRadius: 5,
    alignItems: "center",
    justifyContent: "center",
    width: "80%",
    height: 35,
    shadowColor: theme.colors.primary,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    marginBottom: 30,
  },
  register: {
    color: theme.colors.primary,
    marginHorizontal: 5,
    textAlign: "right",
    marginTop: 2,

    paddingRight: 30,
  },
  btnContainer: {
    justifyContent: "space-between",
    marginTop: 30,
  },
});

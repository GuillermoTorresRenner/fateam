import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  Pressable,
} from "react-native";
import Logo from "../../assets/images/Logo.png";
import { StatusBar } from "expo-status-bar";
import theme from "../theme/Theme";
export default RegisterScreen = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = () => {
    console.log("Email: ", email, " Password: ", password);
    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      <StatusBar hidden />
      <View style={styles.logoContainer}>
        <Image source={Logo} style={styles.logo} />
      </View>
      <Text style={styles.text}>Crea una cuenta</Text>
      <Text style={styles.text2}>ingresa tus datos</Text>

      <View style={{ marginBottom: 60, gap: 10, paddingHorizontal: 20 }}>
        <View style={styles.inputContainer}>
          <TextInput
            placeholder="Ingrese su Nombre"
            style={styles.input}
            placeholderTextColor="grey"
            onChangeText={setEmail}
            value={email}
          />
          <TextInput
            placeholder="Ingrese su Apellido"
            style={styles.input}
            placeholderTextColor="grey"
            onChangeText={setPassword}
            value={password}
            secureTextEntry
          />
          <TextInput
            placeholder="Ingrese su Email"
            style={styles.input}
            placeholderTextColor="grey"
            onChangeText={setPassword}
            value={password}
            secureTextEntry
          />
          <TextInput
            placeholder="Ingrese su Password"
            style={styles.input}
            placeholderTextColor="grey"
            onChangeText={setPassword}
            value={password}
            secureTextEntry
          />
          <TextInput
            placeholder="Repita su Password"
            style={styles.input}
            placeholderTextColor="grey"
            onChangeText={setPassword}
            value={password}
            secureTextEntry
          />
        </View>
        <Pressable onPress={handleSubmit}>
          <View style={styles.btn}>
            <Text style={{ color: Theme.colors.white, marginHorizontal: 5 }}>
              Continuar
            </Text>
          </View>
        </Pressable>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "space-around",
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
    fontSize: theme.fontSizes.md,
    textAlign: "center",
  },
  text2: {
    color: theme.colors.secondary,
    fontFamily: "title",
    fontSize: theme.fontSizes.sm,
    textAlign: "center",
  },
  btnText: {
    color: theme.colors.light,
    textAlign: "center",
  },

  inputContainer: {
    justifyContent: "center",
    marginBottom: 30,
  },
  input: {
    padding: 10,
    marginTop: 10,
    color: theme.colors.light,

    borderWidth: 1,
    borderColor: theme.colors.secondary,
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
    shadowColor: theme.colors.primary,
    shadowOffset: {
      width: 0,
      height: 2,
    },
  },
});

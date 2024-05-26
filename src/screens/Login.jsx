import React, { useState } from "react";
import {
  Button,
  StyleSheet,
  Text,
  View,
  ImageBackground,
  TextInput,
} from "react-native";
import themes from "../styles/themes";
import Background from "../../assets/Background.png";
import { StatusBar } from "expo-status-bar";

const Login = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = () => {
    // Aquí puedes manejar la lógica de submit
    console.log("Email: ", email, " Password: ", password);
  };

  return (
    <View style={styles.container}>
      <StatusBar hidden />
      <ImageBackground source={Background} style={styles.background}>
        <View style={{ marginBottom: 60, gap: 10, paddingHorizontal: 20 }}>
          <View style={styles.inputContainer}>
            <TextInput
              placeholder="Ingrese su Email"
              style={styles.input}
              placeholderTextColor="grey"
              onChangeText={setEmail}
              value={email}
            />
            <TextInput
              placeholder="Ingrese su Password"
              style={styles.input}
              placeholderTextColor="grey"
              onChangeText={setPassword}
              value={password}
              secureTextEntry
            />
          </View>
          <Button
            title="Ingresar"
            onPress={handleSubmit}
            color={themes.colors.secondary}
          />
          <Text style={styles.text}>o</Text>
          <Button
            title="cree una cuenta"
            onPress={handleSubmit}
            color={themes.colors.info}
          />
        </View>
      </ImageBackground>
    </View>
  );
};

export default Login;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  text: {
    color: themes.colors.light,
    textAlign: "center",
  },
  background: {
    flex: 1,
    justifyContent: "flex-end",
  },
  inputContainer: {
    justifyContent: "center",
    marginBottom: 30,
  },
  input: {
    padding: 10,
    marginTop: 10,
    color: themes.colors.light,

    borderWidth: 1,
    borderColor: themes.colors.secondary,
  },
});

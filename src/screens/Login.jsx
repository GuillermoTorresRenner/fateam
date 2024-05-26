import React, { useState } from "react";
import {
  Button,
  StyleSheet,
  Text,
  View,
  ImageBackground,
  TextInput,
} from "react-native";
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
              placeholder="Email"
              style={styles.input}
              placeholderTextColor="grey"
              onChangeText={setEmail}
              value={email}
            />
            <TextInput
              placeholder="Password"
              style={styles.input}
              placeholderTextColor="grey"
              onChangeText={setPassword}
              value={password}
              secureTextEntry
            />
          </View>
          <Button title="Ingresar" onPress={handleSubmit} color="#7f5f1eff" />
          <Text style={styles.text}>o</Text>
          <Button
            title="cree una cuenta"
            onPress={handleSubmit}
            color="rgba(0,0,0,0.0)"
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
    color: "grey",
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
    color: "#fff",

    borderWidth: 1,
    borderColor: "#7f5f1eff",
  },
});

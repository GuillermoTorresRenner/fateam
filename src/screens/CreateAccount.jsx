import React, { useState } from "react";
import {
  Button,
  StyleSheet,
  View,
  ImageBackground,
  TextInput,
} from "react-native";
import Background from "../../assets/Background.png";
import { StatusBar } from "expo-status-bar";

const CreateAccount = ({ navigation }) => {
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
        <View style={{ marginBottom: 40, gap: 5 }}>
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
            <TextInput
              placeholder="Password"
              style={styles.input}
              placeholderTextColor="grey"
              onChangeText={setPassword}
              value={password}
              secureTextEntry
            />
          </View>
          <Button
            title="Crear Cuenta"
            onPress={handleSubmit}
            color="#7f5f1eff"
          />
        </View>
      </ImageBackground>
    </View>
  );
};

export default CreateAccount;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  text: {
    color: "#7f5f1eff",
    textAlign: "center",
    marginTop: 30,
    alignSelf: "flex-center",
    fontSize: 30,
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
    marginHorizontal: 20,
    color: "#fff",

    borderWidth: 1,
    borderColor: "#7f5f1eff",
  },
});

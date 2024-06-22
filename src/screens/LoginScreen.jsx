import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  Pressable,
} from "react-native";
import { AntDesign } from "@expo/vector-icons";
import theme from "../theme/Theme";
import Logo from "../../assets/images/Logo.png";
import { StatusBar } from "expo-status-bar";
import Theme from "../theme/Theme";
import Tabs from "../Navigation/Tabs";
export default LoginScreen = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = () => {
    console.log("Email: ", email, " Password: ", password);
    navigation.navigate("Tabs");
  };

  return (
    <View style={styles.container}>
      <StatusBar hidden />
      <Image source={Logo} style={styles.logo} />

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
        <Pressable onPress={handleSubmit}>
          <View style={styles.btn}>
            <AntDesign name="google" size={24} color={Theme.colors.light} />
            <Text style={{ color: Theme.colors.light, marginHorizontal: 5 }}>
              Ingresar
            </Text>
          </View>
        </Pressable>
        <Pressable onPress={() => navigation.navigate("Register")}>
          <View style={styles.btn}>
            <AntDesign name="google" size={24} color={Theme.colors.light} />
            <Text style={{ color: Theme.colors.light, marginHorizontal: 5 }}>
              Register
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
  },
  logo: {
    alignSelf: "center",

    marginVertical: 50,
  },
  text: {
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
    backgroundColor: theme.colors.dark,
    borderRadius: 5,
    alignItems: "center",
    justifyContent: "center",
    width: "50%",
    shadowColor: theme.colors.primary,
    shadowOffset: {
      width: 0,
      height: 2,
    },
  },
});

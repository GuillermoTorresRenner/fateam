import { StyleSheet, View, ScrollView, TouchableOpacity } from "react-native";
import React from "react";
import Fab from "../components/Fab";

const CharactersScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <ScrollView style={styles.scrollView}></ScrollView>
      <Fab goto={"Crear Personaje"} navigation={navigation} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scrollView: {
    flex: 1,
  },
});

export default CharactersScreen;

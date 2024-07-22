import React, { useState } from "react";
import { Modal, StyleSheet, Text, View, Pressable } from "react-native";
import { Entypo } from "@expo/vector-icons";
import Theme from "../theme/Theme";

export default function InfoAlert({
  title,
  description,
  examples,
  navigation,
  currentPage = 0,
}) {
  const [modalVisible, setModalVisible] = useState(false);
  const searchInRuleBook = () => {
    setModalVisible(false);
    navigation.navigate("RulesScreen", { currentPage });
  };
  return (
    <View style={styles.centeredView}>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(!modalVisible);
        }}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.title}>{title}</Text>
            <Text style={styles.description}>{description}</Text>
            {examples && examples.length > 0 && (
              <Text style={styles.subtitle}>Ejemplos:</Text>
            )}
            {examples &&
              examples.map((example, index) => (
                <Text key={index} style={styles.example}>
                  ✅ {example}
                </Text>
              ))}

            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                borderTopColor: Theme.colors.white,
                borderTopWidth: 1,
                marginTop: 20,
              }}
            >
              <Pressable
                style={({ pressed }) => ({
                  ...styles.button,
                  ...styles.buttonInfo,
                  opacity: pressed ? 0.5 : 1,
                })}
                onPress={searchInRuleBook}
              >
                <Text style={styles.textStyle}>Ver Manual</Text>
              </Pressable>
              <Pressable
                style={({ pressed }) => ({
                  ...styles.button,
                  ...styles.buttonClose,
                  opacity: pressed ? 0.5 : 1,
                })}
                onPress={() => setModalVisible(!modalVisible)}
              >
                <Text style={styles.textStyle}>Cerrar</Text>
              </Pressable>
            </View>
          </View>
        </View>
      </Modal>
      <Pressable
        onPress={() => setModalVisible(true)}
        style={({ pressed }) => ({
          ...styles.btn,
          opacity: pressed ? 0.5 : 1,
        })}
      >
        <Entypo
          name="info-with-circle"
          size={25}
          color={Theme.colors.tertiary}
        />
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    backgroundColor: Theme.colors.tertiary,
    borderRadius: 20,
    padding: 35,
    alignItems: "left",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  title: {
    color: Theme.colors.primary,
    marginBottom: 15,
    textAlign: "center",
    fontWeight: "bold",
    fontSize: Theme.fontSizes.md,
    textTransform: "uppercase",
    textDecorationLine: "underline",
  },
  subtitle: {
    color: Theme.colors.primary,
    marginVertical: 10,
    textAlign: "left",
    fontWeight: "bold",
    fontSize: Theme.fontSizes.sm,
    textTransform: "uppercase",
    textDecorationLine: "underline",
  },
  description: {
    marginBottom: 15,
    textAlign: "left",
    fontStyle: "italic",
    color: Theme.colors.light,
    //agrega sangría
  },
  example: {
    marginBottom: 5,
    textAlign: "left",
    color: Theme.colors.light,
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
    width: 100,
    alignSelf: "center",
    marginTop: 20,
  },
  buttonClose: {
    backgroundColor: Theme.colors.danger,
  },
  buttonInfo: {
    backgroundColor: Theme.colors.success,
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
  },
  btn: {
    marginLeft: 15,
  },
});

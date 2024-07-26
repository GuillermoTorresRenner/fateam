import { Pressable, StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import { deleteSession } from "../persistence";
import Theme from "../theme/Theme";
import { SimpleLineIcons } from "@expo/vector-icons";
import { useDispatch } from "react-redux";
import { clearUser } from "../features/UserSlice";

export default Header = ({ title }) => {
  const [dropDown, setDropDown] = useState(false);
  const dispatch = useDispatch();
  const logout = async () => {
    dispatch(clearUser());
    await deleteSession();
  };
  const handleDropDown = () => {
    setDropDown(!dropDown);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.text}>{title}</Text>
      <Pressable
        style={({ pressed }) => ({
          ...styles.option,
          opacity: pressed ? 0.5 : 1,
        })}
        onPress={handleDropDown}
      >
        <SimpleLineIcons
          name="options-vertical"
          size={20}
          color={Theme.colors.white}
        />
      </Pressable>
      {dropDown && (
        <Pressable
          onPress={logout}
          style={({ pressed }) => ({
            ...styles.optionsBox,
            opacity: pressed ? 0.5 : 1,
          })}
        >
          <Text style={{ textAlign: "center", color: Theme.colors.light }}>
            logout
          </Text>
        </Pressable>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: 60,
    backgroundColor: Theme.colors.secondary,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    shadowColor: Theme.colors.black,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.5,
    shadowRadius: 3.84,
    elevation: 20,
  },
  text: {
    color: Theme.colors.white,
    fontSize: Theme.fontSizes.md,
    width: "80%",
    textAlign: "center",
    marginLeft: "10%",
  },
  option: {
    width: "10%",
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  optionsBox: {
    width: "40%",
    height: "50%",
    borderRadius: 2,
    backgroundColor: Theme.colors.secondary,
    position: "absolute",
    top: 60,
    right: 0,
    shadowColor: Theme.colors.black,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.5,
    shadowRadius: 3.84,
    elevation: 20,
  },
});

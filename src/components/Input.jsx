import { StyleSheet, TextInput, View, Text } from "react-native";
import Theme from "../theme/Theme";

export default Input = ({
  formikProps,
  placeholder,
  inputName,
  multiline = false,
}) => {
  const { handleChange, handleBlur, values, errors, touched } = formikProps;

  return (
    <>
      {multiline ? (
        <View style={styles.container}>
          <TextInput
            onChangeText={handleChange(inputName)}
            onBlur={handleBlur(inputName)}
            value={values[inputName]}
            style={styles.inputMultiLine}
            multiline={true}
            numberOfLines={3}
            secureTextEntry={
              inputName === "password" || inputName === "confirmPassword"
                ? true
                : false
            }
          />
          <View style={styles.subtitles}>
            <Text style={styles.text}>{placeholder}</Text>
            {touched[inputName] && errors[inputName] && (
              <Text style={styles.errors}>{errors[inputName]}</Text>
            )}
          </View>
        </View>
      ) : (
        <View style={styles.container}>
          <TextInput
            onChangeText={handleChange(inputName)}
            onBlur={handleBlur(inputName)}
            value={values[inputName]}
            style={styles.input}
            secureTextEntry={
              inputName === "password" || inputName === "confirmPassword"
                ? true
                : false
            }
          />
          <View style={styles.subtitles}>
            <Text style={styles.text}>{placeholder}</Text>
            {touched[inputName] && errors[inputName] && (
              <Text style={styles.errors}>{errors[inputName]}</Text>
            )}
          </View>
        </View>
      )}
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: 20,
    width: "85%",
  },
  input: {
    height: 35,
    marginHorizontal: 12,
    borderBottomWidth: 1,
    borderColor: Theme.colors.tertiary,
    padding: 10,
  },
  inputMultiLine: {
    height: 70,
    marginHorizontal: 12,
    borderBottomWidth: 1,
    borderColor: Theme.colors.tertiary,
    padding: 10,
  },
  errors: {
    color: Theme.colors.danger,
    fontSize: Theme.fontSizes.sm,
    marginHorizontal: 12,
  },
  text: {
    color: Theme.colors.tertiary,
    fontSize: Theme.fontSizes.sm,
    marginHorizontal: 12,
  },
  subtitles: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
});

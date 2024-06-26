import Navigator from "./src/Navigation/Navigator";
import { fonts } from "./src/theme/Theme";
import { useFonts } from "expo-font";
import { Provider } from "react-redux";
import store from "./src/store/";
import { SafeAreaView, Platform, StyleSheet } from "react-native";
import Theme from "./src/theme/Theme";
import Constant from "expo-constants";
export default function App() {
  const [fontsLoaded] = useFonts(fonts);
  if (!fontsLoaded) {
    return null;
  }
  return (
    <SafeAreaView style={styles.container}>
      <Provider store={store}>
        <Navigator />
      </Provider>
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  container: {
    marginTop: Platform.OS === "android" ? Constant.statusBarHeight : 0,
    flex: 1,
    backgroundColor: Theme.colors.primary,
  },
});

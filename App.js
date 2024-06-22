import "react-native-gesture-handler";
import Navigator from "./src/Navigation/Navigator";
import { fonts } from "./src/theme/Theme";
import { useFonts } from "expo-font";
import { Provider } from "react-redux";
import store from "./src/store/";

export default function App() {
  const [fontsLoaded] = useFonts(fonts);
  if (!fontsLoaded) {
    return null;
  }
  return (
    <Provider store={store}>
      <Navigator />
    </Provider>
  );
}

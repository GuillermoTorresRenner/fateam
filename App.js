import "react-native-gesture-handler";
import Navigator from "./src/Navigation/Navigator";
import { fonts } from "./src/theme/Theme";
import { useFonts } from "expo-font";

export default function App() {
  const [fontsLoaded] = useFonts(fonts);
  if (!fontsLoaded) {
    return null;
  }
  return <Navigator />;
}

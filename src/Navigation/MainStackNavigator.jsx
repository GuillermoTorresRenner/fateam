import { createNativeStackNavigator } from "@react-navigation/native-stack";
import LoginScreen from "../screens/LoginScreen";
import RegisterScreen from "../screens/RegisterScreen";
import CreateCharacterScreen from "../screens/CreateCharacterScreen";
import CharacterDetailScreen from "../screens/CharacterDetailScreen";
import CharacterStackNavigator from "./CharacterStackNavigator";

const Stack = createNativeStackNavigator();

export default function MainStackNavigator() {
  return (
    <Stack.Navigator
      initialRouteName="Personajes"
      screenOptions={{ headerShown: false }}
    >
      {/* //Volver a habilitar estas pantanllas CUANDO VEAMOS LOGIN Y REGISTER */}
      {/* <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="Register" component={RegisterScreen} /> */}
      <Stack.Screen
        name="CharacterStackNavigator"
        component={CharacterStackNavigator}
      />
      <Stack.Screen
        name="CreateCharacterScreen"
        component={CreateCharacterScreen}
      />
      <Stack.Screen
        name="CharacterDetailScreen"
        component={CharacterDetailScreen}
      />
    </Stack.Navigator>
  );
}

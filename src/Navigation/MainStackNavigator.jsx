import { createNativeStackNavigator } from "@react-navigation/native-stack";
import LoginScreen from "../screens/LoginScreen";
import RegisterScreen from "../screens/RegisterScreen";
import CreateCharacterScreen from "../screens/CreateCharacterScreen";
import CharacterDetailScreen from "../screens/CharacterDetailScreen";
import CharacterStackNavigator from "./CharacterStackNavigator";
import ImageSelectorScreen from "../screens/ImageSelectorScreen";

const Stack = createNativeStackNavigator();

export default function MainStackNavigator() {
  return (
    <Stack.Navigator
      initialRouteName="Personajes"
      screenOptions={{ headerShown: false }}
    >
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
      <Stack.Screen
        name="ImageSelectorScreen"
        component={ImageSelectorScreen}
      />
    </Stack.Navigator>
  );
}

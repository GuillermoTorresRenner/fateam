import { createNativeStackNavigator } from "@react-navigation/native-stack";
import CreateCharacterScreen from "../screens/CreateCharacterScreen";
import CharacterStackNavigator from "./CharacterStackNavigator";
import ImageSelectorScreen from "../screens/ImageSelectorScreen";
import BottomTabNavigator from "./BottomTabNavigator";
import RulesScreen from "../screens/RulesScreen";
import EditCharacterScreen from "../screens/EditCharacterScreen";

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
        name="ImageSelectorScreen"
        component={ImageSelectorScreen}
      />
      <Stack.Screen
        name="EditCharacterScreen"
        component={EditCharacterScreen}
      />
      <Stack.Screen name="RulesScreen" component={RulesScreen} />
      <Stack.Screen name="playScreen" component={BottomTabNavigator} />
    </Stack.Navigator>
  );
}

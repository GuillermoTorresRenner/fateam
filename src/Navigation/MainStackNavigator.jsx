import { createNativeStackNavigator } from "@react-navigation/native-stack";
import CreateCharacterScreen from "../screens/CreateCharacterScreen";
import ImageSelectorScreen from "../screens/ImageSelectorScreen";
import BottomTabNavigator from "./BottomTabNavigator";
import RulesScreen from "../screens/RulesScreen";
import EditCharacterScreen from "../screens/EditCharacterScreen";
import CreateNotesScreen from "../screens/CreateNotesScreen";
import Header from "../components/Header";
import CharactersScreen from "../screens/CharactersScreen";
import EditNoteScreen from "../screens/EditNotesScreen";

const Stack = createNativeStackNavigator();

export default function MainStackNavigator() {
  return (
    <Stack.Navigator
      initialRouteName="Personajes"
      screenOptions={{ headerShown: false }}
    >
      <Stack.Screen
        name="CharacterScreen"
        component={CharactersScreen}
        options={{
          headerShown: true,
          header: () => <Header title={"Personajes"} />,
        }}
      />
      <Stack.Screen
        name="CreateCharacterScreen"
        component={CreateCharacterScreen}
        options={{
          headerShown: true,
          header: () => <Header title={"Creación de Personaje"} />,
        }}
      />

      <Stack.Screen
        name="ImageSelectorScreen"
        component={ImageSelectorScreen}
        options={{
          headerShown: true,
          header: () => <Header title={"Seleccion de Avatar"} />,
        }}
      />
      <Stack.Screen
        name="EditCharacterScreen"
        component={EditCharacterScreen}
        options={{
          headerShown: true,
          header: () => <Header title={"Editar Personaje"} />,
        }}
      />
      <Stack.Screen name="RulesScreen" component={RulesScreen} />
      <Stack.Screen
        name="CreateNoteScreen"
        options={{
          headerShown: true,
          header: () => <Header title={"Crear nueva nota"} />,
        }}
        component={CreateNotesScreen}
      />
      <Stack.Screen
        name="EditNoteScreen"
        options={{
          headerShown: true,
          header: () => <Header title={"Editar Nota"} />,
        }}
        component={EditNoteScreen}
      />

      <Stack.Screen name="playScreen" component={BottomTabNavigator} />
    </Stack.Navigator>
  );
}

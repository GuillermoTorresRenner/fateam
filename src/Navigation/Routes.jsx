import { createNativeStackNavigator } from "@react-navigation/native-stack";
import LoginScreen from "../screens/LoginScreen";
import RegisterScreen from "../screens/RegisterScreen";
import Tabs from "./Tabs";
import CharactersScreen from "../screens/CharactersScreen";
import CampaignsScreen from "../screens/CampaignsScreen";
import DicesScreen from "../screens/DicesScreen";
import NotesScreen from "../screens/NotesScreen";
import CreateCharacterScreen from "../screens/CreateCharacterScreen";
import Theme from "../theme/Theme";
import CharacterDetail from "../screens/CharacterDetail";

const Stack = createNativeStackNavigator();

//Funcionalidad Main - grupo de pantallas navegables fuera del tab
export function MainNavigator() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        headerStyle: { backgroundColor: Theme.colors.tertiary },
        headerTintColor: Theme.colors.white,
        headerBackVisible: false,
      }}
    >
      <Stack.Screen name="LoginScreen" component={LoginScreen} />
      <Stack.Screen name="Register" component={RegisterScreen} />
      <Stack.Screen name="Tabs" component={Tabs} />
      <Stack.Screen
        name="Crear Personaje"
        component={CreateCharacterScreen}
        options={{
          headerShown: true,
        }}
      />
      <Stack.Screen
        name="characterDetail"
        component={CharacterDetail}
        options={{
          headerShown: true,
        }}
      />
    </Stack.Navigator>
  );
}

//Personajes
export function CharactersNavigator() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="CharactersScreen" component={CharactersScreen} />
    </Stack.Navigator>
  );
}
//Personajes
export function CampaignsNavigator() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="CampaignsScreen" component={CampaignsScreen} />
    </Stack.Navigator>
  );
}
//Dados
export function DicesNavigator() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="DicesScreen" component={DicesScreen} />
    </Stack.Navigator>
  );
}
//Notas
export function NotesNavigator() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="NotesScreen" component={NotesScreen} />
    </Stack.Navigator>
  );
}

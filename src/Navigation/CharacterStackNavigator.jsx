import { createNativeStackNavigator } from "@react-navigation/native-stack";
import CharactersScreen from "../screens/CharactersScreen";

const Stack = createNativeStackNavigator();

export default CharacterStackNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="CharactersScreen" component={CharactersScreen} />
    </Stack.Navigator>
  );
};

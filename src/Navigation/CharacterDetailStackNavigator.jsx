import { createNativeStackNavigator } from "@react-navigation/native-stack";
import CharacterDetailScreen from "../screens/CharacterDetailScreen";
CharacterDetailScreen;
const Stack = createNativeStackNavigator();

export default CharacterDetailStackNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen
        name="CharacterDetailScreen"
        component={CharacterDetailScreen}
      />
    </Stack.Navigator>
  );
};

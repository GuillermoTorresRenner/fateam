import { createNativeStackNavigator } from "@react-navigation/native-stack";
import NotesScreen from "../screens/NotesScreen";

const Stack = createNativeStackNavigator();

export default NotesStackNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="NotesScreen" component={NotesScreen} />
    </Stack.Navigator>
  );
};

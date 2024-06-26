import { createNativeStackNavigator } from "@react-navigation/native-stack";
import DicesScreen from "../screens/DicesScreen";

const Stack = createNativeStackNavigator();

export default DiceStackNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="DicesScreen" component={DicesScreen} />
    </Stack.Navigator>
  );
};

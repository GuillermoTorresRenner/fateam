import { createNativeStackNavigator } from "@react-navigation/native-stack";
import RulesScreen from "../screens/RulesScreen";

const Stack = createNativeStackNavigator();

export default RulesStackNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="RulesScreen" component={RulesScreen} />
    </Stack.Navigator>
  );
};

import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HealthScreen from "../screens/HealthScreen";

const Stack = createNativeStackNavigator();

export default HealthStackNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="HealthScreen" component={HealthScreen} />
    </Stack.Navigator>
  );
};

import { createNativeStackNavigator } from "@react-navigation/native-stack";

import MisPjsScreen from "../screens/RegisterScreen";
import LoginScreen from "../screens/LoginScreen";
import RegisterScreen from "../screens/RegisterScreen";
import Tabs from "./Tabs";

const Stack = createNativeStackNavigator();

//Tabs
export function MainNavigator() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="LoginScreen" component={LoginScreen} />
      <Stack.Screen name="Register" component={RegisterScreen} />
      <Stack.Screen name="Tabs" component={Tabs} />
    </Stack.Navigator>
  );
}

//Mis Pjs
export function MisPjsNavigator() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="MisPj" component={MisPjsScreen} />
    </Stack.Navigator>
  );
}

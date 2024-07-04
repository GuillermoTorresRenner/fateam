import { createNativeStackNavigator } from "@react-navigation/native-stack";
import MyProfileScreen from "../screens/MyProfileScreen";
import ImageSelectorScreen from "../screens/ImageSelectorScreen";

const Stack = createNativeStackNavigator();

export default MyProfileStackNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="MyProfileScreen" component={MyProfileScreen} />
      <Stack.Screen
        name="ImageSelectorScreen"
        component={ImageSelectorScreen}
      />
    </Stack.Navigator>
  );
};

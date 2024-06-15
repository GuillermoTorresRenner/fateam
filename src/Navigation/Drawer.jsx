import { createDrawerNavigator } from "@react-navigation/drawer";
import { AntDesign } from "@expo/vector-icons";
import HomeStackNavigator from "./HomeStackNavigator";
export default function Drawer() {
  const Drawer = createDrawerNavigator();
  return (
    <Drawer.Navigator>
      <Drawer.Screen
        name="Home"
        component={HomeStackNavigator}
        options={{
          drawerIcon: () => <AntDesign name="home" size={24} color="black" />,
        }}
      />
    </Drawer.Navigator>
  );
}

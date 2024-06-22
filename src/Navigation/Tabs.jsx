import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { AntDesign } from "@expo/vector-icons";

import Theme from "../theme/Theme";
import { MisPjsNavigator } from "./Routes";

export default function Tabs() {
  const Tab = createBottomTabNavigator();
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: true,
        headerTintColor: Theme.colors.light,

        headerStyle: {
          backgroundColor: Theme.colors.tertiary,
        },

        TabStyle: {
          backgroundColor: Theme.colors.tertiary,
          width: "60%",
        },
        TabActiveTintColor: Theme.colors.light,
        TabLabelStyle: {
          color: Theme.colors.light,
        },
      }}
    >
      <Tab.Screen
        name="MisPj"
        component={MisPjsNavigator}
        options={{
          tabBarIcon: ({ color, size }) => (
            <AntDesign name="home" size={size} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

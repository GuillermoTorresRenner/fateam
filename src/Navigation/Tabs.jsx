import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { FontAwesome5 } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import Theme from "../theme/Theme";
import {
  CampaignsNavigator,
  CharactersNavigator,
  DicesNavigator,
  NotesNavigator,
} from "./Routes";

export default function Tabs() {
  const Tab = createBottomTabNavigator();
  return (
    <Tab.Navigator
      initialRouteName="Personajes"
      screenOptions={{
        headerShown: true,
        headerTintColor: Theme.colors.white,
        headerStyle: {
          backgroundColor: Theme.colors.tertiary,
        },
        tabBarInactiveTintColor: Theme.colors.tertiary,
        tabBarActiveTintColor: Theme.colors.primary,
        tabBarLabelStyle: {
          fontSize: Theme.fontSizes.sm,
          fontWeight: "bold",
        },
      }}
    >
      <Tab.Screen
        name="Personajes"
        component={CharactersNavigator}
        options={{
          tabBarIcon: ({ color }) => (
            <FontAwesome name="id-card" size={24} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Campañas"
        component={CampaignsNavigator}
        options={{
          tabBarIcon: ({ color }) => (
            <Ionicons name="compass" size={24} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Dados"
        component={DicesNavigator}
        options={{
          tabBarIcon: ({ color }) => (
            <FontAwesome5 name="dice-d6" size={24} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Notas"
        component={NotesNavigator}
        options={{
          tabBarIcon: ({ color }) => (
            <FontAwesome5 name="pencil-alt" size={24} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

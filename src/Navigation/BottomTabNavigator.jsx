import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { FontAwesome5 } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import Theme from "../theme/Theme";
import MainStackNavigator from "./MainStackNavigator";
import CampaignStackNavigator from "./CampaignStackNavigator";
import DiceStackNavigator from "./DiceStackNavigator";
import NotesStackNavigator from "./NotesStackNavigator";
import Header from "../components/Header";
import MyProfileStackNavigator from "./MyProfileStackNavigator";

const Tab = createBottomTabNavigator();
export default function BottomTabNavigator() {
  return (
    <Tab.Navigator
      //agregar un header componentizado custom
      initialRouteName="Personajes"
      screenOptions={({ route }) => ({
        header: () => <Header title={route.name} />,
      })}
    >
      <Tab.Screen
        name="Personajes"
        component={MainStackNavigator}
        options={{
          tabBarIcon: ({ color }) => (
            <FontAwesome name="id-card" size={24} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Campañas"
        component={CampaignStackNavigator}
        options={{
          tabBarIcon: ({ color }) => (
            <Ionicons name="compass" size={24} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Dados"
        component={DiceStackNavigator}
        options={{
          tabBarIcon: ({ color }) => (
            <FontAwesome5 name="dice-d6" size={24} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Notas"
        component={NotesStackNavigator}
        options={{
          tabBarIcon: ({ color }) => (
            <FontAwesome5 name="pencil-alt" size={24} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={MyProfileStackNavigator}
        options={{
          tabBarIcon: ({ color }) => (
            <FontAwesome5 name="user-alt" size={24} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

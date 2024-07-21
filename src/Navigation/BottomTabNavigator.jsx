import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { FontAwesome5 } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import DiceStackNavigator from "./DiceStackNavigator";
import NotesStackNavigator from "./NotesStackNavigator";
import Header from "../components/Header";
import RulesStackNavigator from "./RulesStackNavigator";
import CharacterDetailStackNavigator from "./CharacterDetailStackNavigator";
import HealthStackNavigator from "./HealthStackNavigator";

const Tab = createBottomTabNavigator();
export default function BottomTabNavigator() {
  return (
    <Tab.Navigator
      //agregar un header componentizado custom
      initialRouteName="Ficha"
      screenOptions={({ route }) => ({
        header: () => <Header title={route.name} />,
      })}
    >
      {/* <Tab.Screen
        name="Ficha"
        component={MainStackNavigator}
        options={{
          tabBarIcon: ({ color }) => (
            <FontAwesome name="id-card" size={24} color={color} />
          ),
        }}
      /> */}
      <Tab.Screen
        name="Ficha de Personaje"
        component={CharacterDetailStackNavigator}
        options={{
          tabBarIcon: ({ color }) => (
            <FontAwesome name="id-card" size={24} color={color} />
          ),
        }}
      />

      <Tab.Screen
        name="Salud"
        component={HealthStackNavigator}
        options={{
          tabBarIcon: ({ color }) => (
            <FontAwesome5 name="heartbeat" size={24} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Acciones"
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
      {/* <Tab.Screen
        name="Profile"
        component={MyProfileStackNavigator}
        options={{
          tabBarIcon: ({ color }) => (
            <FontAwesome5 name="user-alt" size={24} color={color} />
          ),
        }}
      /> */}

      <Tab.Screen
        name="Manual Reglas"
        component={RulesStackNavigator}
        options={{
          tabBarIcon: ({ color }) => (
            <Ionicons name="book" size={24} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

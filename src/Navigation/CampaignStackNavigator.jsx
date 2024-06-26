import { createNativeStackNavigator } from "@react-navigation/native-stack";
import CampaignsScreen from "../screens/CampaignsScreen";

const Stack = createNativeStackNavigator();

export default CampaignStackNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="CampaignsScreen" component={CampaignsScreen} />
    </Stack.Navigator>
  );
};

import { NavigationContainer } from "@react-navigation/native";

import Drawer from "./Drawer";

// const Stack = createNativeStackNavigator();

const Navigator = () => {
  return (
    <NavigationContainer>
      <Drawer />
    </NavigationContainer>
  );
};

export default Navigator;

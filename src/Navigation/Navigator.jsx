import { NavigationContainer } from "@react-navigation/native";
import { MainNavigator } from "./Routes";

const Navigator = () => {
  return (
    <NavigationContainer>
      <MainNavigator />
    </NavigationContainer>
  );
};

export default Navigator;

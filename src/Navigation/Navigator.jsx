import { NavigationContainer } from "@react-navigation/native";
import BottomTabNavigator from "./BottomTabNavigator";
import AuthStackNavigator from "./AuthStackNavigator";
import { useDispatch, useSelector } from "react-redux";
import { setUser } from "../features/UserSlice";
import { getSession } from "../persistence";
import MainStackNavigator from "./MainStackNavigator";

const Navigator = () => {
  const user = useSelector((state) => state.user.value);
  const dispatch = useDispatch();
  (async () => {
    try {
      const { email, token, userId } = await getSession();
      if (!email || !token || !userId) return;
      dispatch(setUser({ email, token, userId }));
    } catch (error) {
      console.log(error);
    }
  })();

  return (
    <NavigationContainer>
      {user?.user ? <MainStackNavigator /> : <AuthStackNavigator />}
    </NavigationContainer>
  );
};

export default Navigator;

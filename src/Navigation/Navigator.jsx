import { NavigationContainer } from "@react-navigation/native";
import BottomTabNavigator from "./BottomTabNavigator";
import AuthStackNavigator from "./AuthStackNavigator";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { setUser } from "../features/UserSlice";
import { getSession } from "../persistence";
import MainStackNavigator from "./MainStackNavigator";

const Navigator = () => {
  const user = useSelector((state) => state.user.value);
  const dispatch = useDispatch();
  (async () => {
    try {
      const data = await getSession();
      dispatch(
        setUser({ email: data.email, token: data.token, userId: data.userId })
      );
    } catch (error) {
      console.log(error);
    }
  })();

  return (
    <NavigationContainer>
      {/* {user ? <BottomTabNavigator /> : <AuthStackNavigator />} */}
      {user ? <MainStackNavigator /> : <AuthStackNavigator />}
    </NavigationContainer>
  );
};

export default Navigator;

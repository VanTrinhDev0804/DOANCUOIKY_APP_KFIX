import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Provider } from "react-redux";
import store from "./src/redux/store";
import {
  MainScreen,
  OTP,
  SChat,
  //SConfirmPhoneNum,
  SForgotPassword,
  SGoogleMap,
  SOrder,
  SWelcome,
} from "./src/screens";
import SNotifications from "./src/screens/MainScreen/SHome/SNotifications";

export default function App() {
  const Stack = createNativeStackNavigator();
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="SWelcome"
          screenOptions={{ headerShown: false }}
        >
          <Stack.Screen name={"SWelcome"} component={SWelcome} />
          {/* <Stack.Screen name={'SConfirmPhoneNum'} component={SConfirmPhoneNum} options={{animation:'slide_from_right'}}/> */}
          <Stack.Screen name={"OTP"} component={OTP} />
          <Stack.Screen name={"SForgotPassword"} component={SForgotPassword} />
          <Stack.Screen name={"MainScreen"} component={MainScreen} />
          <Stack.Screen name={"SOrder"} component={SOrder} />
          <Stack.Screen name={"SChat"} component={SChat} />
          <Stack.Screen name={"SGoogleMap"} component={SGoogleMap} />
          <Stack.Screen
            name={"SNotifications"}
            component={SNotifications}
            options={{ animation: "slide_from_left" }}
          />
        </Stack.Navigator>
        {/* <StatusBar animated={true} backgroundColor={colors.primaryColor}/> */}
      </NavigationContainer>
    </Provider>
  );
}

import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import Feather from "@expo/vector-icons/Feather";
import ScrollScreen from "./screens/ScrollScreen";

const Stack = createStackNavigator();

const Tab = createBottomTabNavigator();

const BottomTabScreen = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarHideOnKeyboard: true,
        tabBarShowLabel: false,
        headerShown: false,
        tabBarStyle: {
          height: 50,
        },

        tabBarIcon: ({ focused, size, colour }) => {
          let iconName;
          if (route.name === "ScrollScreen") {
            iconName = "home";
            size = focused ? size + 8 : size + 2;
          }

          return <Feather name={iconName} size={size} color={colour} />;
        },
      })}
    >
      <Tab.Screen name="ScrollScreen" component={ScrollScreen} />
    </Tab.Navigator>
  );
};

const screenOptions = {
  headerShown: false,
  // gestureEnabled: true,
};

const SignedInStack = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="ScrollScreen"
        screenOptions={screenOptions}
      >
        <Stack.Screen name="Scroll" component={BottomTabScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default SignedInStack;

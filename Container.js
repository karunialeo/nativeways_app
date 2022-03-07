import React from "react";
import { Ionicons } from "@expo/vector-icons";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { useTheme } from "native-base";

import ToDoListContainer from "./src/screens/ToDoListContainer";
import Calculator from "./src/screens/Calculator";
import More from "./src/screens/More";

// Create Stack Navigation
const Stack = createStackNavigator();

//Create Bottom Tab Navigation
const Tab = createBottomTabNavigator();

function NativeWays() {
  const theme = useTheme();

  return (
    <Tab.Navigator
      initialRouteName="ToDoApp"
      screenOptions={({ route }) => ({
        headerMode: "screen",
        headerTintColor: theme.colors.white,
        headerStyle: { backgroundColor: theme.colors.primary["500"] },
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === "To Do Lists") {
            iconName = focused ? "document-text" : "document-text-outline";
          } else if (route.name === "Calculator") {
            iconName = focused ? "ios-calculator" : "ios-calculator-outline";
          } else if (route.name === "More") {
            iconName = focused
              ? "ellipsis-horizontal-sharp"
              : "ellipsis-horizontal-outline";
          }

          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: theme.colors.white,
        tabBarInactiveTintColor: theme.colors.primary["500"],
        tabBarActiveBackgroundColor: theme.colors.primary["500"],
        tabBarInactiveBackgroundColor: theme.colors.white,
      })}
    >
      <Tab.Screen name="To Do Lists" component={ToDoListContainer} />
      <Tab.Screen name="Calculator" component={Calculator} />
      <Tab.Screen name="More" component={More} />
    </Tab.Navigator>
  );
}

export default function Container() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Main"
          component={NativeWays}
          options={{
            headerShown: false,
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

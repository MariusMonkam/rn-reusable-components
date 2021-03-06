import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";

import HomeButton from "./src/components/HomeButton";
import HomeCard from "./src/components/cards/HomeCard";

const App = () => {
  const Stack = createStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerStyle: {
            backgroundColor: "purple",
          },
          headerTintColor: "#fff",
          headerTitleStyle: {
            fontWeight: "bold",
          },
        }}
      >
        <Stack.Screen
          name="HomeButton"
          component={HomeButton}
          options={{ title: "Reusable Buttons" }}
        />
        <Stack.Screen
          name="HomeCard"
          component={HomeCard}
          options={{ title: "Reusable ContactCards" }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;

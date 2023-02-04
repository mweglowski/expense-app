import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";

import ExpensesScreen from "./screens/ExpensesScreen";
import RecentScreen from "./screens/RecentScreen";
import IconButton from "./components/IconButton";

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <>
      <NavigationContainer>
        <Tab.Navigator
          screenOptions={{
            headerRight: () => {
              return (
                <IconButton
                  style={styles.headerIcon}
                  icon="add"
                  size={32}
                  color="black"
                />
              );
            },
          }}
        >
          <Tab.Screen
            name="Recent"
            component={RecentScreen}
            options={{
              tabBarIcon: ({ color, size }) => (
                <Ionicons name="hourglass-outline" color={color} size={size} />
              ),
            }}
          />
          <Tab.Screen
            name="Expenses"
            component={ExpensesScreen}
            options={{
              tabBarIcon: ({ color, size }) => (
                <Ionicons name="wallet-outline" color={color} size={size} />
              ),
            }}
          />
        </Tab.Navigator>
      </NavigationContainer>
    </>
  );
}

const styles = StyleSheet.create({
  headerIcon: {
    marginRight: 10,
  },
});

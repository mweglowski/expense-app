import { StatusBar } from "expo-status-bar";
import { StyleSheet } from "react-native";
import { NavigationContainer, useNavigation } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";
import { Provider } from "react-redux";

import ExpensesScreen from "./screens/ExpensesScreen";
import RecentScreen from "./screens/RecentScreen";
import IconButton from "./components/IconButton";
import NewExpenseScreen from "./screens/NewExpenseScreen";
import { store } from "./store/store";
import EditExpenseScreen from "./screens/EditExpenseScreen";

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

function TabsNavigator() {
  const navigation = useNavigation();

  function showNewExpenseScreen() {
    navigation.navigate("NewExpense");
  }

  return (
    <Tab.Navigator
      initialRouteName="Expenses"
      screenOptions={{
        headerTitleAlign: "center",
        headerRight: () => {
          return (
            <IconButton
              style={styles.headerIcon}
              icon="add"
              size={32}
              color="black"
              onPress={showNewExpenseScreen}
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
  );
}

export default function App() {
  return (
    <>
      <Provider store={store}>
        <StatusBar style="dark" />
        <NavigationContainer>
          <Stack.Navigator screenOptions={{ headerTitleAlign: "center" }}>
            <Stack.Screen
              name="Tabs"
              component={TabsNavigator}
              options={{ headerShown: false }}
            />
            <Stack.Screen name="NewExpense" component={NewExpenseScreen} />
            <Stack.Screen name="EditExpense" component={EditExpenseScreen} />
          </Stack.Navigator>
        </NavigationContainer>
      </Provider>
    </>
  );
}

const styles = StyleSheet.create({
  headerIcon: {
    marginRight: 10,
  },
});

import { StatusBar } from "expo-status-bar";
import { StyleSheet } from "react-native";
import { NavigationContainer, useNavigation } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";
import { Provider } from "react-redux";

import ExpensesScreen from "./screens/ExpensesScreen";
import RecentExpensesScreen from "./screens/RecentExpensesScreen";
import IconButton from "./components/IconButton";
import NewExpenseScreen from "./screens/NewExpenseScreen";
import { store } from "./store/store";
import EditExpenseScreen from "./screens/EditExpenseScreen";
import { Colors } from "./assets/colors";

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
      sceneContainerStyle={{
        backgroundColor: Colors.gray900,
      }}
      screenOptions={{
        headerTitleAlign: "center",
        headerStyle: {
          backgroundColor: Colors.gray800,
        },
        headerTintColor: Colors.orange300,
        headerTitleAlign: "center",
        headerRight: () => {
          return (
            <IconButton
              style={styles.headerIcon}
              icon="add"
              size={32}
              color={Colors.orange300}
              onPress={showNewExpenseScreen}
            />
          );
        },
        tabBarStyle: {
          backgroundColor: Colors.gray800,
          height: 60,
        },
        tabBarLabelStyle: {
          marginTop: -10,
          marginBottom: 6,
          fontSize: 14,
        },
        tabBarActiveTintColor: Colors.orange400,
        tabBarInactiveTintColor: "gray",
      }}
    >
      <Tab.Screen
        name="RecentExpenses"
        component={RecentExpensesScreen}
        options={{
          title: "Recent Expenses",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="hourglass-outline" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="AllExpenses"
        component={ExpensesScreen}
        options={{
          title: "All Expenses",
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
          <Stack.Navigator
            screenOptions={{
              presentation: "modal",
              headerTitleAlign: "center",
              headerStyle: {
                backgroundColor: Colors.gray800,
              },
              headerTintColor: Colors.orange300,
              headerTitleAlign: "center",
              contentStyle: {
                backgroundColor: Colors.gray900,
              },
            }}
          >
            <Stack.Screen
              name="Tabs"
              component={TabsNavigator}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="NewExpense"
              options={{ title: "New Expense" }}
              component={NewExpenseScreen}
            />
            <Stack.Screen
              name="EditExpense"
              options={{ title: "Edit Expense" }}
              component={EditExpenseScreen}
            />
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

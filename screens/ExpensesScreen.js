import { View, Text } from "react-native";
import { useSelector } from "react-redux";

import ExpensesList from "../components/ExpensesList";
import ExpensesSummary from "../components/ExpensesSummary";

export default function ExpensesScreen() {
  const expenses = useSelector((state) => state.expenses.items);

  return (
    <View>
      <ExpensesSummary items={expenses} periodText={"Entire time:"} />
      <ExpensesList items={expenses} />
    </View>
  );
}

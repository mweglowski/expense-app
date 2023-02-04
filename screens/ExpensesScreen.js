import { Text, View } from "react-native";
import { useSelector } from "react-redux";

import ExpensesList from "../components/ExpensesList";

export default function ExpensesScreen() {
  const expenses = useSelector((state) => state.expenses.items);

  return <ExpensesList items={expenses} />;
}

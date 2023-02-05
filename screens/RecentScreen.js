import { Text, View } from "react-native";

import { useSelector } from "react-redux";

import ExpensesList from "../components/ExpensesList";

export default function RecentScreen() {
  let expenses = useSelector((state) => state.expenses.items);
  expenses = expenses.filter((item) => {
    let dateWeekAgo = new Date();
    dateWeekAgo.setDate(dateWeekAgo.getDate() - 7);

    return new Date(item.date) > dateWeekAgo;
  });

  return <ExpensesList items={expenses} />;
}

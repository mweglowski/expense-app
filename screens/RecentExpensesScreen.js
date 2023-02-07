import { useEffect } from "react";

import { useSelector, useDispatch } from "react-redux";
import { setExpenses } from "../store/expenses"

import ExpensesList from "../components/ExpensesList";
import ExpensesSummary from "../components/ExpensesSummary";
import { fetchExpenses } from "../util/http";

export default function RecentScreen() {
  let expenses = useSelector((state) => state.expenses.items);
  const dispatch = useDispatch()

  useEffect(() => {
    async function getExpenses() {
      const expenses = await fetchExpenses();
      dispatch(setExpenses(expenses))
    }

    getExpenses()
  }, [])

  const recentExpenses = expenses.filter((item) => {
    let dateWeekAgo = new Date();
    dateWeekAgo.setDate(dateWeekAgo.getDate() - 7);

    return new Date(item.date) > dateWeekAgo;
  });

  return (
    <>
      <ExpensesSummary items={recentExpenses} periodText="Last 7 days:" />
      <ExpensesList items={recentExpenses} />
    </>
  );
}

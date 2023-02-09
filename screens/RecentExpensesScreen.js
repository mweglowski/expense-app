import { useEffect, useState } from "react";

import { useSelector, useDispatch } from "react-redux";
import { setExpenses } from "../store/expenses";

import ExpensesList from "../components/ExpensesList";
import ExpensesSummary from "../components/ExpensesSummary";
import LoadingOverlay from "../components/LoadingOverlay";

import { fetchExpenses } from "../util/http";
import ErrorOverlay from "../components/ErrorOverlay";

export default function RecentExpensesScreen() {
  const [isFetching, setIsFetching] = useState(true);
  const [error, setError] = useState();

  let expenses = useSelector((state) => state.expenses.items);
  const dispatch = useDispatch();

  useEffect(() => {
    async function getExpenses() {
      setIsFetching(true);
      try {
        const expenses = await fetchExpenses();
        dispatch(setExpenses(expenses));
      } catch (err) {
        setError("Fetching expenses failed.");
      }
      setIsFetching(false);
    }

    getExpenses();
  }, []);

  // function errorHandler() {
  //   setError(null);
  // }

  if (error && !isFetching) {
    return <ErrorOverlay message={error} />;
  }

  if (isFetching) {
    return <LoadingOverlay />;
  }

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

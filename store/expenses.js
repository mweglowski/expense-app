import { createSlice } from "@reduxjs/toolkit";

const expensesSlice = createSlice({
  name: "expenses",
  initailState: {
    expenses: [],
  },
  reducers: {
    addExpense: (state, action) => {
      state.expenses.push(action.payload.expenseItem);
    },
    removeExpense: (state, action) => {
      state.expenses = state.expenses.filter(
        (item) => item.id !== action.payload.id
      );
    },
  },
});

export const addExpense = expensesSlice.actions.addExpense;
export const removeExpense = expensesSlice.removeExpense;
export default expensesSlice.reducer;

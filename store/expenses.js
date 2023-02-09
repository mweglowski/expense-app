import { createSlice } from "@reduxjs/toolkit";

const expensesSlice = createSlice({
  name: "expenses",
  initialState: {
    items: [],
  },
  reducers: {
    setExpenses: (state, action) => {
      state.items = action.payload;
    },
    addExpense: (state, action) => {
      state.items.push(action.payload);
    },
    updateExpense: (state, action) => {
      state.items = state.items.filter((item) => item.id !== action.payload.id);
      state.items.push(action.payload);
    },
    removeExpense: (state, action) => {
      state.items = state.items.filter((item) => item.id !== action.payload.id);
    },
  },
});

export const setExpenses = expensesSlice.actions.setExpenses;
export const addExpense = expensesSlice.actions.addExpense;
export const updateExpenseLocally = expensesSlice.actions.updateExpense;
export const removeExpense = expensesSlice.actions.removeExpense;
export default expensesSlice.reducer;

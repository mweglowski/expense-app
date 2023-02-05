import { createSlice } from "@reduxjs/toolkit";

const expensesSlice = createSlice({
  name: "expenses",
  initialState: {
    items: [
      { id: 0, date: new Date("01/07/2023").toISOString(), title: "Book", amount: 20.00 },
      { id: 1, date: new Date("01/12/2023").toISOString(), title: "Phone", amount: 1000.00 },
      { id: 2, date: new Date("01/19/2023").toISOString(), title: "Charger", amount: 20.99 },
      { id: 3, date: new Date().toISOString(), title: "Macbook", amount: 1500.00 },
    ],
  },
  reducers: {
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

export const addExpense = expensesSlice.actions.addExpense;
export const updateExpense = expensesSlice.actions.updateExpense;
export const removeExpense = expensesSlice.actions.removeExpense;
export default expensesSlice.reducer;

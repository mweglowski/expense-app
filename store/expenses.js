import { createSlice } from "@reduxjs/toolkit";

const expensesSlice = createSlice({
  name: "expenses",
  initialState: {
    items: [
      { id: 0, date: new Date(), title: "Book", price: 20 },
      { id: 1, date: new Date(), title: "Phone", price: 1000 },
      { id: 2, date: new Date(), title: "Macbook", price: 1500 },
    ],
  },
  reducers: {
    addExpense: (state, action) => {
      state.items.push(action.payload.expenseItem);
    },
    removeExpense: (state, action) => {
      state.items = state.items.filter((item) => item.id !== action.payload.id);
    },
  },
});

export const addExpense = expensesSlice.actions.addExpense;
export const removeExpense = expensesSlice.removeExpense;
export default expensesSlice.reducer;

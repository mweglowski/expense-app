import axios from "axios";

const BACKEND_URL =
  "https://react-native-expenses-d38c1-default-rtdb.firebaseio.com/";

export async function storeExpense(expenseData) {
  const response = await axios.post(
    BACKEND_URL + "/expenses.json",
    expenseData
  );
  const id = response.data.name;
  return id;
}

export async function fetchExpenses() {
  const response = await axios.get(BACKEND_URL + "/expenses.json");

  const expenses = [];

  for (const key in response.data) {
    const expense = {
      id: key,
      title: response.data[key].title,
      amount: response.data[key].amount,
      date: response.data[key].date,
    };
    expenses.push(expense);
  }

  return expenses;
}

export async function updateExpense(id, expenseData) {
  return axios.put(BACKEND_URL + `/expenses/${id}.json`, expenseData);
}

export async function deleteExpense(id) {
  return axios.delete(BACKEND_URL + `/expenses/${id}.json`);
}

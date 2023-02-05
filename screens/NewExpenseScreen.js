import { useState } from "react";
import { StyleSheet, TextInput, View } from "react-native";
import { useNavigation } from "@react-navigation/native";

import { useSelector, useDispatch } from "react-redux";
import { addExpense } from "../store/expenses";

import FormButton from "../components/FormButton";

export default function NewExpenseScreen() {
  const [expenseTitleText, setExpenseTitleText] = useState("");
  const [expensePrice, setExpensePrice] = useState("");
  const expenses = useSelector((state) => state.expenses.items);
  const dispatch = useDispatch();
	const navigation = useNavigation();

  function expenseTitleTextChangeHandler(inputValue) {
    setExpenseTitleText(inputValue);
  }

  function expensePriceChangerHandler(inputValue) {
    setExpensePrice(inputValue);
  }

  function clearInputs() {
    setExpenseTitleText("");
    setExpensePrice("");
  }

  function cancelHandler() {
		navigation.navigate("Tabs")
    clearInputs();
  }

  function addNewExpenseHandler() {
    const date = new Date().toISOString();

    const expense = {
      id: expenses.length,
      title: expenseTitleText,
      price: +expensePrice,
      date: date,
    };

    dispatch(addExpense(expense));
    clearInputs();
		navigation.navigate("Tabs")
  }

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Title"
        onChangeText={expenseTitleTextChangeHandler}
      />

      <TextInput
        style={styles.input}
        placeholder="Price"
        keyboardType="numeric"
        onChangeText={expensePriceChangerHandler}
      />

      <View style={styles.controlButtons}>
        <FormButton
          containerStyle={[styles.button, styles.cancelButton]}
          onPress={cancelHandler}
        >
          Cancel
        </FormButton>
        <FormButton
          containerStyle={[styles.button, styles.submitButton]}
          onPress={addNewExpenseHandler}
        >
          Submit
        </FormButton>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    padding: 24,
  },
  input: {
    padding: 8,
    marginBottom: 24,
    backgroundColor: "white",
    elevation: 4,
    borderRadius: 8,
    fontSize: 16,
  },
  button: {
    backgroundColor: "gray",
  },
  cancelButton: {},
  submitButton: {},
  controlButtons: {
    flexDirection: "row",
    justifyContent: "space-evenly",
  },
});

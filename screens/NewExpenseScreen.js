import { useState } from "react";
import { StyleSheet, TextInput, View } from "react-native";
import { useNavigation } from "@react-navigation/native";

import { useSelector, useDispatch } from "react-redux";
import { addExpense } from "../store/expenses";

import FormButton from "../components/FormButton";
import { Colors } from "../assets/colors";

export default function NewExpenseScreen() {
  const [expenseTitleText, setExpenseTitleText] = useState("");
  const [expenseAmount, setExpenseAmount] = useState("");
  const expenses = useSelector((state) => state.expenses.items);
  const dispatch = useDispatch();
  const navigation = useNavigation();

  function expenseTitleTextChangeHandler(inputValue) {
    setExpenseTitleText(inputValue);
  }

  function expenseAmountChangeHandler(inputValue) {
    setExpenseAmount(inputValue);
  }

  function clearInputs() {
    setExpenseTitleText("");
    setExpenseAmount("");
  }

  function cancelHandler() {
    navigation.goBack();
    clearInputs();
  }

  function addNewExpenseHandler() {
    const date = new Date().toISOString();

    const expense = {
      id: expenses.length,
      title: expenseTitleText,
      price: +expenseAmount,
      date: date,
    };

    dispatch(addExpense(expense));
    clearInputs();
    navigation.goBack();
  }

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Title"
        placeholderTextColor={Colors.orange700}
        onChangeText={expenseTitleTextChangeHandler}
      />

      <TextInput
        style={styles.input}
        placeholder="Price"
        keyboardType="numeric"
        placeholderTextColor={Colors.orange700}
        onChangeText={expenseAmountChangeHandler}
      />

      <View style={styles.controlButtons}>
        <FormButton
          containerStyle={[styles.cancelButton]}
          textStyle={styles.buttonText}
          onPress={cancelHandler}
        >
          Cancel
        </FormButton>
        <FormButton
          containerStyle={[styles.submitButton]}
          textStyle={styles.buttonText}
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
    backgroundColor: Colors.gray900,
    borderBottomWidth: 2,
    borderBottomColor: Colors.orange500,
    elevation: 4,
    borderRadius: 8,
    fontSize: 16,
    color: Colors.orange500,
  },
  cancelButton: {},
  submitButton: {},
  controlButtons: {
    flexDirection: "row",
    justifyContent: "space-evenly",
  },
});

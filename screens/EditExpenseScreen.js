import { useState } from "react";
import { StyleSheet, TextInput, View } from "react-native";
import { useNavigation } from "@react-navigation/native";

import { useDispatch } from "react-redux";
import { removeExpense, updateExpense } from "../store/expenses";

import FormButton from "../components/FormButton";
import { Colors } from "../assets/colors";

export default function EditExpenseScreen({ route }) {
  let { expenseData } = route.params
  const [expenseTitleText, setExpenseTitleText] = useState(expenseData.title);
  const [expenseAmount, setExpenseAmount] = useState(expenseData.amount);
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
    navigation.navigate("Tabs");
    clearInputs();
  }

  function updateExpenseHandler() {
    const { id, date } = expenseData

    const expense = {
      id: id,
      title: expenseTitleText,
      amount: +expenseAmount,
      date: date,
    };

    dispatch(updateExpense(expense));
    clearInputs();
    navigation.navigate("Tabs");
  }

  function deleteExpenseHandler() {
    dispatch(removeExpense(expenseData))
    clearInputs();
    navigation.navigate("Tabs");
  }

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Title"
        placeholderTextColor={Colors.orange700}
        onChangeText={expenseTitleTextChangeHandler}
        value={expenseTitleText}
      />

      <TextInput
        style={styles.input}
        placeholder="Amount"
        placeholderTextColor={Colors.orange700}
        keyboardType="numeric"
        onChangeText={expenseAmountChangeHandler}
        value={expenseAmount.toString()}
      />

      <View style={styles.controlButtons}>
        <FormButton
          containerStyle={[styles.cancelButton]}
          onPress={cancelHandler}
        >
          Cancel
        </FormButton>
        <FormButton
          containerStyle={[styles.cancelButton]}
          onPress={deleteExpenseHandler}
        >
          Delete
        </FormButton>
        <FormButton
          containerStyle={[styles.submitButton]}
          onPress={updateExpenseHandler}
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

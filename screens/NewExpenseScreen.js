import { StyleSheet, View } from "react-native";
import { useNavigation } from "@react-navigation/native";

import { useDispatch, useSelector } from "react-redux";
import { addExpense } from "../store/expenses";

import ExpenseForm from "../components/ExpenseForm";

export default function EditExpenseScreen() {
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const expenses = useSelector((state) => state.expenses.items);

  function cancelHandler() {
    navigation.goBack();
  }

  function confirmHandler(newExpenseData) {
    const expense = {
      id: expenses.length,
      ...newExpenseData,
    };

    dispatch(addExpense(expense));
    navigation.goBack();
  }

  return (
    <View style={styles.container}>
      <ExpenseForm
        submitButtonLabel="Add"
        onCancel={cancelHandler}
        onSubmit={confirmHandler}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 24,
  },
});

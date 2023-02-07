import { StyleSheet, View } from "react-native";
import { useNavigation } from "@react-navigation/native";

import { useDispatch } from "react-redux";
import { removeExpense, updateExpense } from "../store/expenses";

import ExpenseForm from "../components/ExpenseForm";

export default function EditExpenseScreen({ route }) {
  let { selectedExpense } = route.params;
  const dispatch = useDispatch();
  const navigation = useNavigation();

  function cancelHandler() {
    navigation.goBack();
  }

  function deleteHandler() {
    dispatch(removeExpense(selectedExpense));
    navigation.goBack();
  }

  function confirmHandler(updatedData) {
    const { id } = selectedExpense;

    let expense = {
      ...updatedData
    };
    expense.id = id

    dispatch(updateExpense(expense));
    navigation.goBack();
  }

  return (
    <View style={styles.container}>
      <ExpenseForm
        submitButtonLabel="Update"
        defaultValues={selectedExpense}
        onCancel={cancelHandler}
        onDelete={deleteHandler}
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

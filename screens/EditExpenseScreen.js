import { StyleSheet, View } from "react-native";
import { useNavigation } from "@react-navigation/native";

import { useDispatch } from "react-redux";
import { removeExpense, updateExpenseLocally } from "../store/expenses";
import { updateExpense, deleteExpense } from "../util/http";

import ExpenseForm from "../components/ExpenseForm";
import { useState } from "react";
import LoadingOverlay from "../components/LoadingOverlay";
import ErrorOverlay from "../components/ErrorOverlay";

export default function EditExpenseScreen({ route }) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setIsError] = useState();
  let { selectedExpense } = route.params;
  const dispatch = useDispatch();
  const navigation = useNavigation();

  function cancelHandler() {
    navigation.goBack();
  }

  async function deleteHandler() {
    setIsSubmitting(true);
    await deleteExpense(selectedExpense.id);

    dispatch(removeExpense(selectedExpense));
    navigation.goBack();
  }

  async function confirmHandler(updatedData) {
    const { id } = selectedExpense;

    let expense = {
      ...updatedData,
    };
    expense.id = id;

    setIsSubmitting(true);
    try {
      dispatch(updateExpenseLocally(expense));
      await updateExpense(id, expense);
      navigation.goBack();
    } catch (err) {
      setIsError("Updating expense failed - try again later.");
    }
  }

  if (error) {
    return <ErrorOverlay massage={error} />;
  }

  if (isSubmitting) {
    return <LoadingOverlay />;
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

import { StyleSheet, View } from "react-native";
import { useNavigation } from "@react-navigation/native";

import { useDispatch, useSelector } from "react-redux";
import { addExpense } from "../store/expenses";

import ExpenseForm from "../components/ExpenseForm";
import { storeExpense } from "../util/http";
import { useState } from "react";

import LoadingOverlay from "../components/LoadingOverlay";
import ErrorOverlay from "../components/ErrorOverlay";

export default function NewExpenseScreen() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setIsError] = useState();
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const expenses = useSelector((state) => state.expenses.items);

  function cancelHandler() {
    navigation.goBack();
  }

  async function confirmHandler(newExpenseData) {
    setIsSubmitting(true);
    try {
      // ADD EXPENSE TO DATABASE
      const id = await storeExpense(newExpenseData);

      // ADD TO REDUX
      dispatch(addExpense({ ...newExpenseData, id: id }));
      navigation.goBack();
    } catch (err) {
      setIsError("Deleting expense failed - try again later.");
    }

    setIsSubmitting(false);
  }

  // function errorHandler() {
  //   setIsError(null)
  // }

  if (error && isSubmitting) {
    return <ErrorOverlay message={error} />
  }

  if (isSubmitting) {
    return <LoadingOverlay />;
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

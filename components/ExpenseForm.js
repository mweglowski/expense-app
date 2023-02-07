import { useState } from "react";
import { View, StyleSheet, Text, Alert } from "react-native";

import { Colors } from "../assets/colors";
import Input from "./Input";
import FormButton from "../components/FormButton";

export default function ExpenseForm({
  submitButtonLabel,
  onCancel,
  onDelete,
  onSubmit,
  defaultValues,
}) {
  const isEditing = submitButtonLabel === "Update";

  const [inputs, setInputs] = useState({
    title: {
      value: defaultValues ? defaultValues.title : "",
      isValid: true,
    },
    date: {
      value: defaultValues ? defaultValues.date : "",
      isValid: true,
    },
    amount: {
      value: defaultValues ? defaultValues.amount.toFixed(2) : "",
      isValid: true,
    },
  });

  function inputChangeHandler(inputIdentifier, enteredValue) {
    setInputs((currentInputs) => {
      return {
        ...currentInputs,
        [inputIdentifier]: { value: enteredValue, isValid: true },
      };
    });
  }

  function submitHandler() {
    const expenseData = {
      title: inputs.title.value,
      date: inputs.date.value,
      amount: +inputs.amount.value,
    };

    const titleIsValid = expenseData.title.trim().length > 0;
    const amountIsValid = !isNaN(expenseData.amount) && expenseData.amount > 0;
    const dateIsValid =
      new Date(expenseData.date).toString() !== "Invalid Date";

    if (titleIsValid && amountIsValid && dateIsValid) {
      onSubmit(expenseData);
    } else {
      setInputs((curInputs) => {
        return {
          title: { value: curInputs.title.value, isValid: titleIsValid },
          date: { value: curInputs.date.value, isValid: dateIsValid },
          amount: { value: curInputs.amount.value, isValid: amountIsValid },
        };
      });
    }
  }

  const formIsInvalid =
    !inputs.amount.isValid || !inputs.title.isValid || !inputs.date.isValid;

  return (
    <View style={styles.form}>
      <Input
        invalid={!inputs.title.isValid}
        textInputConfig={{
          placeholder: "Title",
          multiline: true,
          autoCapitalize: true,
          onChangeText: inputChangeHandler.bind(this, "title"),
          value: inputs.title.value,
        }}
      />
      <View style={styles.inputsRow}>
        <Input
          invalid={!inputs.amount.isValid}
          style={styles.rowInput}
          textInputConfig={{
            placeholder: "Amount",
            keyboardType: "decimal-pad",
            onChangeText: inputChangeHandler.bind(this, "amount"),
            value: inputs.amount.value,
          }}
        />
        <Input
          invalid={!inputs.date.isValid}
          style={styles.rowInput}
          textInputConfig={{
            placeholder: "YYYY-MM-DD",
            maxLength: 10,
            onChangeText: inputChangeHandler.bind(this, "date"),
            value: inputs.date.value,
          }}
        />
      </View>

      {formIsInvalid && <Text style={styles.errorText}>Form is invalid!</Text>}

      <View style={styles.controlButtons}>
        <FormButton containerStyle={[styles.cancelButton]} onPress={onCancel}>
          Cancel
        </FormButton>

        {isEditing && (
          <FormButton containerStyle={[styles.cancelButton]} onPress={onDelete}>
            Delete
          </FormButton>
        )}

        <FormButton
          containerStyle={[styles.submitButton]}
          onPress={submitHandler}
        >
          {submitButtonLabel}
        </FormButton>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  form: {
    marginTop: 80,
  },
  inputsRow: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  rowInput: {
    width: 140,
  },
  errorText: {
    margin: 16,
    textAlign: "center",
    color: "coral",
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

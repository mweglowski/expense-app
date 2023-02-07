import { View, TextInput, StyleSheet } from "react-native";
import { Colors } from "../assets/colors";

export default function Input({ textInputConfig, style, invalid }) {
  return (
    <View style={styles.inputContainer}>
      <TextInput
        style={[styles.input, style, invalid && styles.invalidInput]}
        {...textInputConfig}
        placeholderTextColor={!invalid ? Colors.orange700 : "coral"}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  inputContainer: {
    margin: 8,
    padding: 8,
  },
  input: {
    padding: 8,
    backgroundColor: Colors.gray900,
    borderBottomWidth: 2,
    borderBottomColor: Colors.orange500,
    elevation: 4,
    borderRadius: 8,
    fontSize: 16,
    color: Colors.orange500,
  },
  invalidInput: {
    borderBottomColor: "coral",
    color: "coral",
  },
});

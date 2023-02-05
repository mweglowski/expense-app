import { View, Text, StyleSheet, Pressable } from "react-native";

import Expense from "./Expense";

export default function ExpensesList({ items }) {
  return (
    <View style={styles.listContainer}>
      {items.map((item) => (
        <Expense itemData={item} />
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  listContainer: {
    flexDirection: "column",
    margin: 8,
    padding: 8,
  },
});

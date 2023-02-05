import { View, StyleSheet, FlatList, Text } from "react-native";
import { Colors } from "../assets/colors";

import Expense from "./Expense";

export default function ExpensesList({ items }) {
  function renderExpenseItem(itemData) {
    const item = itemData.item;
    return <Expense itemData={item} />;
  }

  return (
    <View style={styles.listContainer}>
      {items.length !== 0 ? (
        <FlatList
          data={items}
          keyExtractor={(item) => item.id}
          renderItem={renderExpenseItem}
        />
      ) : (
        <Text style={styles.feedbackText}>No expenses found.</Text>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  listContainer: {
    flexDirection: "column",
    margin: 8,
    padding: 8,
  },
  feedbackText: {
    marginVertical: 8, 
    marginHorizontal: 'auto',
    textAlign: 'center',
    fontSize: 16,
    color: Colors.orange500,
  }
});

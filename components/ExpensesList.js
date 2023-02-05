import { View, StyleSheet, FlatList } from "react-native";

import Expense from "./Expense";

export default function ExpensesList({ items }) {
  function renderExpenseItem(itemData) {
    const item = itemData.item;
    return <Expense itemData={item} />;
  }

  return (
    <View style={styles.listContainer}>
      <FlatList
        data={items}
        keyExtractor={(item) => item.id}
        renderItem={renderExpenseItem}
      />
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

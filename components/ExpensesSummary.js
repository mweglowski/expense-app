import { StyleSheet, Text, View } from "react-native";
import { Colors } from "../assets/colors";

export default function ExpensesSummary({ items, periodText }) {
  let sum = 0;
  items.forEach((item) => (sum += item.amount));

  return (
    <View style={styles.container}>
      <Text style={styles.text}>{periodText}</Text>
      <Text style={styles.text}>{sum.toFixed(2)}$</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    margin: 12,
    padding: 8,
    marginBottom: 0,
    backgroundColor: Colors.gray900,
    elevation: 8,
    borderRadius: 8,
    shadowColor: Colors.orange500,
  },
  text: {
    fontWeight: "bold",
    fontSize: 18,
    color: Colors.orange500,
  },
});

import { useNavigation } from "@react-navigation/native";
import { View, Text, StyleSheet, Pressable } from "react-native";
import { Colors } from "../assets/colors";

export default function Expense({ itemData }) {
  const navigation = useNavigation();

  function editExpenseHandler() {
    navigation.navigate("EditExpense", { expenseData: itemData });
  }

  const date = new Date(itemData.date);
  let dateFormatted = "";
  let day = date.getDate();
  let month = date.getMonth();
  let year = date.getFullYear();
  day = day < 10 ? `0${day}` : day;
  month = month + 1 < 10 ? `0${month + 1}` : month + 1;
  dateFormatted = `${day}-${month}-${year}`;

  return (
    <Pressable
      android_ripple={{ color: "gray" }}
      style={styles.itemContainer}
      onPress={editExpenseHandler}
    >
      <View>
        <Text style={styles.title}>{itemData.title}</Text>
        <Text style={styles.date}>{dateFormatted}</Text>
      </View>
      <View style={styles.amountContainer}>
        <Text style={styles.amount}>{itemData.amount.toFixed(2)}$</Text>
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  itemContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    margin: 6,
    padding: 8,
    backgroundColor: Colors.gray600,
    borderRadius: 8,
    elevation: 4,
  },
  title: {
    fontWeight: "bold",
    fontSize: 16,
    color: Colors.orange300,
  },
  date: {
    color: Colors.orange500,
  },
  amountContainer: {
    minWidth: 80,
    padding: 8,
    backgroundColor: Colors.orange400,
    borderRadius: 8,
    elevation: 12,
    shadowColor: Colors.orange400,
  },
  amount: {
    textAlign: "center",
    fontWeight: "bold",
    color: Colors.gray800,
  },
});

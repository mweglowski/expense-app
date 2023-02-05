import { useNavigation } from "@react-navigation/native";
import { View, Text, StyleSheet, Pressable } from "react-native";

export default function Expense({ itemData }) {
  const navigation = useNavigation();

  function editExpenseHandler() {
    navigation.navigate("EditExpense", { expenseId: itemData.id });
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
      <View style={styles.priceContainer}>
        <Text style={styles.price}>{itemData.price}$</Text>
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
    padding: 6,
    backgroundColor: "white",
    borderRadius: 8,
    elevation: 4,
  },
  title: {
    fontWeight: "bold",
  },
  priceContainer: {
    width: 70,
    padding: 8,
    backgroundColor: "lightgray",
    borderRadius: 8,
  },
  price: {
    textAlign: "center",
    fontWeight: "bold",
  },
});

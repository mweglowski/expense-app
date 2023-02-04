import { View, Text, StyleSheet } from "react-native";

export default function ExpensesList({ items }) {
  return (
    <View>
      {items.map((item) => (
        <View key={item.id}>
          <Text>{item.title}</Text>
          <Text>{item.date.toString()}</Text>
          <View>
            <Text>{item.price}</Text>
          </View>
        </View>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
	
})

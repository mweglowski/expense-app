import { Pressable, View, Text, StyleSheet } from "react-native";

export default function FormButton({ children, onPress, containerStyle, textStyle }) {
  return (
    <View style={[styles.buttonContainer, containerStyle]}>
      <Pressable onPress={onPress}>
        <Text style={[styles.text, textStyle]}>{children}</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  buttonContainer: {
    width: 100,
    alignItems: "center",
    padding: 10,
    paddingHorizontal: 16,
    backgroundColor: "white",
		elevation: 4,
    borderRadius: 8,
  },
  text: {
		textAlign: "center",
		fontSize: 16,
  },
});

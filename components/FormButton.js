import { Pressable, View, Text, StyleSheet } from "react-native";
import { Colors } from "../assets/colors";

export default function FormButton({
  children,
  onPress,
  containerStyle,
  textStyle,
}) {
  return (
    <Pressable
      style={[styles.buttonContainer, containerStyle]}
      onPress={onPress}
      android_ripple={{ color: Colors.orange500 }}
    >
      <Text style={[styles.text, textStyle]}>{children}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  buttonContainer: {
    width: 100,
    alignItems: "center",
    padding: 10,
    paddingHorizontal: 16,
    elevation: 8,
    shadowColor: Colors.orange300,
    borderRadius: 8,
    backgroundColor: Colors.gray900,
    // borderWidth: 2,
    borderColor: Colors.orange400,
  },
  text: {
    color: Colors.orange400,
    textAlign: "center",
    fontSize: 16,
  },
});

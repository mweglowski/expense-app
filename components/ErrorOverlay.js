import { View, StyleSheet, Text } from "react-native";
import FormButton from "../components/FormButton"
import { Colors } from "../assets/colors";

export default function ErrorOverlay({ message }) {
  return (
    <View style={styles.container}>
      <Text style={[styles.text, styles.title]}>An error occurred!</Text>
      <Text style={styles.text}>{message}</Text>
			{/* <FormButton containerStyle={styles.button} onPress={onConfirm}>Okay</FormButton> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 32,
    backgroundColor: Colors.gray800,
  },
	text: {
		marginBottom: 8,
		textAlign: 'center',
		color: 'coral',
	},
	title: {
		fontSize: 24,
		fontWeight: "bold",
	}, 
	button: {
		marginTop: 20,
	}
});

import { View, ActivityIndicator, StyleSheet } from "react-native";
import { Colors } from "../assets/colors";

export default function LoadingOverlay() {
  return (
    <View style={styles.container}>
      <ActivityIndicator size="large" color={Colors.orange700} />
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
});

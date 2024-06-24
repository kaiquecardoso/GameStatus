import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    height: 40,
    borderRadius: 4,
    backgroundColor: "#202024",
    flex: 1,
  },
  input: {
    flex: 1,
    paddingHorizontal: 16,
    color: "#FFFFFF",
  },
  wrapper: {
    paddingTop: 16,
    paddingBottom: 8,
    paddingHorizontal: 16,
    flexDirection: "row",
    gap: 8,
  },
  button: {
    width: 100,
    height: 40,
    borderRadius: 4,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#9855ee",
  },
  buttonText: {
    color: "#FFFFFF",
    fontSize: 14,
    fontWeight: 700,
  },
});

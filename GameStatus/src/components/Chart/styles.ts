import { Dimensions, StyleSheet } from "react-native";
const { width } = Dimensions.get("window");

export const styles = StyleSheet.create({
  container: {
    flexDirection: "column",

    width: width / 1.7 - 32,
    justifyContent: "flex-start",
    paddingHorizontal: 16,
    height: 40,
    marginTop: 16,
  },
  track: {
    borderRadius: 4,
    height: 40,
    backgroundColor: "#121217",
    width: width / 1.7 - 32,
    marginTop: 8,
    marginBottom: 8,
  },
  slider: {
    borderRadius: 4,
    height: 40,
    backgroundColor: "#03fc88",
  },
  TrackerWrapper: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  text: {
    color: "#fff",
    fontWeight: "700",
    width: width,
  },
});

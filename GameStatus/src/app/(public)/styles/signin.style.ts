import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#121214",
  },
  imageBackground: {},
  content: {
    position: "absolute",
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
  },
  logoWrapper: {
    alignItems: "center",
  },
  form: {
    paddingHorizontal: 16,
    flex: 1,
    justifyContent: "flex-end",
  },
  containerScroll: {
    flex: 1,
    justifyContent: "flex-end",
  },
  title: {
    alignSelf: "center",
    color: "#fff",
    fontSize: 18,
    fontWeight: "800",
  },
  logo: {
    height: 200,
    width: 200,
  },
});

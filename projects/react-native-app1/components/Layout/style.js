import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    marginTop: 30,
    flex: 1,
  },
  box1: {
    flex: 1,
    backgroundColor: "red",
  },
  box2: {
    flex: 3,
    backgroundColor: "blue",
  },
  box3: {
    flex: 1,
    backgroundColor: "yellow",
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
  },
  item: {},
  borderColor: {
    borderColor: "black",
    borderWidth: 5,
    borderStyle: "solid",
  },
});

export default styles;

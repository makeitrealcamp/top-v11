import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    width: 140,
    height: 140,
    margin: 10,
    borderWidth: 5,
    borderColor: "gray",
    borderStyle: "solid",
    borderRadius: 5,
  },
  imgStyle: {
    width: "100%",
    height: "100%",
  },
  textContainer: {
    width: "100%",
    position: "absolute",
    bottom: 0,
    backgroundColor: "rgba(255, 0, 255, 0.3)",
  },
  text: {
    fontSize: 18,
  },
});

export default styles;

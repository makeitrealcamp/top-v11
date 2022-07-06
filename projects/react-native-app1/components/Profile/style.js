import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  titleContainer: {
    flex: 1,
  },
  title: {
    fontSize: 30,
    color: "blue",
  },
  imageContainer: {
    flex: 2,
  },
  imageStyle: {
    width: 200,
    height: 200,
    borderRadius: 100,
  },
  formContainer: {
    flex: 4,
    padding: 20,
    marginTop: "5%",
  },
  formItem: {
    flexDirection: "row",
    margin: 10,
  },
  itemlabel: {
    fontSize: 20,
  },
  inputStyle: {
    borderColor: "gray",
    borderWidth: 1,
    borderStyle: "solid",
    width: "80%",
    borderRadius: 6,
  },
  borderColor: {
    borderColor: "red",
    borderWidth: 1,
    borderStyle: "solid",
  },
  center: {
    justifyContent: "center",
    alignItems: "center",
  },
});

export default styles;

import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
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
    flex: 3,
    backgroundColor: "azure",
    padding: 10,
    marginTop: "10%",
  },
  center: {
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 40,
  },
  inputStyle: {
    width: "80%",
    height: 40,
    backgroundColor: "white",
    borderWidth: 1,
    borderStyle: "solid",
    borderColor: "gray",
    borderRadius: 10,
  },
  textStyle: {
    fontSize: 18,
    color: "gray",
  },
  formItem: {
    flexDirection: "row",
    justifyContent: "space-between",
    height: 60,
    alignItems: "center",
  },
});

export default styles;

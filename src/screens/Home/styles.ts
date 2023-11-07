import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    gap: 8,
    backgroundColor: "#181818",
    padding: 60,
  },
  eventName: {
    fontSize: 20,
    textAlign: "center",
    fontWeight: "bold",
    color: "#fff",
  },
  eventDate: {
    fontSize: 16,
    textAlign: "center",
    color: "#cdcdcd",
  },

  input: {
    height: 56,
    backgroundColor: "#1f1e25",
    borderRadius: 4,
    color: "#fff",
    padding: 8,
    fontSize: 16,
    marginTop: 16,
  },
  button: {
    width: 56,
    height: 56,
    backgroundColor: '#31CF67',
    borderRadius: 4,

    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 32,
  }
});

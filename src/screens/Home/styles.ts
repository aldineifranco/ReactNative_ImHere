import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    gap: 8,
    backgroundColor: "#18181b",
    padding: 32,
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
  form: {
    width: "100%",
    flexDirection: "row",
    marginTop: 32,
    marginBottom: 40,
    gap: 12,
  },
  input: {
    flex: 1,
    height: 56,
    backgroundColor: "#27272a",
    borderRadius: 4,
    color: "#fff",
    padding: 16,
    fontSize: 16,
  },
  button: {
    width: 56,
    height: 56,
    backgroundColor: "#059669",
    borderRadius: 4,

    alignItems: "center",
    justifyContent: "center",
  },
  buttonText: {
    color: "#fff",
    fontSize: 32,
  },
  listEmptyText: {
    color: '#fff',
    fontSize: 14,
    textAlign: 'center'
  }
});

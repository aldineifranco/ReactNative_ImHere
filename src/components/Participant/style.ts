import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    width: "100%",
    backgroundColor: "#27272a",

    borderRadius: 8,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 12,
  },
  name: {
    fontSize: 16,
    color: "#fff",
    padding: 16,
  },
  button: {
    width: 56,
    height: 56,
    backgroundColor: "#dc2626",
    borderRadius: 4,

    alignItems: "center",
    justifyContent: "center",
  },
  buttonText: {
    color: "#fff",
    fontSize: 32,
  },
});
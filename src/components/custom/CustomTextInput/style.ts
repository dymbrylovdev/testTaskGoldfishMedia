import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: "center",
    marginBottom: 8,
  },
  input: {
    flex:1,
    borderColor: "#CACACC",
    padding: 10,
    borderWidth: 1,
    borderRadius: 8,
    fontSize:15,
    paddingLeft: 16,
  },
  text: {
    fontFamily:'Manrope-SemiBold',
    fontSize: 12,
    color: '#000',
    width: 80,
  },
});

import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex:1,
    justifyContent: 'flex-end',
    position: "relative",
    paddingBottom: 56,
  },
  wrap_logo: {
    width: '100%',
    alignItems: 'center',
    position: 'absolute',
    paddingHorizontal: 11,
    top: '50%',
  },
  title: {
    color: '#fff',
    fontSize: 30,
    fontFamily:'Manrope-SemiBold',
     textAlign: 'center'
  },
  logo: {
    position: 'absolute',
    top: -127
  },
  button: {
    borderRadius: 12,
    borderWidth: 2,
    borderColor: '#FFF',
    paddingVertical: 15,
    marginTop: 16,
  },
  button_text: {
    color: '#FFF',
    fontSize: 17,
    fontFamily:'Manrope-SemiBold',
  }
});

import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    height: '100%',
  },
  form: {
    flex:1,
    marginTop: 16,
    backgroundColor: '#FFF',
    paddingHorizontal: 17,
    paddingTop: 60,
    borderTopLeftRadius: 16,
    borderTopRightRadius: 16,
  },
  form_logo: {
    position: "absolute",
    left: "50%",
    transform: [
      {translateX: -15},
      {translateY: -15}
    ]
  },
  code_field: {
    justifyContent: "center",
    alignItems: "center",

  },
  code_field_title: {
    color: '#000',
    fontSize: 21,
    fontFamily:'Manrope-Bold',
    marginBottom: 14,
  },
  code_field_text_link: {
    color: '#1E63EE',
    fontSize: 14,
    fontFamily:'Manrope-SemiBold',
    marginVertical: 16,
  },
  button__next: {
    borderRadius: 12,
    backgroundColor: '#1E63EE',
    paddingVertical: 15,
    marginBottom: 8
  },
  button__next_text: {
    color: '#FFF',
    fontSize: 17,
    fontFamily:'Manrope-SemiBold',
  }
});

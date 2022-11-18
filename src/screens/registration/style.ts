import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex:1,

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
  },
  container_input: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: "center",
    marginBottom: 8,
  },
  select: {
    flex:1,
    borderWidth: 1,
    borderColor: "#CACACC",
    borderRadius: 8,
    fontSize:15,
    paddingLeft: 5,
    overflow: "hidden",
    backgroundColor: "#FFF",
    height: 48,
    justifyContent: "center",
  },
  text_radio_button: {
    color: '#1E63EE',
    fontFamily:'Manrope-SemiBold',
    fontSize: 13,
    textDecorationLine: 'underline',
  },
  text: {
    fontFamily:'Manrope-SemiBold',
    fontSize: 12,
    color: '#000',
    width: 80,
  },
  text_document: {
    fontFamily:'Manrope-Medium',
    fontSize: 15,
    color: '#1E63EE',
  },
  document_item: {
    position: "absolute",
    bottom: '-100%',
    backgroundColor: '#E9F0FE',
    borderRadius: 18,
    paddingVertical: 6,
    paddingHorizontal: 12,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 8,
  },
  document_item_text: {
    color: '#1E63EE',
    fontSize: 13,
    fontFamily:'Manrope-SemiBold',
    marginRight: 6
  },
  document: {
    flex:1,
    flexDirection: 'row',
    borderColor: "#1E63EE",
    borderStyle: 'dashed',
    padding: 10,
    borderWidth: 1.2,
    borderRadius: 8,
    paddingLeft: 15,
    height: 48,
    alignItems: "center",
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
  container__item_radio: {
      height: 20,
      width: 20,
      borderRadius:4,
  },
  button__next: {
    borderRadius: 12,
    backgroundColor: '#1E63EE',
    paddingVertical: 15,
    marginTop: 16,
    marginBottom: 8
  },
  button__next_text: {
    color: '#FFF',
    fontSize: 17,
    fontFamily:'Manrope-SemiBold',
  }
});

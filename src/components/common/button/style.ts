import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  button__style: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative'
  },
  button__style__opacity: {
    position: 'absolute',
    zIndex: 100000000,
    opacity: 0.5,
    width:'100%',
    height: '100%',
    backgroundColor: '#FFFFFF',
    overflow: 'hidden',
  }
});

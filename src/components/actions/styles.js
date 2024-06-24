import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  buttons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 16
  },
  button: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#674EFF',
    paddingTop: 8, // Top padding
    paddingRight: 10, // Right padding
    paddingBottom: 8, // Bottom padding
    paddingLeft: 2, // Left padding
    borderRadius: 8,
  },
  buttonOutline: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#000',
    borderWidth: 1,
    borderColor: '#fff',
    paddingTop: 8, // Top padding
    paddingRight: 10, // Right padding
    paddingBottom: 8, // Bottom padding
    paddingLeft: 2, // Left padding
    borderRadius: 8,
  },
  buttonText: {
    fontSize: 12,
    color: '#fff',
    fontWeight: 'bold',
    textAlign: 'center'
  },
});

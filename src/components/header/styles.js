import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  header: {
    padding: 16,
  },
  row: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  walletBalance: {
    fontSize: 18,
    fontWeight: '600',
    color: '#fff',
  },
  notificationsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  notifications: {
    color: '#9583FF',
    fontWeight: '600',

    fontSize: 14,
  },
  icon: {
    paddingHorizontal: 4,
    width: 24,
    height: 24,
  },

  balanceAmount: {
    fontSize: 40,
    fontWeight: 'bold',
    color: '#fff',
    marginVertical: 8,
  },
  balanceChange: {
    fontSize: 12,
    color: '#51DA4C',
    fontWeight: '600'
  },
  date: {
    fontSize: 16,
    color: '#A7A5A3',
    fontWeight: '400'
  },
  buttonText: {
    fontSize: 12,
    color: '#fff',
    fontWeight: 'bold',
    textAlign: 'center'
  },
  
});

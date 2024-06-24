import {StyleSheet, Dimensions} from 'react-native';
import {Colors} from 'react-native/Libraries/NewAppScreen';

const {height} = Dimensions.get('window');
export const styles = StyleSheet.create({
  drawer: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
    height: height * 0.4,
    backgroundColor: '#1E1D1D',
    borderTopLeftRadius: 24,
    borderTopRightRadius: 24,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: -2},
    shadowOpacity: 0.2,
    shadowRadius: 10,
    elevation: 5,
  },
  bar: {
    height: 6,
    width: 48,
    backgroundColor: '#4A4948',
    borderRadius: 90,
    alignSelf: 'center',
    marginBottom: 24,
  },
  drawerContent: {
    flex: 1,
    padding: 20,
  },
  drawerTitle: {
    fontSize: 21,
    fontWeight: '600',
    marginBottom: 10,
    textAlign: 'center',
    color: '#fff',
  },
  content: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '400',
  },
  portfolio: {
    padding: 16,
  },
  filterContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between'


  }, 
  filterContainers: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 16,
    paddingHorizontal: 24 
  },
  filterValueText: {
    fontSize: 16,
    fontWeight: '400',
    paddingHorizontal: 6,
    color: '#fff',
  },
  filterText: {
    color: '#A7A5A3'
  },
  coinContainer: {
    flexDirection: 'row',
    alignItems: 'center',

  },
  
  portfolioTitle: {
    fontSize: 18,
    fontWeight: '800',
    color: '#fff',
    marginBottom: 16
  },
  portfolioItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderColor: '#313130',
    borderWidth: 1,
    borderRadius: 12,
    marginVertical: 16,
    padding:16
  },
  portfolioItemText: {
    fontSize: 16,
    fontWeight: '600',
    paddingHorizontal: 6,
    color: '#fff',
  },
  portfolioItemAmount: {
    fontSize: 16,
    fontWeight: '600',
    paddingHorizontal: 4,
    color: '#fff',
  },
  portfolioSymbol: {
    fontSize: 16,
    textTransform: 'uppercase',
    fontWeight: '600',
    paddingHorizontal: 4,
    color: '#fff',

  },
  portfolioSmallName: {
    fontSize: 12,
    fontWeight: '400',
    paddingHorizontal: 4,
    color: '#A7A5A3',
  }, 
  icon: {
    paddingHorizontal: 4,
    width: 48,
    height: 48,
  },
  sortIcon: {
    paddingHorizontal: 4,
    width: 24,
    height: 24,
  },
  line: {
    borderBottomColor: '#313130',
    borderBottomWidth: 1,
    marginVertical: 10,
  },
});

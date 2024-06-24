import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
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
  portfolioItemOne: {
    borderColor: '#313130',
    borderWidth: 1,
    borderRadius: 12,
    marginVertical: 16,
    padding:16,
    zIndex: 5
  },
  portfolioCont: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
   
   
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
  chartContainer: {
   left: 40
  }
  
});

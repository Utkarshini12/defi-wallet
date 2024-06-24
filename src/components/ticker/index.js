import React, {useContext, useEffect, useState} from 'react';
import {Text, View, Image, TouchableOpacity} from 'react-native';
import {fetchCurrencies} from '../../api/ticker';
import {styles} from './styles';
import {Switch} from 'react-native-switch';
import {DrawerContext} from '../../context';
import {userData} from '../../api/userData';
import Chart from '../chart';

const Ticker = () => {
  const [ticker, setTicker] = useState([]);
  const [view, setView] = useState(false);
  const [filterOption, setFilterOption] = useState('value');
  const {toggleDrawer, setTotalAmount} = useContext(DrawerContext);
  const [drawer, setDrawer] = useState('');

  // fetch list of assets
  const fetch = async () => {
    try {
      const onfetch = await fetchCurrencies();
      setTicker(onfetch.data);
      console.log(onfetch.data);
    } catch (error) {
      console.log('error', error);
    }
  };

  useEffect(() => {
    const total = ticker.reduce((acc, currency) => {
      const assetValue = userData.find(item => item.symbol === currency.symbol)
        ? parseFloat(
            calculatePrice(
              currency.current_price,
              userData.find(item => item.symbol === currency.symbol).value,
            ),
          )
        : 0;
      return acc + assetValue;
    }, 0);

    setTotalAmount(total);
  }, [ticker]);

  useEffect(() => {
    fetch();
  
  }, []);

  const handleFilterSelect = option => {
    setFilterOption(option);
  };

  const sortTicker = (tickerData, option) => {
    const sortedData = [...tickerData];

    if (option === 'value') {
      return sortedData.sort((a, b) => {
        const aValue = userData.find(item => item.symbol === a.symbol)
          ? parseFloat(
              calculatePrice(
                a.current_price,
                userData.find(item => item.symbol === a.symbol).value,
              ),
            )
          : 0;
        const bValue = userData.find(item => item.symbol === b.symbol)
          ? parseFloat(
              calculatePrice(
                b.current_price,
                userData.find(item => item.symbol === b.symbol).value,
              ),
            )
          : 0;
        return bValue - aValue;
      });
    } else if (option === 'asc') {
      return sortedData.sort((a, b) => a.name.localeCompare(b.name));
    } else if (option === 'dsc') {
      return sortedData.sort((a, b) => b.name.localeCompare(a.name));
    }
    return sortedData;
  };

  // filter content
  const Content = () => {
    return (
      <View>
        <TouchableOpacity
          style={styles.filterContainers}
          onPress={() => handleFilterSelect('value')}>
          <View style={styles.coinContainer}>
            <Image source={require('../../assets/value.png')} />
            <Text style={styles.filterValueText}>Value</Text>
          </View>
          {filterOption === 'value' ? (
            <Image source={require('../../assets/Checkbox.png')} />
          ) : (
            <Image source={require('../../assets/uncheck.png')} />
          )}
        </TouchableOpacity>
        <View style={styles.line} />
        <TouchableOpacity
          style={styles.filterContainers}
          onPress={() => handleFilterSelect('asc')}>
          <View style={styles.coinContainer}>
            <Image source={require('../../assets/asc.png')} />
            <Text style={styles.filterValueText}>A-Z</Text>
          </View>
          {filterOption === 'asc' ? (
            <Image source={require('../../assets/Checkbox.png')} />
          ) : (
            <Image source={require('../../assets/uncheck.png')} />
          )}
        </TouchableOpacity>
        <View style={styles.line} />
        <TouchableOpacity
          style={styles.filterContainers}
          onPress={() => handleFilterSelect('dsc')}>
          <View style={styles.coinContainer}>
            <Image source={require('../../assets/asc.png')} />
            <Text style={styles.filterValueText}>Z-A</Text>
          </View>
          {filterOption === 'dsc' ? (
            <Image source={require('../../assets/Checkbox.png')} />
          ) : (
            <Image source={require('../../assets/uncheck.png')} />
          )}
        </TouchableOpacity>
      </View>
    );
  };

  const calculatePrice = (price, amount) => {
    const total = parseFloat(price) * parseFloat(amount);
    return total.toFixed(2);
  };

  

  return (
    <View style={styles.portfolio}>
      <Text style={styles.portfolioTitle}>Portfolio </Text>

      <View style={styles.filterContainer}>
        <Switch
          value={view}
          onValueChange={setView}
          backgroundActive="#313130"
          backgroundInactive="#313130"
          circleActiveColor={'#9583FF'}
          circleInActiveColor={'#9583FF'}
          circleSize={25}
          barHeight={30}
          // changeValueImmediately={true}
          renderActiveText={false}
          renderInActiveText={false}
          renderInsideCircle={() => (
            <>
              {view ? (
                <Image source={require('../../assets/toggleTrue.png')} />
              ) : (
                <Image source={require('../../assets/toggle.png')} />
              )}
            </>
          )}
        />
        <TouchableOpacity
          style={styles.filterContainer}
          onPress={() =>
            toggleDrawer(true, {
              title: 'Sort By',
              content: <Content />,
            })
          }>
          <Text style={styles.filterText}>Sort</Text>
          <Image
            source={require('../../assets/sort.png')}
            style={{width: 24, height: 24}}
          />
        </TouchableOpacity>
      </View>

      {sortTicker(ticker, filterOption)?.map((currency, i) => (
        <>
          {view ? (
            <View style={styles.portfolioItem} key={i}>
              <View style={styles.coinContainer}>
                <View style={styles.hexagonInner}>
                  <Image
                    source={{uri: `${currency?.image}`}}
                    style={styles.icon}
                  />
                </View>

                <Text style={styles.portfolioItemText}>{currency.name}</Text>
              </View>

              <Text style={styles.portfolioItemAmount}>
                ${' '}
                {userData.find(item => item.symbol === currency.symbol)
                  ? calculatePrice(
                      currency.current_price,
                      userData.find(item => item.symbol === currency.symbol)
                        .value,
                    )
                  : '0'}
              </Text>
            </View>
          ) : (
            <View style={styles.portfolioItemOne}>
              <View style={styles.portfolioCont} key={i}>
                <View style={styles.coinContainer}>
                  <View style={styles.hexagonInner}>
                    <Image
                      source={{uri: `${currency?.image}`}}
                      style={styles.icon}
                    />
                  </View>
                  <View>
                    <Text style={styles.portfolioSymbol}>
                      {currency.symbol}
                    </Text>
                    <Text style={styles.portfolioSmallName}>
                      {currency.name}
                    </Text>
                  </View>
                </View>
                <Text style={styles.portfolioItemAmount}>
                  ${' '}
                  {userData.find(item => item.symbol === currency.symbol)
                    ? calculatePrice(
                        currency.current_price,
                        userData.find(item => item.symbol === currency.symbol)
                          .value,
                      )
                    : '0'}
                </Text>
              </View>
              <View style={styles.chartContainer}>
                <Chart
                  height={100}
                  width={300}
                  color="rgba(149, 131, 255, 1)"
                  showIntervals={false}
                  shadow={false}
                />
              </View>
              <View></View>
            </View>
          )}
        </>
      ))}
    </View>
  );
};

export default Ticker;

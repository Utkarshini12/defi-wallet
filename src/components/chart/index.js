import React, {useState, useEffect} from 'react';
import {
  View,
  Dimensions,
  StyleSheet,
  Text,
  TouchableOpacity,
} from 'react-native';
import {LineChart} from 'react-native-chart-kit';
import axios from 'axios';

const screenWidth = Dimensions.get('window').width;

const intervals = ['1d', '7d', '1m', '3m', '1y'];

const Chart = ({width, height, color, showIntervals, shadow}) => {
  const [data, setData] = useState([]);
  const [labels, setLabels] = useState([]);
  const [selectedInterval, setSelectedInterval] = useState('1d');
  const [tooltip, setTooltip] = useState(null);
  

  useEffect(() => {
    const fetchData = async () => {
      const prices = await fetchBitcoinData(selectedInterval);
      const dataPoints = prices.map(price => price[1]);
      const labelPoints = prices.map(price =>
        new Date(price[0]).toLocaleDateString(),
      );

      setData(dataPoints);
      setLabels(labelPoints);
    };

    fetchData();
  }, [selectedInterval]);

  const fetchBitcoinData = async interval => {
    const end = Math.floor(Date.now() / 1000);
    let start;
    switch (interval) {
      case '1d':
        start = end - 24 * 60 * 60;
        break;
      case '7d':
        start = end - 7 * 24 * 60 * 60;
        break;
      case '1m':
        start = end - 30 * 24 * 60 * 60;
        break;
      case '3m':
        start = end - 90 * 24 * 60 * 60;
        break;
      case '1y':
        start = end - 365 * 24 * 60 * 60;
        break;
      default:
        start = end - 24 * 60 * 60;
    }

    const url = `https://api.coingecko.com/api/v3/coins/bitcoin/market_chart/range?vs_currency=usd&from=${start}&to=${end}`;
    const response = await axios.get(url);
    return response.data.prices;
  };

  const chartConfig = {
    backgroundGradientFrom: '#000',
    backgroundGradientTo: '#000',
    color: (opacity = 1) => `rgba(149, 131, 255, ${opacity})`,
    strokeWidth: 2, // optional, default 3
  };

  const handlePress = point => {
    setTooltip(point);
  };

  return (
    <View style={styles.container}>
      <LineChart
        data={{
          labels: [],
          datasets: [
            {
              data: data,
              color: () => `${color}`, // Line color purple
            },
          ],
        }}
        width={width}
        height={height}
        chartConfig={chartConfig}
        bezier
        style={{marginTop: 20, borderRadius: 16, left: -60}}
        onDataPointClick={({value, getColor}) => handlePress(value)}
        withInnerLines={false}
        withOuterLines={false}
        withVerticalLines={false}
        yAxisLabel={false}
        withDots={false}
        withHorizontalLines={false}
        withVerticalLabels={false}
        withHorizontalLabels={false}
        yAxisSuffix={false}
        fromZero={false}
        withShadow={shadow}
      />
      {tooltip && (
        <View style={styles.tooltip}>
          <Text style={styles.tooltipText}>${tooltip}</Text>
        </View>
      )}
      <View style={styles.selectContainer}>
        {showIntervals && intervals.map(interval => (
          <TouchableOpacity
            key={interval}
            onPress={() => setSelectedInterval(interval)}
            style={[
              styles.intervalButton,
              selectedInterval === interval && {
                backgroundColor: '#313130',
                color: '#fff',
              },
            ]}>
            <Text
              style={[
                styles.intervalText,
                selectedInterval === interval && {
                  fontWeight: '600',
                  color: '#fff',
                },
              ]}>
              {interval.toUpperCase()}
            </Text>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#000',
  },
  selectContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
  },

  intervalButton: {
    backgroundColor: '#000',
    borderRadius: 4,
    borderWidth: 1,
    borderColor: '#313130',
    paddingVertical: 4,
    paddingHorizontal: 8,
    margin: 8,

    width: 50,
    height: 25,
  },
  intervalText: {
    color: '#626160',
    textAlign: 'center',
  },
  tooltip: {
    position: 'absolute',
    top: 50,
    left: 50,
    backgroundColor: '#333',
    padding: 5,
    borderRadius: 5,
  },
  tooltipText: {
    color: '#fff',
  },
});

export default Chart;

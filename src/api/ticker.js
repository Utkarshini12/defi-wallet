import axios from "axios";


export const fetchCurrencies = async () => {
    return await axios.get(`https://api.coingecko.com/api/v3/coins/markets?vs_currency=USD&order=market_cap_desc&per_page=10&page=1&sparkline=false`)
  
};


export const fetchBitcoinData = async (interval) => {
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

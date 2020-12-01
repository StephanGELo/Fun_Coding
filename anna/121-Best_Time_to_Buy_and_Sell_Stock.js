/*
121. Best Time to Buy and Sell Stock
*/

const maxProfit = function(prices) {
  let minprice = Number.MAX_VALUE;
  let maxprofit = 0;

  for (let i = 0; i < prices.length; i++) {
    if (prices[i] < minprice)
      minprice = prices[i];
    else if (prices[i] - minprice > maxprofit)
      maxprofit = prices[i] - minprice;
  }

  return maxprofit;
}



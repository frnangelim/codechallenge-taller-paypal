function minimumSum(coinsObj) {
  const coins = coinsObj.coins
  if (coins.length === 0)
  	return 0;
  if (coins.length === 1)
  	return coins[0] + 1;
   
  const coinsSorted = coins.sort((a, b) => a > b ? 1 : -1);
  coinsSorted.pop();
  return coinsSorted.reduce((sum, a) => a + sum) + 1;
}

function minimumSumOptimized(coinsObj) {
	
}

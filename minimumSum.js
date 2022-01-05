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
  const coins = coinsObj.coins
  let max = 0;
  let sum = 0;
  
  for (let i = 0; i < coins.length; i++) {
  	if (coins[i] > max) {
    	max = coins[i];
    }
    sum += coins[i];
  }
  
  return (sum - max) + 1;
}

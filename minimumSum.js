function minimumSum(coinsObj) {
	const coins = coinsObj.coins
  if (coins.length <= 1)
  	return 0;
   
  const coinsSorted = coins.sort((a, b) => a > b ? 1 : -1);
  coinsSorted.pop();
  return coinsSorted.reduce((sum, a) => a + sum) + 1;
}

function minimumSumOptimized(coinsObj) {

}

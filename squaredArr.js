fuxnction squareArr(inputObj) {
	const arr = inputObj.array;
	const squared = arr.map(e => e * e);
	return squared.sort((a, b) => a > b ? 1 : - 1);
}

function squareArrOptimized(inputObj) {
  const arr = inputObj.array;
  
  const orderedRes = [];
  let left = 0;
  let right = arr.length - 1;
  let current = right;
  
  while (left <= right) {
  	if (Math.abs(arr[left]) > Math.abs(arr[right])) {
    	orderedRes[current] = arr[left] * arr[left];
      current--;
      left++;
    } else {
    	orderedRes[current] = arr[right] * arr[right];
    	current--;
    	right--;
    }
  }
  
  return orderedRes;
}

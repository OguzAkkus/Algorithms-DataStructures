/*
Collection numbers
I need you to take this collection of numbers and
find a matching pair that is equal to a sum 
that I give you as well
example
  [1, 2, 3, 9] sum = 8
  [1, 2, 4, 4] sum = 8
*/

const array1 = [1, 2, 3, 9];
const array2 = [1, 2, 4, 4];
const sum = 8;

function hasPairWithSum1(arr, sum) {
  let low = 0;
  let hight = arr.length -1;
  while (low < hight) {
    let s = arr[low] + arr[hight];
    if (s === sum) return true;
    else if (s > sum) hight--;
    else low++;
   }
   return false;
}

//*** I can no longer numbers in this collection are sorted ***

// Naive Solution
function hasPairWithSum2(arr, sum){
  var len = arr.length;
  for(var i = 0; i < len-1; i++){
    for(var j = i+1; j< len; j++){
      if (arr[i] + arr[j] === sum)
        return true;
    }
  }  
  return false; 
}

// Better Solution
function hasPairWithSum3(arr, sum){
  const mySet = new Set();
  const len = arr.length;
  for (let i = 0; i < len; i++){
    if (mySet.has(arr[i])) {
      return true;
    }
    mySet.add(sum - arr[i]);
  }
  return false;
}
  
console.log(
  hasPairWithSum1(array1, sum),
  hasPairWithSum1(array2, sum),

  hasPairWithSum2(array1, sum),
  hasPairWithSum2(array2, sum),

  hasPairWithSum3(array1, sum),
  hasPairWithSum3(array2, sum)
);
// //  ###### Example 1 ######

/* Given 2 arrays, create a function that
let's a user know (tru/false) whether
these two arrays contain any common items*/

// const array1 = ['a', 'b', 'c', 'x'];
// const array2 = ['z', 'y', 'i'];
// //should return false.
// //-------------
const array1 = ['a', 'b', 'c', 'x'];
const array2 = ['z', 'y', 'x'];
// //should return true.

// // 2 parameters - arrays - no size limit
// // return true or false
// // ----------------

// //  ###### Solution 1 ######
// //   --> Time O(a*b) ---> Space O(1)
function containsCommonItem1(arr1, arr2) {
  for (let i=0; i < arr1.length; i++) { //----> (a) 
    for (let j=0; j < arr2.length; j++) {//---> (a*b)
      if(arr1[i] === arr2[j]) {
        return true;
      }
    }
  }
  return false;
}

// //  ###### Solution 2 ######
// //   ---> Time O(a+b) ---> Space O(a)
function containsCommonItem2(arr1, arr2) {
  /* Loop through first array and create object
  where properties === items in the array */
  
  let map = {}; //--------------------------> Space (a)
  for (let i=0; i < arr1.length; i++) {//---> Time (a)
    if(!map[arr1[i]]) {
      const item = arr1[i];
      map[item] = true;
    }
  }
  /* Loop through second array and check if item
  in second array exists on created object. */ 
  for (let j=0; j < arr2.length; j++) {//---> Time (b)
    if (map[arr2[j]]) {
      return true;
    }
  }
  return false;
 }

// //  ###### Solution 3 ######
// //   ---> with Js methods
function containsCommonItem3(arr1,arr2) {
  return arr1.some(item => arr2.includes(item))
}

console.log(
containsCommonItem1(array1, array2),
containsCommonItem2(array1, array2),
containsCommonItem3(array1, array2)
)
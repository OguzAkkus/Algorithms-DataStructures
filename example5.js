//Google Question
//Given an array = [2,5,1,2,3,5,1,2,4];
//It should return 2 

//Given an array = [2,1,1,2,3,5,1,2,4];
//It should return 1

//Given an array = [2,3,4,5];
//It should return undefined

function findFirstMatch(input){
  
  const map = {}
  if(input) {
    for(let i = 0; i < input.length; i++) {
      if(map[input[i]] !== undefined) {
      return input[i]
      }
      map[input[i]] = 0;
    }
  }
} // O(n)


const array1 = [2,5,1,2,3,5,1,2,4];
const array2 = [2,1,1,2,3,5,1,2,4];
const array3 = [2,3,4,5];

console.log(
  findFirstMatch(array3)
);
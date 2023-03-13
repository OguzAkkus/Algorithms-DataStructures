const strings = ['a', 'b', 'c', 'd'];
// 4*4 = 16 bytes of storage

//push ----->Time O(1)
strings.push('e');

//pop ------>Time O(1)
strings.pop();

//unshift -->Time O(n)
strings.unshift('x');

//splice --->Time O(n)
strings.splice(2, 0, 'alien');

console.log(strings)
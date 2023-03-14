// Create a function that reverses a string:
const string = 'Hi My name is Oguzcan';
// Should be:'naczugO si eman yM iH'

function reverse1(str) {
//check input
if (!str || str.length < 2 || typeof str !== 'string') {
  return 'that is not good!';
}

const backwards = [];
const totalItems = str.length - 1;
for (let i = totalItems; i >= 0; i--) {
  backwards.push(str[i]);
}

  return backwards.join('')
}

function reverse2(str) {
  return str.split('').reverse().join('')
}

const reverse3 = str => str.split('').reverse().join('');
const reverse4 = str => [...str].reverse().join('');


console.log(
reverse1(string),'\n',
reverse2(string),'\n',
reverse3(string),'\n',
reverse4(string)
);
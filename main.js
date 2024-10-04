function printOutput(questionNumber, content) {
  const outputDiv = document.getElementById("output");
  outputDiv.innerHTML += `<div class="display"> <span>${questionNumber}  ${content}</span> </div>`;
}

// 1. Print numbers from 1 to 10
printOutput(1, ". Numbers from 1 to 10:");
for (let i = 1; i <= 10; i++) {
  printOutput("", i);
}

// 2. Print the odd numbers less than 100
printOutput(2, ". Odd numbers less than 100:");
for (let i = 1; i < 100; i += 2) {
  printOutput("", i);
}

// 3. Print the multiplication table with 7
printOutput(3, ". Multiplication table with 7:");
for (let i = 1; i <= 10; i++) {
  printOutput("", `7 x ${i} = ${7 * i}`);
}

// 4. Print all the multiplication tables with numbers from 1 to 10
printOutput(4, "All multiplication tables with numbers from 1 to 10:");
for (let i = 1; i <= 10; i++) {
  for (let j = 1; j <= 10; j++) {
      printOutput("", `${i} x ${j} = ${i * j}`);
  }
}

// 5. Calculate the sum of numbers from 1 to 10
let sum = 0;
for (let i = 1; i <= 10; i++) {
  sum += i;
}
printOutput(5, `Sum: ${sum}`);

// 6. Calculate 10!
let factorial = 1;
for (let i = 1; i <= 10; i++) {
  factorial *= i;
}
printOutput(6, `10! = ${factorial}`);

// 7. Calculate the sum of even numbers greater than 10 and less than 30
sum = 0;
for (let i = 12; i < 30; i += 2) {
  sum += i;
}
printOutput(7, `Sum of even numbers between 10 and 30: ${sum}`);

// 8. Create a function that will convert from Celsius to Fahrenheit
function celsiusToFahrenheit(celsius) {
  return (celsius * 9) / 5 + 32;
}
printOutput(8, `0°C to Fahrenheit: ${celsiusToFahrenheit(0)}`);

// 9. Create a function that will convert from Fahrenheit to Celsius
function fahrenheitToCelsius(fahrenheit) {
  return ((fahrenheit - 32) * 5) / 9;
}
printOutput(9, `32°F to Celsius: ${fahrenheitToCelsius(32)}`);

// 10. Calculate the sum of numbers in an array of numbers
function sumArray(arr) {
  return arr.reduce((acc, curr) => acc + curr, 0);
}
printOutput(10, `Sum of array [1, 2, 3, 4, 5]: ${sumArray([1, 2, 3, 4, 5])}`);

// 11. Calculate the average of the numbers in an array of numbers
function averageArray(arr) {
  return sumArray(arr) / arr.length;
}
printOutput(11, `Average of array [1, 2, 3, 4, 5]: ${averageArray([1, 2, 3, 4, 5])}`);

// 12. Create a function that receives an array of numbers as argument and returns an array containing only the positive numbers
function getPositiveNumbers(arr) {
  return arr.filter((num) => num > 0);
}
printOutput(12, `Positive numbers in [-3, -2, 0, 1, 2, 3]: ${getPositiveNumbers([-3, -2, 0, 1, 2, 3])}`);

// 13. Find the maximum number in an array of numbers
function maxNumber(arr) {
  return Math.max(...arr);
}
printOutput(13, `Max number in [1, 2, 3, 4, 5]: ${maxNumber([1, 2, 3, 4, 5])}`);

// 14. Print the first 10 Fibonacci numbers without recursion
let fib = [0, 1];
printOutput(14, "First 10 Fibonacci numbers:");
for (let i = 2; i < 10; i++) {
  fib[i] = fib[i - 1] + fib[i - 2];
}
fib.forEach((num) => printOutput("", num));

// 15. Create a function that will find the nth Fibonacci number using recursion
function fibonacci(n) {
  if (n <= 1) return n;
  return fibonacci(n - 1) + fibonacci(n - 2);
}
printOutput(15, `10th Fibonacci number: ${fibonacci(10)}`);

// 16. Create a function that will return a Boolean specifying if a number is prime
function isPrime(num) {
  if (num <= 1) return false;
  for (let i = 2; i <= Math.sqrt(num); i++) {
      if (num % i === 0) return false;
  }
  return true;
}
printOutput(16, `Is 7 prime? ${isPrime(7)}`);

// 17. Calculate the sum of digits of a positive integer number
function sumOfDigits(num) {
  return num
      .toString()
      .split("")
      .reduce((acc, curr) => acc + Number(curr), 0);
}
printOutput(17, `Sum of digits of 1234: ${sumOfDigits(1234)}`);

// 18. Print the first 100 prime numbers
let primes = [];
for (let i = 2; primes.length < 100; i++) {
  if (isPrime(i)) primes.push(i);
}
printOutput(18, `First 100 prime numbers: ${primes}`);

// 19. Create a function that will return in an array the first “p” prime numbers greater than “n”
function primeNumbersGreaterThan(n, p) {
  let primes = [];
  let num = n + 1;
  while (primes.length < p) {
      if (isPrime(num)) primes.push(num);
      num++;
  }
  return primes;
}
printOutput(19, `First 5 prime numbers greater than 10: ${primeNumbersGreaterThan(10, 5)}`);

// 20. Rotate an array to the left 1 position
function rotateLeft(arr) {
  let first = arr.shift();
  arr.push(first);
  return arr;
}
printOutput(20, `Array [1, 2, 3, 4, 5] rotated left: ${rotateLeft([1, 2, 3, 4, 5])}`);

// 21. Rotate an array to the right 1 position
function rotateRight(arr) {
  let last = arr.pop();
  arr.unshift(last);
  return arr;
}
printOutput(21, `Array [1, 2, 3, 4, 5] rotated right: ${rotateRight([1, 2, 3, 4, 5])}`);

// 22. Reverse an array
function reverseArray(arr) {
  return arr.reverse();
}
printOutput(22, `Array [1, 2, 3, 4, 5] reversed: ${reverseArray([1, 2, 3, 4, 5])}`);

// 23. Reverse a string
function reverseString(str) {
  return str.split("").reverse().join("");
}
printOutput(23, `String "hello" reversed: ${reverseString("hello")}`);

// 24. Create a function that will merge two arrays and return the result as a new array
function mergeArrays(arr1, arr2) {
  return arr1.concat(arr2);
}
printOutput(24, `Merged arrays [1, 2, 3] and [4, 5, 6]: ${mergeArrays([1, 2, 3], [4, 5, 6])}`);

// 25. Create a function that will receive two arrays of numbers as arguments and return an array composed of all the numbers that are either in the first array or second array but not in both
function symmetricDifference(arr1, arr2) {
  return arr1
      .filter((x) => !arr2.includes(x))
      .concat(arr2.filter((x) => !arr1.includes(x)));
}
printOutput(25, `Symmetric difference of [1, 2, 3] and [2, 3, 4]: ${symmetricDifference([1, 2, 3], [2, 3, 4])}`);

// 26. Create a function that will receive two arrays and will return an array with elements that are in the first array but not in the second
function difference(arr1, arr2) {
  return arr1.filter((x) => !arr2.includes(x));
}
printOutput(26, `Difference of [1, 2, 3] minus [2, 3, 4]: ${difference([1, 2, 3], [2, 3, 4])}`);

// 27. Create a function that will receive an array of numbers as argument and will return a new array with distinct elements
const distinctArray = (arr) => {
  return [...new Set(arr)];
};
printOutput(27, `Distinct elements from [1, 2, 2, 3, 4, 4]: ${distinctArray([1, 2, 2, 3, 4, 4])}`);

// 28. Calculate the sum of first 100 prime numbers and return them in an array
const first100PrimesSum = () => {
  const isPrime = (num) => {
      if (num < 2) return false;
      for (let i = 2; i <= Math.sqrt(num); i++) {
          if (num % i === 0) return false;
      }
      return true;
  };

  let primes = [];
  let num = 2;
  while (primes.length < 100) {
      if (isPrime(num)) primes.push(num);
      num++;
  }
  const sum = primes.reduce((sum, prime) => sum + prime, 0);
  return [primes, sum];
};

const [primes1, sumPrimes] = first100PrimesSum();
printOutput(28, `First 100 primes: ${primes} with sum: ${sumPrimes}`);

// 29. Print the distance between the first 100 prime numbers
const primeDistances = () => {
  const [primes] = first100PrimesSum();
  let distances = [];
  for (let i = 1; i < primes1.length; i++) {
      distances.push(primes[i] - primes1[i - 1]);
  }
  return distances;
};
const distances = primeDistances();
printOutput(29, `Distances between first 100 primes: ${distances}`);

// 30. Create a function that will add two positive numbers of indefinite size. The numbers are received as strings and the result should be also provided as string.
const addLargeNumbers = (num1, num2) => {
  let result = '';
  let carry = 0;
  let i = num1.length - 1;
  let j = num2.length - 1;

  while (i >= 0 || j >= 0 || carry) {
      const digit1 = i >= 0 ? +num1[i] : 0;
      const digit2 = j >= 0 ? +num2[j] : 0;
      let sum = digit1 + digit2 + carry;
      carry = Math.floor(sum / 10);
      result = (sum % 10) + result;
      i--;
      j--;
  }

  return result;
};
printOutput(30, `Adding large numbers "123456789123456789" and "987654321987654321": ${addLargeNumbers("123456789123456789", "987654321987654321")}`);

// 31. Create a function that will return the number of words in a text
const wordCount = (text) => text.split(/\s+/).filter(Boolean).length;
printOutput(31, `Number of words in "Hello world! This is a test.": ${wordCount("Hello world! This is a test.")}`);

// 32. Create a function that will capitalize the first letter of each word in a text
const capitalizeWords = (text) => text.replace(/\b\w/g, (char) => char.toUpperCase());
printOutput(32, `Capitalized text: "${capitalizeWords("hello world!")}"`);

// 33. Calculate the sum of numbers received in a comma delimited string
const sumCommaDelimited = (str) => str.split(',').reduce((sum, num) => sum + parseFloat(num), 0);
printOutput(33, `Sum of "1,2,3,4,5": ${sumCommaDelimited("1,2,3,4,5")}`);

// 34. Create a function that returns an array with words inside a text.
const wordsArray = (text) => text.split(/\s+/).filter(Boolean);
printOutput(34, `Words in "Hello world!": ${wordsArray("Hello world!")}`);

// 35. Create a function to convert a CSV text to a “bi-dimensional” array
const csvToArray = (csv) => csv.split('\n').map(row => row.split(','));
printOutput(35, `CSV to array: ${JSON.stringify(csvToArray("a,b,c\n1,2,3"))}`);

// 36. Create a function that converts a string to an array of characters
const stringToCharArray = (str) => str.split('');
printOutput(36, `String "hello" to char array: ${stringToCharArray("hello")}`);

// 37. Create a function that will convert a string in an array containing the ASCII codes of each character
const stringToAsciiArray = (str) => str.split('').map(char => char.charCodeAt(0));
printOutput(37, `ASCII codes of "hello": ${stringToAsciiArray("hello")}`);

// 38. Create a function that will convert an array containing ASCII codes in a string
const asciiArrayToString = (arr) => arr.map(code => String.fromCharCode(code)).join('');
printOutput(38, `String from ASCII codes [104, 101, 108, 108, 111]: "${asciiArrayToString([104, 101, 108, 108, 111])}"`);

// 39. Implement the Caesar cypher
const caesarCipher = (str, shift) => {
  return str.replace(/[a-z]/gi, (char) => {
      const start = char <= 'Z' ? 65 : 97;
      return String.fromCharCode(((char.charCodeAt(0) - start + shift) % 26) + start);
  });
};
printOutput(39, `Caesar cipher of "abc" with shift 2: "${caesarCipher("abc", 2)}"`);

// 40. Implement the bubble sort algorithm for an array of numbers
const bubbleSort = (arr) => {
  let n = arr.length;
  let swapped;
  do {
      swapped = false;
      for (let i = 0; i < n - 1; i++) {
          if (arr[i] > arr[i + 1]) {
              [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]];
              swapped = true;
          }
      }
      n--;
  } while (swapped);
  return arr;
};
printOutput(40, `Sorted array [5, 3, 8, 1]: ${bubbleSort([5, 3, 8, 1])}`);

// 41. Create a function to calculate the distance between two points defined by their x, y coordinates
const distanceBetweenPoints = (x1, y1, x2, y2) => {
  return Math.sqrt((x2 - x1) ** 2 + (y2 - y1) ** 2);
};
printOutput(41, `Distance between points (1,2) and (4,6): ${distanceBetweenPoints(1, 2, 4, 6)}`);

// 42. Create a function that will return a Boolean value indicating if two circles defined by center coordinates and radius are intersecting
const circlesIntersect = (x1, y1, r1, x2, y2, r2) => {
  const distance = distanceBetweenPoints(x1, y1, x2, y2);
  return distance <= r1 + r2;
};
printOutput(42, `Do circles (0,0,1) and (1,1,1) intersect? ${circlesIntersect(0, 0, 1, 1, 1, 1)}`);

// 43. Create a function that will receive a bi-dimensional array as argument and a number and will extract as a unidimensional array the column specified by the number
const extractColumn = (arr, col) => arr.map(row => row[col]);
printOutput(43, `Extracted column 1 from [[1,2],[3,4]]: ${extractColumn([[1,2],[3,4]], 1)}`);

// 44. Create a function that will convert a string containing a binary number into a number
const binaryToNumber = (binaryStr) => parseInt(binaryStr, 2);
printOutput(44, `Binary "101" to number: ${binaryToNumber("101")}`);

// 45. Create a function to calculate the sum of all the numbers in a jagged array (contains numbers or other arrays of numbers on an unlimited number of levels)
const sumJaggedArray = (arr) => {
  return arr.reduce((sum, el) => sum + (Array.isArray(el) ? sumJaggedArray(el) : el), 0);
};
printOutput(45, `Sum of jagged array [1,[2,[3]],4]: ${sumJaggedArray([1,[2,[3]],4])}`);

// 46. Find the maximum number in a jagged array of numbers or array of numbers
const maxInJaggedArray = (arr) => {
  return arr.reduce((max, el) => Math.max(max, Array.isArray(el) ? maxInJaggedArray(el) : el), -Infinity);
};
printOutput(46, `Max in jagged array [[1,2],[3,4]]: ${maxInJaggedArray([[1,2],[3,4]])}`);

// 47. Create a function that will receive an object and return an array of its keys
const objectKeysToArray = (obj) => Object.keys(obj);
printOutput(47, `Keys of {a:1, b:2}: ${objectKeysToArray({a: 1, b: 2})}`);

// 48. Create a function that will receive an object and return an array of its values
const objectValuesToArray = (obj) => Object.values(obj);
printOutput(48, `Values of {a:1, b:2}: ${objectValuesToArray({a: 1, b: 2})}`);

// 49. Create a function that will merge two objects into one
const mergeObjects = (obj1, obj2) => ({ ...obj1, ...obj2 });
printOutput(49, `Merged objects {a:1} and {b:2}: ${JSON.stringify(mergeObjects({a: 1}, {b: 2}))}`);

// 50. Create a function that will return a new object with the keys and values switched (the values should be unique)
const switchKeysAndValues = (obj) => {
  const switched = {};
  for (const [key, value] of Object.entries(obj)) {
      switched[value] = key;
  }
  return switched;
};
printOutput(50, `Switched keys and values of {a:1, b:2}: ${JSON.stringify(switchKeysAndValues({a: 1, b: 2}))}`);

// 51. Create a function that will return the total number of items in an object (including nested objects)
const countItemsInObject = (obj) => {
  let count = 0;
  for (const value of Object.values(obj)) {
      count += typeof value === 'object' && value !== null ? countItemsInObject(value) : 1;
  }
  return count;
};
printOutput(51, `Count items in object {a:1, b:{c:2}}: ${countItemsInObject({a: 1, b: {c: 2}})}`);

// 52. Create a function that returns the common elements from two arrays
const commonElements = (arr1, arr2) => arr1.filter(item => arr2.includes(item));
printOutput(52, `Common elements between [1,2,3] and [2,3,4]: ${commonElements([1,2,3], [2,3,4])}`);

// 53. Create a function that returns the elements that are unique to one of two arrays
const uniqueToOneArray = (arr1, arr2) => [
  ...arr1.filter(item => !arr2.includes(item)),
  ...arr2.filter(item => !arr1.includes(item))
];
printOutput(53, `Unique elements between [1,2,3] and [2,3,4]: ${uniqueToOneArray([1,2,3], [2,3,4])}`);

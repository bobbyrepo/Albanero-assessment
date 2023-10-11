// Q1) Write a function that takes an integer 'x'(greater than 0) as input and returns a new integer
// formed by reversing the digits of 'x' without using any built-in methods for reversal. After
// reversing the digits, determine whether the resulting number has any prime factors. If it does
// have prime factors, return 'Yes' along with the list of prime factors; otherwise, return 'No'."

function isPrime(n) {
  if (n <= 1) return false;
  if (n <= 3) return true;
  if (n % 2 === 0 || n % 3 === 0) return false;
  for (let i = 5; i * i <= n; i++) {
    if (n % i === 0 || n % (i + 2) === 0) return false;
  }
  return true;
}

function checkPrimeFactors(num) {
  let reversed = num.toString().split("").reverse().join("");
  const output = [];
  for (let i = 2; i <= reversed; i++) {
    while (reversed % i == 0 && isPrime(i)) {
      output.push(i);
      reversed /= i;
    }
  }

  if (checkPrimeFactors.length > 0) {
    console.log("yes", output);
  } else {
    console.log("no");
  }
}
checkPrimeFactors(321);

//---------------------------------------------------------------------

// Q2) Given an array of strings strs, group the anagrams together. You can return the answer in
// any order.
// An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase,
// typically using all the original letters exactly once.

function groupAnagram(arr) {
  const strMap = new Map();

  for (let i = 0; i < arr.length; i++) {
    const sorted = arr[i].split("").sort().join("");
    if (!strMap.has(sorted)) {
      strMap.set(sorted, []);
    }
    strMap.get(sorted).push(arr[i]);
  }
  console.log(Array.from(strMap.values()));
}
groupAnagram(["eat", "tea", "tan", "ate", "nat", "bat"]);

//---------------------------------------------------------------------

// Q3) Given a string s and a array of strings wordArray, return true if s can be segmented into a
// space-separated sequence of one or more array words.
// Note that the same word in the array may be reused multiple times in the segmentation.

function checkWords(s, arr) {
  const map = new Map();

  function canMake(s) {
    if (map.has(s)) {
      return map.get(s);
    }

    if (s === "") {
      map.set(s, true);
      return true;
    }

    for (let i = 0; i < arr.length; i++) {
      if (s.startsWith(arr[i]) && canMake(s.slice(arr[i].length))) {
        map.set(s, true);
        return true;
      }
    }
    map.set(s, false);
    return false;
  }
  return canMake(s);
}
console.log(checkWords("catsandog", ["cats", "dog", "sand", "and", "cat"]));

//---------------------------------------------------------------------

// Q4) Given an array of non-negative integers nums, arrange them such that they form the largest
// number and return it.
// Note return the result in the form of string

function largestNum(arr) {
  //   console.log(arr);
  console.log(arr.sort((a, b) => `${b}${a}` - `${a}${b}`).join(""));
}

largestNum([3, 30, 34, 5, 9]);

//---------------------------------------------------------------------

// Q5) Given a array of non-negative integers nums, Find the Kth largest element in the array
// Note - Do not use any sorting algorithm or library's sort method
// Example-1:
// Input: nums = [10,4,12,9,87,34], K = 2
// Output: 34

function kthLargestInt(arr) {
  console.log(arr);
}
kthLargestInt([10, 4, 12, 9, 87, 34]);

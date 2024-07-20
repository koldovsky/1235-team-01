//https://www.codewars.com/kata/convert-a-string-to-an-array/train/javascript
//Write a function to split a string and convert it into an array of words.
function stringToArray(string) {
  return string.split(" ");
}

//https://www.codewars.com/kata/dna-to-rna-conversion/train/javascript
// create a function which returns an RNA sequence from the given DNA sequence
function DNAtoRNA(dna) {
  return dna.replaceAll("T", "U");
}

//https://www.codewars.com/kata/577a98a6ae28071780000989/train/javascript
//Make two functions ( max and min), that receive a list of integers as input, and return the largest and lowest number in that list, respectively.
const min = list => Math.min(...list);

const max = list => Math.max(...list);

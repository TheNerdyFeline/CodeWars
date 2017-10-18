//CodeWars Day 1 - Find # of Duplicates JS
/*I tried to use a for loop, but when I had multiple duplicates, "indiisibility", it didnt work. I found using filter was a better method, and I ran it 2x once to find duplicates and add them to an arr and a 2nd time on the duplicates to filter out repeated duplicates.*/
function duplicateCount(text){
  let letterArr = text.toLowerCase().split("").sort()
  let duplicateArr = letterArr.filter(function(elem, i, arr) {
    return arr.indexOf(elem) !== i;
  });
  let allRepeats = duplicateArr.filter(function(elem, i, arr) {
    return arr.indexOf(elem) === i;
  });
  console.log(allRepeats);
  return allRepeats.length;
};

// similar solution to mine, but combining both filters using &&
function duplicateCount(text){
  return text.toLowerCase().split('').filter(function(val, i, arr){
    return arr.indexOf(val) !== i && arr.lastIndexOf(val) === i;
  }).length;
}

//CodeWars Day 2 - Filter numbers from mixed array JS
/* I really want to learn about the built in functions available in javascript, so I am using each challenge in codewars to search the best solution and understand how to use each new method I find. For this one since it said filter I thought using the filter method again would work, but instead I found that the map method works better, and instead had it check the typeof element for each element in the array.*/
function filter_list(l) {
  let numArr = [];
  l.map(function(elem) {
    if(typeof elem === 'number') {
      numArr.push(elem);
    }
  });
  console.log(numArr);
  return numArr;
}

//CodeWars Day 3- Find # of Duplicates Py
/*I started learning python about a year and a half ago, but when I went back to school I was focusing on JavaScript. Since I finished school I decided to start praticing python again, and started repeating the kata I had already done in JS using Py. I made the mistake of thinking print would work to return the value, but that is like console.log and I needed to use return like I did in JS.*/
import collections

def duplicate_count(text):
    lower = text.lower()
    print lower
    letters = list(lower)
    seen = set()
    print letters
    duplicate = [item for item, count in collections.Counter(letters).items() if count > 1]
    print duplicate
    return len(duplicate)


//CodeWars Day 4 - Find # of Print Errors JS
/*I used the filter method in a new way to compare 2 different Arrays to find the difference.  By using == -1 it finds where elements do not match.  I had this a while ago but failed to realize that my correct array to compare to was all in upper case letters, but the print string was in all lower case letters. Once I realized my error it was easy to find the right code.*/
function printerError(s) {
  let printArr = Array(13).fill().map((_, i) => String.fromCharCode('A'.charCodeAt(0) + i));
  let printString = s.toUpperCase().split("");
  let filterPrintString = printString.filter(elem => printArr.indexOf(elem) == -1);
  return filterPrintString.length + "/" + printString.length;
}


//CodeWars Day 5 - Letterss of Natac play_if_enough() Py

def play_if_enough(hand, play):
a = list(play)
b = list(hand)
print(hand, play)
c = filter(lambda x: x in a, b)
print(c)

//printed <filter object at 0x7fd2d4e1eba8>

def play_if_enough(hand, play):
a = list(hand)
b = list(play)
print(hand, play)
c = [x for x in a if x in b] 
print(c)

// printed b

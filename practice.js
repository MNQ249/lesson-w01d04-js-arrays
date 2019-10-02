const arr = [2, 3, 4];
arr.push(5,6,7);
arr.unshift(1);
arr.unshift(0);

______________________

arr = [5, 7, 9,6]
_______________________

const arr1 = [10,  9, 6, 5]
console.log(arr1[arr1.length -1]);
____________________________

const rainbowColors = [];
rainbowColors.push("orange");
rainbowColors.push("red");
rainbowColors.push("yellow");
rainbowColors.push("green");
rainbowColors.push("blue");
rainbowColors.push("indigo");
rainbowColors.push("violet");
console.log(rainbowColors.length);
console.log(rainbowColors[1]);
console.log(rainbowColors[rainbowColors.length -1]);
console.log(rainbowColors[4]);
________________________________

splice==>  method can be used to add new items to an array

slice===>method slices out a piece of an array into a new array.
_______________________________________

const twoColors = ["orange","red", "yellow", "green", "blue", "indigo" , "violet"];
console.log("say, between the index of 1 and 3 " + twoColors[0] +" & " +twoColors[2]);

________________________________________

const nums = [0, 1, 2, 2, 2, 3, 3, 4, 5];
nums.splice(2, 2);
nums.splice(3, 1);

_______________________________________

const arrOfArrs = [["inner array first item", "inner array second item"], ["first", "second", "third"]];

console.log(arrOfArrs[0][0]);
console.log(arrOfArrs[1]);
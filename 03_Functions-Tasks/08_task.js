function countOccurrences(arr, target) {
let count = 0;
for (let num of arr) {
   if (num === target){
    count++;
   }
    }
    return count;
} console.log(countOccurrences([3,4,2,4],4));

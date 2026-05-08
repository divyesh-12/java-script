let num = 1284;
let count = 0;

while( num > 0){
    num = num / 10;
    num = num - (num % 1);
    count++;
} 
console.log(count);

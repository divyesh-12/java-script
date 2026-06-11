let num=1425;
let reverse = 0;

while ( num > 0) {
    let digit = num % 10;
    reverse= reverse * 10 + digit;
    num = (num / 10) | 0;
}
console.log(reverse) ;




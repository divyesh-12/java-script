const sumArray = (arr) => {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    return `Sum of Numbers : ${sum}`;
}

console.log(sumArray([1, 2, 3, 4, 5]));
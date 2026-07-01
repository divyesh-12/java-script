const reverseArray = (arr) => {
    let reversed = [];
    for (let i = arr.length - 1; i >= 0; i--){
        reversed.push(arr[i]);
    }
    return `reversed_Array : ${reversed}`;
}
console.log(reverseArray([11,12,13,14,15,16,17,18,19,20]))
const defineNumbers = (arr) => {
    let min = arr[0],max =arr[0];
    for (let numbers of arr){
        if (numbers < min){
            min = numbers;
        }
        if (numbers > max){
            max = numbers;
        }
    }
    return `Min : ${min} , Max : ${max}`;
}

console.log(defineNumbers([25,20,8,89,10]));
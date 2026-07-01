const getEvenNumbers = (numbers) => {
    const evennumbers = [];
    for (const num of numbers){
        if (num % 2 === 0){
            evennumbers.push(num);
        } 
    }
    return `Even Numbers : ${evennumbers}`;
}
console.log(getEvenNumbers([1,2,3,4,5,6,7,8,9,10]))
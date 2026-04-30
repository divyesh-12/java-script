function sumall(...number) {
    let total= 0;
    for (i = 1; i <= 5; i++){
        total = total + i;
    }
    return total;
}
console.log(sumall(1,2,3,4,5));

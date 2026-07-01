function multiplier(x){
    return function(y) {
        return x*y;
    };
}

const double = multiplier(2);
const triple = multiplier(3);

console.log(double(3));
console.log(triple(3));

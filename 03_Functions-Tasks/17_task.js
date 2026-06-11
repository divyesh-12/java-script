function fibonicci(n){
let a = 0 , b = 1;
for ( let i = 1; i <= n; i++){
    let next = a + b;
    a = b;
    b = next;
}
 return a;
}
console.log(fibonicci(7));

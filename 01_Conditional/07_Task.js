let a=5;
let b=10;
let answer;

switch(answer) {
    case "+" : console.log( a + b); break;
    case "-" : console.log( a - b); break;
    case "*" : console.log( a * b); break;
    case "/" :
      if (b === 0){
        console.log("not devide zero");
      } else {
        console.log(" a/b ");
      }
      break;
      default :
        console.log(" invalid answer")
}
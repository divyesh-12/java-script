let grade=48;

if ( grade >= 90 && grade <= 100){
    console.log("A+");
} else if ( grade >= 75 && grade <= 89){
    console.log("A");
} else if ( grade >= 60 && grade <= 74){
    console.log("B");
} else if ( grade >= 45 && grade <= 69){
    console.log("C");
} else if ( grade < 45){
    console.log("Fail");
} else{
    console.log("invalid grade");
}
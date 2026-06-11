let weight=70;
let height=2.5;
let velue = weight / height*height;
if (velue < 18.5){
    console.log("underweight");
} else if ( velue < 25){
    console.log("normal");
} else if ( velue < 30){
    console.log("overweight");
} else {
    console.log("obese");
}
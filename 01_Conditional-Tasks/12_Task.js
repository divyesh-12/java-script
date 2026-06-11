let angle1 = 60;
let angle2 = 60;
let angle3 = 60;
let sum = angle1 + angle2 + angle3;

if (sum = 180){
    if ( angle1 ===60 && angle2 === 60 && angle3 === 60) {
       console.log("Euailateral");
    } else if ( angle1 === angle2 || angle2 === angle3 || angle1 === angle3 ){
        console.log("Isosceles");
    } else {
        console.log("Scalene");
    }
} else {
    console.log("invalid angle");
}
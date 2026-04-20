let year=2023;

if ((year % 4 === 0 && year % 100 !== 0) || year % 400){
    console.log("leap year");
} else{
    console.log("is not leap year");
}
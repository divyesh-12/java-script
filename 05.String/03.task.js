function ispalindrome(str){
    let cleanStr = str.toLowerCase()
    let reversedStr =cleanStr.split(" ").reverse().join("")
    return cleanStr === reversedStr;
}
console.log(ispalindrome("racecar"));

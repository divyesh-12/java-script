const checkAnagram = (str1,str2) => {
    const cleanstr1 = str1.toLowerCase();
    const cleanstr2 = str2.toLowerCase();
    return cleanstr1.split("").sort().join("") === cleanstr2.split("").sort().join("");
}

console.log(checkAnagram("listen","silent"));
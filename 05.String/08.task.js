const truncate = (str,maxlength) => {
    if (str.length > maxlength){
        return str.slice(0 , maxlength) + "...";
    }
    return `Truncate_str : ${str}`;
}

console.log(truncate("Hello World",7));
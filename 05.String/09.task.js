const str = " i am machenical engineer.";

const titlecase = str
.split(' ')
.map(word => word.charAt(0).toUpperCase()+ word.slice(1))
.join(' ');
console.log(`capitalize_str : ${titlecase}`);

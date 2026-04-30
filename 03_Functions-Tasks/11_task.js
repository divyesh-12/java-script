const scores = [78,92,55,88,70];
function getstats(array) {
    const minmumscore = Math.min(...array);
    const maximumscore = Math.max(...array);

    let sum = 0;
    for (const score of array){
        sum = sum + score;
     }
     const averagescore = sum / array.length
     
     return {
        maximum : maximumscore,
        minimum : minmumscore,
        average : averagescore,
     };
    }
const stats = getstats(scores);
console.log(stats);

// Complete the jumpingOnClouds function below.
function jumpingOnClouds(c) {
    let steps = 0;
    for(let i = 0; i < c.length;) {
        
        if(i + 1 === c.length) return steps;
        if(i + 2 === c.length) return ++steps;
        steps++;

        if(c[i + 1] === 1) {
            i+=2;
        } else if(c[i + 1] === 0) {
            if(c[i + 2] === 0) {
                i +=2;
            } else {
                i +=1;
            }
        }
    }
}
function arrayManipulation(n, queries) {
    let array = [];
    let m = queries.length;
    let maxValue = -Infinity;
    array [n] = 0;
    
    for(let j = 0; j < m; j++) {
        let k = queries[j][2]
        let a = (queries[j][0])
        let b = (queries[j][1])
        array[a] = array[a] ? array[a] + k : k;
        array[b + 1] = array[b + 1] ? array[b + 1] - k : -k;
    }

    let sum = 0;
    for(let i = 0; i <= n; i++) {
        sum = sum + (array[i] ? array[i] : 0)
        maxValue = sum > maxValue ? sum : maxValue;
    }

    return maxValue;
}
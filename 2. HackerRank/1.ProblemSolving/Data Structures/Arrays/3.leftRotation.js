function rotateLeft (d, arr) {
    let length = arr.length;
    if(d > length) d = d % length;
    if(d === 0) return arr;
    let outputArray = [];
    for(let i = d; i < arr.length; i++) {
        outputArray.push(arr[i])
    }
    for(let i = 0; i < d; i++) {
        outputArray.push(arr[i])
    }

    return outputArray;
}
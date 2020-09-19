function minimumSwaps(arr) {

    let swaps = 0;
    for(let i = 0; i < arr.length; i++) {
        if(arr[i] !== i +1) {
        let currentValue = i;
        while (arr[currentValue] !== i + 1) currentValue++;
        let temp = arr[currentValue]
        arr[currentValue] = arr[i]
        arr[i] = temp;
        swaps++;
        }
    }

    return swaps;
}
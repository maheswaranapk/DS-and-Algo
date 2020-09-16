// Complete the hourglassSum function below.
function hourglassSum(arr) {
    let maxValue = -Infinity;
    for(let firstIndex = 0; firstIndex < (arr.length - 2); firstIndex++) {
        for(let secondIndex = 0; secondIndex < (arr[firstIndex].length - 2); secondIndex++){
            let sum = 0;
            for(let i = 0; i < 3; i++) sum += arr[firstIndex][secondIndex + i]
            sum += arr[firstIndex + 1][secondIndex + 1]
            for(let i = 0; i < 3; i++) sum += arr[firstIndex + 2][secondIndex + i]
            console.log(maxValue)
            if(sum > maxValue) maxValue = sum;
        }
    }
    return maxValue;
}
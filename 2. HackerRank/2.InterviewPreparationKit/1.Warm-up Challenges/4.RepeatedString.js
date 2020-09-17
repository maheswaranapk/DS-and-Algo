function repeatedString(str, n) {
    let countOnStr = 0;
    for(const c of str) if(c === 'a') countOnStr++;

    let quotient = Math.floor(n/str.length )
    let reminder = n % str.length;

    let count = quotient * countOnStr;
    if(reminder > 0) for(let i = 0; i < reminder; i++) if(str[i] === 'a') count++;

    return count;
}
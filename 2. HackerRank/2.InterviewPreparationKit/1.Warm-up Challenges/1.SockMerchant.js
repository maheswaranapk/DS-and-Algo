function sockMerchant(n, arr) {
    let set = {}
    for(let i = 0; i < arr.length; i++) {
        set[arr[i]] = set[arr[i]] ? (set[arr[i]] + 1) : 1;
    }

    let socksCount = 0;
    for(const key in set) {
        socksCount += Math.floor(set[key] / 2)
    }

    return socksCount;
}
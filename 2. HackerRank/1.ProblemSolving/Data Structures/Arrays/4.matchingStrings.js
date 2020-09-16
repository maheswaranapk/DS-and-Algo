function matchingStrings(strings, queries) {
    let set = {};
    let outputArray = [];
    for(let i = 0; i < strings.length; i++) {
        set[strings[i]] = (strings[i] in set) ? set[strings[i]] + 1 : 1;
    }
    
    for(let i = 0; i < queries.length; i++) {
        if(queries[i] in set) {
            outputArray.push(set[queries[i]])
        } else {
            outputArray.push(0)
        }
    }
    return outputArray;
}
function getPathInNumber(path) {
    return (path === 'U') ? +1 : -1;
}

function countingValleys(steps, paths) {
    let valleys = 0;
    let currentPath = getPathInNumber(paths[0]);
    let isValley = currentPath < 0 ? true : false;
    for(let i = 1; i < paths.length; i++) {
        if(currentPath === 0) isValley = getPathInNumber(paths[i]) < 0 ? true : false;
        currentPath = currentPath + getPathInNumber(paths[i]);
        if(isValley && currentPath === 0) valleys++;
    }
    return valleys;
}
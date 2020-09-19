function rotLeft(a, d) {

    let length = a.length;
    let rotation = d % a.length;
    let slice = a.slice(0, rotation);
    let remaining = a.slice(rotation, a.length);
    return remaining.concat(slice);
}
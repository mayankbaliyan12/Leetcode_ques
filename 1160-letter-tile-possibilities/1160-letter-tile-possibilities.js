var numTilePossibilities = function(tiles) {
    let freqMap = new Map();
    for (let char of tiles) {
        freqMap.set(char, (freqMap.get(char) || 0) + 1);
    }
    return countSequences(freqMap);
};

function countSequences(freqMap) {
    let sum = 0;
    for (let [char, count] of freqMap) {
        if (count === 0) continue;
        sum++;
        freqMap.set(char, count - 1);
        sum += countSequences(freqMap);
        freqMap.set(char, count);
    }
    return sum;
}

/**
 * @param {string[][]} paths
 * @return {string}
 */
var destCity = function (paths) {
    let map = new Map();
    for (let [s, d] of paths) {
        map.set(s, d);
        map.set(d, map.get(d) || null);
    }
    for (let [s, d] of map.entries()) {
        if (d === null){
            return s;
        }
    }
    return null;
};

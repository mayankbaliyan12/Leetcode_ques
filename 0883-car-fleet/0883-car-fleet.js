/**
 * @param {number} target
 * @param {number[]} position
 * @param {number[]} speed
 * @return {number}
 */
var carFleet = function (target, position, speed) {
    // const map = new Map();
    // let i = 0;
    let n = position.length;
    const stack = [];
    // for (let i = 0; i < n; i++) {
    //     map.set(position[i], speed[i]);
    // }
    const pair=position.map((pos,idx)=>[pos,speed[idx]]);
    console.log({ pair })
    // const sortedMap = new Map([...map.entries()].sort((a, b) => a[0] - b[0]));
    pair.sort((posA, posB) => posA[0] - posB[0]);
    // console.log({ sortedMap })

    for (let i = n - 1; i >= 0; i--) {
         const [pos, speed] = pair[i];
        stack.push((target - pos) / speed);
        if (stack.length >= 2 && stack[stack.length - 1] <= stack[stack.length - 2]) {
            stack.pop();
        }
    }

    console.log({ stack })

    return stack.length;
};
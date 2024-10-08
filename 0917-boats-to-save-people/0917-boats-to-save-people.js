/**
 * @param {number[]} people
 * @param {number} limit
 * @return {number}
 */
var numRescueBoats = function (people, limit) {
    people.sort((a, b) => a - b)
    // console.log(people);
    let low = 0;
    let high = people.length - 1;
    let count = 0;

    while (low <= high) {
        if (people[low] + people[high] <= limit) {
            count++;
            low++;
            high--;
        }
        else {
            high--;
            count++;
        }
    }
    // console.log(count)
    return count;
};
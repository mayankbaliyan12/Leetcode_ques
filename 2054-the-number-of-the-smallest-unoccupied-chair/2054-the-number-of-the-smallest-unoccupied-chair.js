/**
 * @param {number[][]} times
 * @param {number} targetFriend
 * @return {number}
 */
function smallestChair(times, targetFriend) {
    let n = times.length;
    let chairs = Array(n).fill(-1);
    let targetFriendArrivalTime = times[targetFriend][0];
    times.sort((a, b) => a[0] - b[0]);


    for (let time of times) {
        let arrival = time[0];
        let depart = time[1];

        for (let i = 0; i < n; i++) {
            if (chairs[i] <= arrival) {
                chairs[i] = depart;

                if (arrival === targetFriendArrivalTime) {
                    return i;
                }

                break;
            }
        }
    }

    return -1;
}

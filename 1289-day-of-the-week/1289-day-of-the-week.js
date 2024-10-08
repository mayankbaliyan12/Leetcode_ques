/**
 * @param {number} day
 * @param {number} month
 * @param {number} year
 * @return {string}
 */
var dayOfTheWeek = function (day, month, year) {
    let daysMap = {
        "0": "Sunday",
        "1": "Monday",
        "2": "Tuesday",
        "3": "Wednesday",
        "4": "Thursday",
        "5": "Friday",
        "6": "Saturday"
    };
    t = [0, 3, 2, 5, 0, 3, 5, 1, 4, 6, 2, 4];
    year -= month < 3;
    let res = (year + Math.floor(year / 4) - Math.floor(year / 100) + Math.floor(year / 400) + t[month - 1] + day) % 7;
    return daysMap[res];
};
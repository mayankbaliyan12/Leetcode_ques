/**
 * @param {character[]} chars
 * @return {number}
 */
var compress = function (chars) {
    let writeIndex = 0;
    let count = 1;

    for (let i = 1; i <= chars.length; i++) {
        if (i === chars.length || chars[i] !== chars[i - 1]) {
            chars[writeIndex++] = chars[i - 1];
            if (count > 1) {
                for (const digit of count.toString()) {
                    chars[writeIndex++] = digit;
                }
            }
            count = 1;
        } else {
            count++;
        }
    }
    return writeIndex;
};
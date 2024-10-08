var minSwaps = function (s) {
    let count = 0, fix = 0;

    for (let i = 0; i < s.length; i++) {
        if (s[i] === '[') {
            count++;
        } else {
            count--;
        }

        if (count < 0) {
            fix++;
            count = 0;
        }
    }
    if (fix % 2 == 0) {
        return fix / 2;
    }
    else {
        return (fix + 1) / 2;
    }
};

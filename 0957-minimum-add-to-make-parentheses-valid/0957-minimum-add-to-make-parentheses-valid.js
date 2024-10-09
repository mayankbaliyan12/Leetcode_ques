/**
 * @param {string} s
 * @return {number}
 */
var minAddToMakeValid = function(s) {
    let open = 0;  // Count of unmatched opening parentheses '('
    let close = 0; // Count of unmatched closing parentheses ')'
    
    for (let i = 0; i < s.length; i++) {
        if (s[i] === '(') {
            open++;  // Keep track of unmatched opening parentheses
        } else if (s[i] === ')') {
            if (open > 0) {
                open--;  // Use an unmatched opening parenthesis for a valid pair
            } else {
                close++;  // No opening parenthesis to match, count as extra closing parenthesis
            }
        }
    }
    
    // Total additions needed are the sum of unmatched opening and closing parentheses
    return open + close;
};

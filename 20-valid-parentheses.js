// # Date: 11-8-2026
// #  Problem: 20-Valid Parentheses
// #  Difficulty: Easy
// Beats 98% of JS submissions
// Complexity Analysis: O(n) time | O(n) space

var isValid = function(s) {
    let stack = [];

    for (let i = 0; i < s.length; i++) {

        if (s[i] === "(" || s[i] === "[" || s[i] === "{") {
            stack.push(s[i]);
        } else {

            if (stack.length === 0) {
                return false;
            }

            let top = stack.pop();

            if (
                (s[i] === ")" && top !== "(") ||
                (s[i] === "]" && top !== "[") ||
                (s[i] === "}" && top !== "{")
            ) {
                return false;
            }
        }
    }

    return stack.length === 0;
};


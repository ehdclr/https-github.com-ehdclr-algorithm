/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function (n) {

    let result =[]

    function bt(text, openCount, closeCount) {
        if (openCount === n && closeCount === n) {
            result.push(text.join(""));
            return;
        }

        if (openCount < n) {
            text.push("(");
            bt(text, openCount + 1, closeCount);
            text.pop()
        }

        if (closeCount < openCount && closeCount < n) {
            text.push(")");
            bt(text, openCount, closeCount + 1);
            text.pop()
        }

    }
    bt([],0,0)

    return result;
};
module.exports = function reverse(n) {
    let result = "";

    if (n !== undefined) {
        result = Math.abs(n).toString().split("").reverse().join("");
    }

    return result;
};

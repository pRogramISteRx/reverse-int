module.exports = function reverse (n) {
    let answer;
    if (n < 0) {
        n = n * (-1);
    }
    n = String(n);
    answer = n.split('').reverse().join('');
    return answer;
}

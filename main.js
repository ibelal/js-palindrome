function valid(e) {
    var inputPalindrome = e.val();
    if (inputPalindrome !== '') {
        return inputPalindrome;
    } else {
        return false
    }
}

function palindrome(str) {
    var re = /[\W_]/g; // match non-word characters and underscores
    var lowRegStr = str.toLowerCase().replace(re, '');
    var reverseStr = lowRegStr.split('').reverse().join('');
    return reverseStr === lowRegStr;
}

var series = function (n) {
    const result = [0, 1];
    for (i = 2; i < n; i++) {
        result.push(result[i - 2] + result[i - 1]);
    }
    return result;
}

var swap = function (x, y) {
    x = parseInt(x) + parseInt(y);

    y = parseInt(x) - parseInt(y);

    x = parseInt(x) - parseInt(y);

    return {x, y};

}

console.log(swap(2, 4))
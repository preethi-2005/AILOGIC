// # Given a non-negative integer num, you may swap two digits at most once to get the maximum valued number. Return the maximum valued number you can get.

// # Input:
// # num = 2736
// # Output:

// # 7236
function maximumSwap(num) {
    const number = num.toString().split('');
    const last = new Array(10);
    for (let i = 0; i < number.length; i++) {
        last[number[i]] = i;
    }
    for (let i = 0; i < number.length; i++) {
        for (let d = 9; d > parseInt(number[i]); d--) {
            if (last[d] > number) {
                const temp = number[i];
                number[i] = number[last[d]];
                number[last[d]] = temp;
                return parseInt(number.join(''));
            }
        }
    }
    return num;
}

console.log(maximumSwap(2736)); 


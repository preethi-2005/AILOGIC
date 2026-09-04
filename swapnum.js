// # Given a non-negative integer num, you may swap two digits at most once to get the maximum valued number. Return the maximum valued number you can get.

// # Input:
// # num = 2736
// # Output:

// # 7236
function maximumSwap(num) {
    const number = num.toString().split('');
    const lastPos = new Array(10).fill(-1);
    for (let i = 0; i < number.length; i++) {
        lastPos[number[i]] = i;
    }
    for (let i = 0; i < number.length; i++) {
        for (let d = 9; d > parseInt(number[i]); d--) {
            if (lastPos[d] > i) {
 
                const temp = number[i];
                number[i] = number[lastPos[d]];
                number[lastPos[d]] = temp;
                return parseInt(number.join(''));
            }
        }
    }
    return num;
}

console.log(maximumSwap(2736)); 


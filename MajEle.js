function majEle(nums) {
    let count = 0;
    let x = 0;
    for (let i of nums) {
        if (count === 0) {
            x = i;}
        count += (i === x) ? 1 : -1;
    }
    return x;
}
const nums=[2,2,1,1,1,2,2];
console.log(majEle(nums));


function maxArea(height) {
    let highest = 0;
    let left = 0;
    let right = height.length - 1;

    while (left < right) {
        const width = right - left;
        const currentHeight = Math.min(height[left], height[right]);
        const currentArea = width * currentHeight;
        highest = Math.max(highest, currentArea);
        if (height[left] < height[right]) {
            left++;
        } else {
            right--;
        }
    }

    return highest;
}

const height = [1, 8, 6, 2, 5, 4, 8, 3, 7];
console.log(maxArea(height)); 

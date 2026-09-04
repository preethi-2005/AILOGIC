function twoSum(target, nums) {
    const map = new Map();
    
    for (let i = 0; i < nums.length; i++) {
        const q = target - nums[i];
        
        if (map.has(q)) {
            return [map.get(q), i];
        }
        
        map.set(nums[i], i);
    }
}

const z = twoSum(9, [2, 7, 11, 15]);
console.log(z);

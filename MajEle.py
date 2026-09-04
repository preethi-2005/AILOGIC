# Given an array nums of size n, return the element that appears more than ⌊n/2⌋ times. You may assume the majority element always exists.

# Input:

# nums = [2, 2, 1, 1, 1, 2, 2]
def MajEle(nums):

    n=len(nums)
    count=0
    x=0
    for i in nums:
        if count==0:
            x=i
            count += 1 if i == x else -1
            
        return x
nums=[2,2,1,1,1,2,2]
print(MajEle(nums))
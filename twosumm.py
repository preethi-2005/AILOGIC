def TwoSum(Target,nums):

    d={}
    for i,n in enumerate(nums):
    
        if(Target-n) in d:
            return d[Target-n],i
        
        d[n]=i
z=TwoSum(9,[2,7,11,15])
print(z)
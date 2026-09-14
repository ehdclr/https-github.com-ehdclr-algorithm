class Solution:
    def twoSum(self, nums: List[int], target: int) -> List[int]:
        # target = 9가 되어야함 
        for i in range(len(nums)-1):
            for j in range(i+1, len(nums)):
                if target - nums[j] == nums[i]:
                    return [i,j]

        
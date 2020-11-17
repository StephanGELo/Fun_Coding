class Solution:
  def twoSum(self, nums: List[int], target: int) -> List[int]:
    dict = {}

    for i, num in enumerate(nums):
      cmpl = target - num  # complement of num

      # Check if the key is in dict{}.  NOT work for val in {}
      if cmpl in dict:
        return [i, dict[cmpl]]
      dict[num] = i

    return null



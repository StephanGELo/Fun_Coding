'''
88. Merge Sorted Array
'''

class Solution:
  def merge(self, nums1, m, nums2, n):
    numsA = nums1[:m]
    nums1[:] = []

    p1, p2 = 0, 0
    while p1 < m and p2 < n:
      if numsA[p1] < nums2[p2]:
        nums1.append(numsA[p1])
        p1 += 1
      else:
        nums1.append(nums2[p2])
        p2 += 1

    if p1 < m: nums1[p1+p2:] = numsA[p1:]
    if p2 < n: nums1[p1+p2:] = nums2[p2:]


#-----Test Cases-----
nums1 = [1,2,3,0,0,0]
nums2 = [2,5,6]
m, n = 3, 3

sol = Solution()
sol.merge(nums1, m, nums2, n)
print("\nFinal nums1[]:", nums1)

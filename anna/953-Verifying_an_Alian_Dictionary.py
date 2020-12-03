'''
953. Verifying an Alien Dictionary
'''

class Solution:

  def isAlienSorted(self, words, order):
    tbl = {c: i for i, c in enumerate(order)}
    for a, b in zip(words, words[1:]):
      if len(a) > len(b) and a[:len(b)] == b:
        return False
      for s1, s2 in zip(a, b):
        if tbl[s1] < tbl[s2]:   break
        elif tbl[s1] > tbl[s2]: return False
    return True


#-----Test Cases-----

#words = ["hello","leetcode"]           # T
#order = "hlabcdefgijkmnopqrstuvwxyz"

words = ["woo","word","world","row"]    # F
order = "worldabcefghijkmnpqstuvxyz"

#words = ["apple","app"]                # F
#order = "abcdefghijklmnopqrstuvwxyz"

sol = Solution()
res = sol.isAlienSorted(words, order)
print("res:", res)

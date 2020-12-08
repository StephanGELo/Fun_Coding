'''
20. Valid Parentheses

'''

class Solution(object):

  def isValid(self, s):
    stack = []
    tbl = {')': '(', '}': '{', ']': '['}

    for ch in s:
      if ch in tbl:
        top_elem = stack.pop() if stack else '#'
        if tbl[ch] != top_elem:
          return False
      else:
        stack.append(ch)

    return not stack


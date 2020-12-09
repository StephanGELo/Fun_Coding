'''
415. Add Strings

'''

class Solution_2:

  def addStrings(self, num1: str, num2: str) -> str:
    res = ''
    num1 = num1[::-1]
    num2 = num2[::-1]
    carry = 0
    l1, l2 = len(num1), len(num2)
    i = 0

    while i < max(l1, l2) or carry:
      dig1  = int(num1[i]) if i < l1 else 0
      dig2  = int(num2[i]) if i < l2 else 0
      value = (dig1 + dig2 + carry) % 10
      carry = (dig1 + dig2 + carry) // 10
      res += str(value)
      i += 1
    return res[::-1]




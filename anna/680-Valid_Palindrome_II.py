'''
680. Valid Palindrome II

'''

class Solution(object):
    def validPalindrome(self, s):
        for i in xrange(len(s)):
            t = s[:i] + s[i+1:]
            if t == t[::-1]: return True

        return s == s[::-1]



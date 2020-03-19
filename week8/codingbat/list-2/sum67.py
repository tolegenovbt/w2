def sum67(nums):
  cnt = 0
  block = False
  
  for n in nums:
    if n == 6:
      block = True
      continue
    if n == 7 and block:
      block = False
      continue
    if not block:  
      cnt += n
  
  return cnt

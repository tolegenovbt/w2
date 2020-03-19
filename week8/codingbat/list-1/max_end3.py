def max_end3(nums):
  a = nums[0]
  b = nums[-1]
  max = 0
  if a>b:
    max = a
  else:
    max = b
    
  for i in range(len(nums)):
     nums[i] = max
     
  return nums

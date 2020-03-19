def rotate_left3(nums):
  i = len(nums)-1
  temp = 0
  while i >=0:
  
  	if i == len(nums)-1:
  		temp = nums[i]
  		nums[i] = nums[0] # 1 2 3 4 5 6
  	else:
  		temp2 = nums[i]
  		nums[i] = temp
  		temp = temp2
  		
	i = i -1
  
  return nums
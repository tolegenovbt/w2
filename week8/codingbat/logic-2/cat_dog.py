def cat_dog(str):
  if count_cat(str) == count_dog(str):
    return True
  return False
  
def count_cat(str):
  cnt = 0
  for i in range(len(str)-2):
    if str[i] == "c" and str[i+1] == "a" and str[i+2] == "t":
      cnt = cnt +1
    
  return cnt
    

def count_dog(str):
  cnt = 0
  for i in range(len(str)-2):
    if str[i] == "d" and str[i+1] == "o" and str[i+2] == "g":
      cnt = cnt +1
    
  return cnt

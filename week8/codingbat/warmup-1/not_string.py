def not_string(str):
  temp = ""
  if len(str)>=3:
    for i in range(3):
      temp = temp+str[i]
    
  if temp == "not":
    return str
  return "not %s" % str
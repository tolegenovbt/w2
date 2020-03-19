def string_splosion(str):
  temp = ""
  for i in range(len(str)):
    temp = temp + str[:i+1]
  return temp

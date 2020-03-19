import math
a = int(input())

i = 1

while a >= i:
    sq = int(math.sqrt(i))
    if sq * sq == i:
        print(i)
    i += 1
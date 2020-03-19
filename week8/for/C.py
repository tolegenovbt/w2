import math
a = int(input())
b = int(input())

arr = ''

for i in range(a,b + 1):
    sq = int(math.sqrt(i))
    if(sq * sq == i):
        arr += f'{i} '

print(arr)
import math
n = int(input())

cnt = 0

sq = int(math.sqrt(n))

for i in range (1, sq):
    if(n % i == 0):
        cnt += 1

cnt *= 2
if(n % sq == 0):
    cnt += 1

print(cnt)
n = int(input())

sum = 0

for i in range(n):
    temp = int(input())
    if temp == 0:
        sum += 1

print(sum)
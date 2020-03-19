n = int(input())
arr = list(map(int, input().split()))

res = ''

for i in range(n):
    if(i % 2 == 0):
        res += f'{arr[i]} '

print(res)
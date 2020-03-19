import math
a = int(input())

i = 1

res = ''

while i <= a:
    res += f'{i} '
    i *= 2

print(res)
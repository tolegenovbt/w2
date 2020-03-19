n = int(input())
check = True

while n > 0:
    if(n == 1):
        break
    if(n % 2 != 0):
        check = False
        break
    n /= 2

if check:
    print('YES')
else:
    print('NO')
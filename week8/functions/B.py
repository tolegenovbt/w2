def power(a, b):
    res = 1
    for i in range(1,b + 1):
        res *= a
    return res

a,b= input().split()
a = float(a)
b = int(b)
print(power(a,b))
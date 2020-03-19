a = int(input())
b = int(input())

c = (b * a) % 109
if c < 0:
    print(c + 109)
else:
    print(c)
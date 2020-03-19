if __name__ == '__main__':
    n = int(raw_input())
    arr = map(int, raw_input().split())
    a,b = -1000,-1000
    for i in range(n):
        if(arr[i] > a):
            b = a
            a = arr[i]
            continue
        if(arr[i] > b and arr[i] != a):
            b = arr[i]
    print(b)
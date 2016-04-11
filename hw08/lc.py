def union(a,b):
    return [x for x in a if x not in b] + b

print union([1,2,3],[2,3,4])

def intersection(a,b):
    return [x for x in a if x in b]

print intersection([1,2,3],[2,3,4])

def setdif(a,b):
    return [x for x in a if x not in b]

print setdif([1,2,3],[2,3,4])

def symdef(a,b):
    return setdif(union(a,b),intersection(a,b))

print symdef([1,2,3],[2,3,4])

def cartprod(a,b):
    return [(x,y) for x in a for y in b]

print cartprod([1,2,3],[2,3,4])


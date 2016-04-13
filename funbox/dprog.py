'''

DYNAMIC PROGRAMMING (aka 'dynamic optimization')
means of solving a complex problem by solving its component subproblems just
once and storing their solutions


MEMOIZATION
technique of storing solutions to subproblems to avoid recomputation
or
use of caches to retrieve previously computed values to reduce the complexity of
algorithms

'''

#mah code
dict = {0:0}

def fib(n,dict):
    if n < 1:
        return 0
    elif n == 1:
        return 1
    else:
        x = fib(n-1,dict)
        dict[n-1] = x
        return x + dict[n-2]
    
print fib(1,dict)
print fib(2,dict)
print fib(3,dict)
print fib(4,dict)
print fib(5,dict)
print fib(6,dict)
print fib(25,dict)
print fib(99,dict)
print fib(100,dict)

#mr.b's code
def memoize(f):
    memo = {} #hashmap/dict for 0(1) lookup
    def inner(x):
        if x not in memo:
            memo[x] = f(x)
        return memo[x]
    return inner

@memoize
def fib2(n):
    if n == 0:
        return 0
    if n == 1:
        return 1
    else:
        return fib2(n-1) + fib2(n-2)
    
print fib2(100)

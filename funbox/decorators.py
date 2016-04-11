import random

def inc(x):
    return x+1

def dec(x):
    return x-1

f = inc
#print f(5)

flist = [inc,dec]
#print flist[1](5)

def makeAdder(n):
    def inner(x):
        return x+n
    return inner

add3 = makeAdder(3)
add5 = makeAdder(5)

#print add3(10)
#print add5(10)

def makeCounter():
    #private "instance data"
    #has to be a list due to weird python scoping rules
    count = [0]

    #public methods
    def inc():
        count[0]=count[0]+1
    def dec():
        count[0]=count[0]-1
    def reset():
        count[0]=0
    def get():
        return count[0]

    #return a dictionary so we have access to all the methods
    return {'inc':inc,'dec':dec,'reset':reset,'get':get}

c1 = makeCounter()
c2 = makeCounter()

c1['inc']()
c1['inc']()
c1['inc']()
#print c1['get']()

c2['inc']()
#print c2['get']()

c1['reset']()
#print c1['get']()

def dble(f):
    name = f()
    return name+name
name = getName()

#print getName()
#print dble(getName)

def doubler(f):
    def inner():
        name=f()
        return name+name
    return inner

@doubler
'''
equivalent to getName = doubler(getName)

TAKEAWAY:
BAM!: we can write fxns that transform fxns

A python decorator is merely shorthand for calling a wrapper-type function like doubler.

A python decorator encapsulates a closure.

A decorator allows to transparently wrap functionality.
'''
def getName():
    names = ['harry','bjork','parthanax','hamlet','alice','frodo']
    return random.choice(names)

print getName()

def qsort(L):
    if len(L) <= 1:
        return L
    pivot = random.choice(L)
    lh = [x for x in L if x < pivot]
    uh = [x for x in L if x > pivot]
    return qsort[lh] + pivot + qsort[uh]

def qsort2(L):
    if len(L) <= 1:
        return L
    pivot = random.choice(L)
    lh = [x for x in L if x < pivot]
    uh = [x for x in L if x > pivot]
    return qsort(lh) + ([pivot] * L.count(pivot)) + qsort(uh)

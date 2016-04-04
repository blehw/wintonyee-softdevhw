'''
def inc(x):
    return x + 1

f = inc

print f(10)
'''

def h(x):
    return lambda y: x + y

'''
print h(1)
print "should be 1"
print h(2)
print "should be 2"
print h(1)(3)
print "should be 4"
print h(2)(5)
print "should be 7"
'''

b=h(1)
#print b

def f(x):
    def g(y):
        return x + y
    return g

a = f(1)

print f(1)
print f(1)(2)
print a
print f(a)

def repeat(string):
    return lambda num: num * string

r1 = repeat('hello')
print r1
print r1(2)
print repeat('cool')(3)

def make_bold(fn):
    return lambda : "<b>" + fn() + "</b>"

def make_italic(fn):
    return lambda : "<i>" + fn() + "</i>"

@make_bold
@make_italic
def hello():
    return "hello world"

helloHTML = hello()

print helloHTML

#mr.b's code
def name_log(f):
    def inner(*arg):
        t = time.time()
        x = f(*arg)
        print f.func_name + ':' + str(arg)
        return x
    return inner

def timer(f):
    def inner(*arg):
        t = time.time()
        x = f(*arg)
        print 'execution time: ' + str(time.time() - t)
        return x
    return inner

def randList(b,lower=-100,upper=100):
    l = []
    for i in range(n):
        l.append(random.randrange(lower,upper))
    return l

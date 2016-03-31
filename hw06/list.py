#print [x for x in range(8)]
#print [x*x for x in range(8)]
#print [(x,x*x,x*x*x) for x  in range(8)]

p="myNoobPass1234"

#print [x for x in p]
#print [x for x in "1234"]

nums="0123456789"
lc_letters="abcdefghijklmnopqrstuvwxyz"
UC_LETTERS="ABCDEFGHIJKLMNOPQRSTUVWXYZ"
#print [x for x in p if x in UC_LETTERS]
#print [1 for x in p if x in UC_LETTERS]
#print [1 if x in UC_LETTERS else 0 for x in p]

print [True for x in p if x in lc_letters]

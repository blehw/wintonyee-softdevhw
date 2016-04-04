#print [x for x in range(8)]
#print [x*x for x in range(8)]
#print [(x,x*x,x*x*x) for x  in range(8)]

p="myNoobPass1234"
goodp="AllTheStuffisH3r3"
bestp="R3allyAl!Stuff"
nolower="ALLCAPS1234"
noupper="alllower1234"
nonums="onlyLetters"

#print [x for x in p]
#print [x for x in "1234"]

nums="0123456789"
lc_letters="abcdefghijklmnopqrstuvwxyz"
UC_LETTERS="ABCDEFGHIJKLMNOPQRSTUVWXYZ"
non_alpha=".?!&#,;:-_*"
#print [x for x in p if x in UC_LETTERS]
#print [1 for x in p if x in UC_LETTERS]
#print [1 if x in UC_LETTERS else 0 for x in p]

def pChecker(password):
    if [True for x in password if x in lc_letters] != [] and [True for x in password if x in UC_LETTERS] != [] and [True for x in password if x in nums] != []:
        return True
    else:
        return False

print pChecker(p)
print pChecker(nolower)
print pChecker(noupper)
print pChecker(nonums)
print pChecker(goodp)

def pStrength(password):
    strength = 0
    pLength = len(password)
    pNums = len([True for x in password if x in nums])
    pNonAlpha = len([True for x in password if x in non_alpha])
    pUCLetters = len([True for x in password if x in UC_LETTERS])
    pLCLetters = len([True for x in password if x in lc_letters])
    if pNums != 0:
        strength += 2
    if pNonAlpha != 0:
        strength += 2
    if pUCLetters != 0:
        strength += 2
    if pLCLetters != 0:
        strength += 2
    if pNums != pLength and pNonAlpha != pLength and pUCLetters != pLength and pLCLetters != pLength:
        strength += 2
    return strength

print pStrength(p)
print "should be 8"
print pStrength(noupper)
print "should be 6"
print pStrength(nolower)
print "should be 6"
print pStrength(nonums)
print "should be 6"
print pStrength(goodp)
print "should be 8"
print pStrength(bestp)
print "should be 10"

def strengthCheck(p):
    l = [1 if x in UC_LETTERS else 2 if x in lc_letters else 3 if x in nums else 0 for x in p]
    return 1 in l and 2 in l and 3 in l

p1 = 'Passw0rd'
p2 = 'password'
p3 = 'passw0rd'
p4 = 'Password'

print p1 + ':' + str(strengthCheck(p1))
print p2 + ':' + str(strengthCheck(p2))
print p3 + ':' + str(strengthCheck(p3))
print p4 + ':' + str(strengthCheck(p4))

'''
def strengthRate(p):
    l = [1 if x in UC_letters else 2 if x in lc_letters else 3 if x in nums else 4 if x in non_alpha else 0 for x in p]
    uc = len(p) - l.count(1)
''' 


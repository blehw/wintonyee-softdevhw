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

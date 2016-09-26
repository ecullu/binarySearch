let intArr = [1,2,3,4,5,6]
//using indexOf
let findInt = function(intArr,num){
    if (intArr.indexOf(num) > 0){
        return true
    }
}
assert(findInt(intArr,6) === true)
assert(findInt(intArr,17) !== true)


//iteratively
let findInt2 = function(intArr,num){
    for (let i = 0; i < intArr.length; i++){
        if (intArr[i] === num){
            return true
        }
    }
}
assert(findInt2(intArr,5) === true)
assert(findInt2(intArr,18) !== true)


//recursively
let findInt3 = function(intArr,num){
    if (intArr[0] === num){
        return true
    }
    else if (intArr.length > 0){
        intArr = intArr.splice(1)
        return findInt3(intArr,num)
    } 
    else{
        return false
    }
}
assert(findInt3(intArr,6) === true)
assert(findInt3(intArr,17) !== true)


//log(n) runtime
let intArr2 = [1,2,3,4,5,6,7,8,9,10,11,12,13]
let findInt4 = function (intArr2,num){
    let midIndex = parseInt(intArr2.length/2)
    
    if (midIndex === 0 && num !== intArr2[midIndex]){
        return false
        }
    if (num === intArr2[midIndex]){
        return true
    }
    else if (num < intArr2[midIndex]){
        intArr2 = intArr2.splice(0,midIndex)
        return findInt4(intArr2,num)
    }
    else{
        intArr2 = intArr2.splice(midIndex)
        return findInt4(intArr2,num)
    }
}
assert(findInt4(intArr2,4) === true)
assert(findInt4(intArr2,14) !== true)
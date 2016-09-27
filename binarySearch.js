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


//(n) runtime
let intArr2 = []
for (let i = 1; i < 1000; i++){
    intArr2.push(i)
}
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
assert(findInt4(intArr2,1001) !== true)

//log(n) runtime
let findInt5 = function (intArr2,num,start,end,exMid){
    var exMid = exMid
    if (start !== undefined && end !== undefined){
        if ((end - start) > 1){
            var midIndex = end - parseInt((end-start)/2)
        }
        else if ((end - start) === 1 && end === (intArr2.length-1)){
            var midIndex = end
        }
        else if ((end - start) === 1 && start === 0){
            var midIndex = 0
        }
        else{
            var midIndex = start + parseInt((end-start)/2)
        }
    }
    else{
        var midIndex = parseInt(intArr2.length/2)
    }
    
    if ( (end-start) === 1 && num !== intArr2[midIndex]){
        return false
        }
    if (num === intArr2[midIndex]){
        return true
    }
    else if (num < intArr2[midIndex]){
        if (num > intArr2[exMid]){
            return findInt5(intArr2,num,exMid,midIndex,midIndex)
        }
        else{
            return findInt5(intArr2,num,0,midIndex, midIndex)
        }
    }
    else{
        if (num > intArr2[midIndex] && end === undefined){
            return findInt5(intArr2,num,midIndex,(intArr2.length-1), midIndex)
        }
        else{
            return findInt5(intArr2,num,midIndex,end)
        }
    }
}
assert(findInt5(intArr2,4) === true)
assert(findInt5(intArr2,1001) !== true)

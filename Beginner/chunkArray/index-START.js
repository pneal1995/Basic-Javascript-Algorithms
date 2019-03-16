/* 
 Given two or more arrays, write a function that combines
 their elements into one array without any repetition. 
 E.g  mergeArrays([1,2,3,3,3], [1,4,5,2]) // should return [1,2,3,4,5]
*/

function chunkArray(array, size) {
    let result = [];

    for (value of array){

        let lastArray = result[result.length - 1];
        if(!lastArray || lastArray.length == size){
            result.push([value])
        }else{
            lastArray.push(value)
        }
    }

    return result
}

function chunkArray(array, size) {
    if(array.length <= size){
        return [array]
    }
    return [array.slice(0,size), ...chunkArray(array.slice)]
}


module.exports = chunkArray
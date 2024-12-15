const findLongestWord = function(str){
    if(str.trim().length=== 0){
        return false;
    }

    strArr =str.split(" ");
    // console.log(strArr)
    // strArr = strArr.sort((a,b) => a.length - b.length);
    strArr = strArr.sort((a,b) => b.length - a.length);
    console.log(strArr)
    // return strArr.at(-1) 
    return strArr.at(0) 
};
console.log(findLongestWord("Watch Thapa Technical javascript awesomethapatechnocal course on youtube")
);

// const findLongestWord = function(str){
//     if(str.trim().length===0){
//         return false;
//     }

//     strArr = str.split(" ")
//     strArr = strArr.sort((a,b) => a.length - b.lenght);
//     console.log(strArr)
//     return strArr.at(-4)
// }

// console.log(findLongestWord("watch Thapa Technical javascript course on youtube")
// );
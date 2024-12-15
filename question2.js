// Q.2 Hash Tag Generator


const generateHash = function(str){
    if(str.lenght > 280 || str.trim().length === 0){
        return false;
    }

    str = str.split(" ")
    str = str.map((curElem) => curElem.replace(curElem[0], curElem[0].toUpperCase()));
    str = `#${str.join("")}`;
    console.log(str);
    return str;
};
console.log(generateHash("my name is ujjawal singh"));

// const generateHash = function(str){
//     if(str.length > 280 || str.trim().length === 0){
//         return false;
//     }

//     str = str.split(" ");
//     str = str.map((curElem) => curElem.replace(curElem[0], curElem[0].toUpperCase()));
//     str = `#${str.join("")}`;
//     console.log(str);
//     return str;

// }

// console.log(generateHash("my name is ujjawal singh"));
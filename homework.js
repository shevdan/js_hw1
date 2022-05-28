function reverseStringLoop(string) {
    let reversedStr = "";
    for (let i = string.length - 1; i >= 0; i--) {
        reversedStr += string[i];
    }
    return reversedStr;
}

function reverseStringOtherLoop(string) {
    let reversedStr = "";
    for (let i = 0; i < string.length; i++) {
        reversedStr += string[string.length - i - 1];
    }
    return reversedStr;
}

function reverseStringLoopArrayJoin(string) {
    // I find it useless to copy other realisation functions with string and
    // replace string with array so i will write only one, but for each
    // loop function there is equivalent containing array instead of reversed string 
    let reversedStrArray = [];
    for (let i = string.length - 1; i >= 0; i--) {
        reversedStrArray.push(string[i]);
    }
    return reversedStrArray.join("");
}

function reverseStringWhileLoop(string) {
    let reversedStr = "";
    let i = 0;
    while (i < string.length) {
        reversedStr += string[string.length - i - 1];
        i++;
    }
    return reversedStr;
}

function reverseStringRecursion(string) {
    return (string === "") ? "" : reverseStringRecursion(string.substr(1)) + string.charAt(0);
}

function reverseStringSplit(string) {
    return string.split("").reverse().join("");
}

function reverseStringOtherSplit(string) {
    return [...string].reverse().join("");
}

function reverseStringArrayPop(string) {
    let stringArray = string.split("");
    let reversedStr = "";
    while (stringArray.length) {
        reversedStr += stringArray.pop()
    }

    return reversedStr;
}

function reverseStringSlice(string) {
    reversedStr = "";
    for (let i = string.length; i > 0; i--) {
        reversedStr += string.slice(i - 1, i);
    }
    return reversedStr;
}

function reverseStringSubstr(string) {
    reversedStr = "";
    for (let i = string.length - 1; i >= 0; i--) {
        reversedStr += string.substr(i, 1);
    }
    return reversedStr;
}


function reverseStringCharAt(string) {
    reversedStr = "";
    for (let i = string.length - 1; i >= 0; i--) {
        reversedStr += string.charAt(i);
    }
    return reversedStr;
}

function reverseStringLoopConcat(string) {
    reversedStr = "";
    for (let i = string.length - 1; i >= 0; i--) {
        reversedStr = reversedStr.concat(string.charAt(i));
    }
    return reversedStr;
}




console.log(reverseStringLoop('hello').localeCompare("elloh"));

console.log(reverseStringOtherLoop('hello').localeCompare("elloh"));

console.log(reverseStringLoopArrayJoin('hello').localeCompare("elloh"));

console.log(reverseStringWhileLoop('hello').localeCompare("elloh"));

console.log(reverseStringRecursion('hello').localeCompare("elloh"));

console.log(reverseStringSplit('hello').localeCompare("elloh"));

console.log(reverseStringOtherSplit('hello').localeCompare("elloh"));

console.log(reverseStringArrayPop('hello').localeCompare("elloh"));

console.log(reverseStringSlice('hello').localeCompare("elloh"));

console.log(reverseStringSubstr('hello').localeCompare("elloh"));

console.log(reverseStringCharAt('hello').localeCompare("elloh"));

console.log(reverseStringLoopConcat('hello').localeCompare("elloh"));
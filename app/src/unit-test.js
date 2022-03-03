function sum(a, b) {
    return a + b;
}


function textReplace(text){
    let string = text.toString();
    
    let trimmer = string.replace(/[$/!/@/#/$/%/^/&/*/+/{/}/[/\]/:/;/?/\//>/</]/g, "")
    
    let one = trimmer.trim();

    console.log(one)
    return one;
}

module.exports = sum;
module.exports = textReplace;
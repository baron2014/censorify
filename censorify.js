var censoredWords = ["sad","bsd",'mad'];
var customCensoredWords = [];
function censor(intStr){
    for(idx in censoredWords){
        intStr = inStr.replace(censoredWords[idx],'######');
    }
    for(idx in customCensoredWords){
        intStr = inStr.replace(customCensoredWords[idx],'######');
    }
    return intStr;
}
function addCensoredWord(word){
    customCensoredWords.push(word);
}
function getCensoredWords(){
    return censoredWords.concat(customCensoredWords);
}
exports.censor = censor;
exports.addCensoredWord = addCensoredWord;
exports.getCensoredWords = getCensoredWords; 
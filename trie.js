
Trie = function(){
  this.characters = {};
  isWord = false;
};

Trie.prototype.learn = function(word, index){
  index = index || 0;
  var char = word[index];
  
  if(index == word.length){
    this.isWord = true;
    return this;
  }  else if(this.characters[char] === undefined){
    this.characters[char] = new Trie();
    this.characters[char].learn(word, index + 1);
  } else {
    this.characters[char].learn(word, index + 1);
  }
};

Trie.prototype.getWords = function(words, currentWord){
  
  if (currentWord === undefined) {
    currentWord = "";
  }
  if (words === undefined) {
    var words = [];
  }
  if (this.isWord === true) {
    words.push(currentWord);
  }
  
  for (var i in this.characters){
    var child = this.characters[i];
    var isAWord = currentWord + i;
    child.getWords(words, isAWord);
  }
  return words;
  // This function will return all the words which are
  // contained in this Trie.
  // it will use currentWord as a prefix,
  // since a Trie doesn't know about its parents.
};

Trie.prototype.find = function(word, index){
  // This function will return the node in the trie
  // which corresponds to the end of the passed in word.

  // Be sure to consider what happens if the word is not in this Trie.
};

Trie.prototype.autoComplete = function(prefix){
  // This function will return all completions 
  // for a given prefix.
  // It should use find and getWords.
};

try{
  module.exports = Trie
} catch(e){

}
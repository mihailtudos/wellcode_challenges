const word = document.getElementById('word');
const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
const newWordInputError = document.getElementById('newWordInputError');
const searchedWordInputError = document.getElementById('searchedWordInputError');
const searchedWord = document.getElementById('searchedWord');
const wordObjects = [];
const results = document.getElementById('results');


function addNewWord() {
  const date = new Date();
  const addedDate = `${date.getDate()} ${months[date.getMonth()]} ${date.getFullYear()}`;
  const newWord = word.value;
  word.value = '';
  if (validateInput(newWord)) {
    wordObjects.push({ word: newWord, date: addedDate });
  }
}

function validateInput(word) {
  if (word.length < 2) {
    newWordInputError.innerHTML = "The word must be at least 2 char long!";
    setTimeout(() => {
      newWordInputError.innerHTML = '';
    }, 1500);
    return false;
  }
  const exists = wordObjects.some(wd => (wd.word === word));
  if (exists) {
    newWordInputError.innerHTML = "This word exists already!";
    setTimeout(() => {
      newWordInputError.innerHTML = '';
    }, 1500);
    return false;
    return false;
  }
  return true;
}


function searchWord() {
  const seekWord = searchedWord.value;
  searchedWord.value = '';
  if (seekWord.length > 1) {
    let obj = wordObjects.filter(wordObj => {
      if (wordObj.word === seekWord) {
        return true;
      }
    });
    if (obj.length === 0) {
      searchedWordInputError.innerHTML = 'Word "' + seekWord + '" not found, try a diffrent word!';
      setTimeout(() => {
        searchedWordInputError.innerHTML = '';
      }, 1500);
      results.innerHTML = '';
    } else {
      results.innerHTML = '';
      let text = `Word: <strong> "${obj[0].word} "</strong> was added on ${obj[0].date}`;
      let p = document.createElement('p');
      p.innerHTML = text;
      results.appendChild(p);
    }
  }
}
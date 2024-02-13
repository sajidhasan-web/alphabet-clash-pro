function hideElementById(idName) {
  const section = document.getElementById(idName);
  section.classList.add("hidden");
}

function showElementById(idName) {
  const section = document.getElementById(idName);
  section.classList.remove("hidden");
}

function addBackgroundColor(elementId) {
    const section = document.getElementById(elementId);
    section.classList.add("bg-orange-400");
  }


function getARandomAlphabet() {
    const alphabetString ='abcdefghijklmnopqrstuvwxyz';
    const alphabets = alphabetString.toUpperCase().split('')

    const randomNumber = Math.random()* alphabets.length
    const index = Math.round(randomNumber)
    

    const alphabet = alphabets[index]
    // console.log(alphabet)
    return alphabet
    
}

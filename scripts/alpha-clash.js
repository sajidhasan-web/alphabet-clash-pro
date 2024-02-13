// function play(){
//     const homeSection = document.getElementById('home-screen')
//     homeSection.classList.add('hidden')

//     // show the play ground
//     const playGroundSection = document.getElementById('play-ground')
//     playGroundSection.classList.remove('hidden')
    
// }

function continueGame(){
  const alphabet = getARandomAlphabet()
  console.log('your random alphabet', alphabet )
  const alphabetDisplay = document.getElementById('alphabet-display')
  alphabetDisplay.innerText = alphabet
  addBackgroundColor(alphabet.toLowerCase())

}

function play(){
    hideElementById('home-screen')
    showElementById('play-ground')
    continueGame()
}


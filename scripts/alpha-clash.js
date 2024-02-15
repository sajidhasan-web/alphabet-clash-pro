// function play(){
//     const homeSection = document.getElementById('home-screen')
//     homeSection.classList.add('hidden')

//     // show the play ground
//     const playGroundSection = document.getElementById('play-ground')
//     playGroundSection.classList.remove('hidden')
    
// }



function handleKeyPress(event){
    // console.log(event.key, 'key pressed')
    const playerPressed = event.key 
    // console.log(playerPressed, "playerPressed")
    if(playerPressed === 'Escape'){

          showElementById('scoreAndPlay')
          hideElementById('play-ground')
         const getElement = document.getElementById('mainScore')
         const getElementText = getElement.innerText
         const getElementValue = parseInt(getElementText)
         getElement.innerText = newScore
    }

    // get the expected key to press
    const alphabetDisplay = document.getElementById('alphabet-display')
    // console.log(alphabetDisplay.innerText.toLowerCase())
    const expectedAlphabet = alphabetDisplay.innerText.toLowerCase()
    // console.log(playerPressed, expectedAlphabet)

    // checked match or not
    if(playerPressed === expectedAlphabet){
        // Update score
        currentScore()
        // start new round
        removeBackgroundColor(expectedAlphabet)
        continueGame()  
  
    }
    else{
        // life count and go to game over page
        lifeCount() 
        
    }
    
}



// capture keyboard keyPress
document.addEventListener('keydown',  handleKeyPress )



function continueGame(){
  const alphabet = getARandomAlphabet()
//   console.log('your random alphabet', alphabet )
  const alphabetDisplay = document.getElementById('alphabet-display')
  alphabetDisplay.innerText = alphabet
  addBackgroundColor(alphabet.toLowerCase())
//   console.log(alphabet)
}

function play(){
    hideElementById('home-screen')
    showElementById('play-ground')
    continueGame()
}

function playAgain(){
    hideElementById('scoreAndPlay')
    showElementById('play-ground')
    setTextElementValueById('game-life', 5)
    setTextElementValueById('current-score', 0)
    getElementTextById(alphabet)
    continueGame()

   
    // // console.log(currentAlphabet)
    // const alphabet = getARandomAlphabet()
    // //   console.log('your random alphabet', alphabet )
    //   const alphabetDisplay = document.getElementById('alphabet-display')
    //   alphabetDisplay.innerText = alphabet
    //   addBackgroundColor(alphabet.toLowerCase())

    // const alphabet = getARandomAlphabet()
    // const alphabetDisplay = document.getElementById('alphabet-display')
    // const text = alphabetDisplay.innerText
    // removeBackgroundColor(text.toLowerCase())

    }

// play again by pressing Enter key
// function playAgain(event){

//         if(event.key === 'Enter'){
//             hideElementById('scoreAndPlay')
//             showElementById('home-screen')

//             // reset score
//             const currentScore = document.getElementById('current-score')
//             const currentScoreText = currentScore.innerText
//             const currentScoreValue = parseInt(currentScoreText)
//             // console.log(currentScoreValue)
//             currentScore.innerText = 0

//             // rest life
//             const getElement = document.getElementById('game-life')
//             const getElementText = getElement.innerText
//             const getElementValue = parseInt(getElementText)
//             getElement.innerText = 5

//             // bg color
//             removeBackgroundColor(alphabet)
        
//         }
    
//     }
// document.addEventListener('keydown', playAgain)

// // play again by click
//  function playAgainByClick(){
//     hideElementById('scoreAndPlay')
//     showElementById('home-screen')
// }
  


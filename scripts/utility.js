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
  function removeBackgroundColor(elementId) {
      const section = document.getElementById(elementId);
      section.classList.remove("bg-orange-400");
    }


    function getElementTextById(elementId){
        const element = document.getElementById(elementId)
        const elementText = element.innerText
        const value = parseInt(elementText)
        element.innerText = value
    }
  
  //   Current score
  function currentScore(){
     
      const currentScore = document.getElementById('current-score')
      const currentScoreText = currentScore.innerText
      const currentScoreValue = parseInt(currentScoreText)
      // console.log(currentScoreValue)
      const newScore = currentScoreValue + 1
      currentScore.innerText = newScore
    //   main score
      const getElement = document.getElementById('mainScore')
      const getElementText = getElement.innerText
      const getElementValue = parseInt(getElementText)
      getElement.innerText = newScore
  
  }
  
  
  function setTextElementValueById(elementId, value){
    const element = document.getElementById(elementId)
    element.innerText = value

}
  
  
  
  
  function lifeCount(){
      const getElement = document.getElementById('game-life')
      const getElementText = getElement.innerText
      const getElementValue = parseInt(getElementText)
      const lifeRest = getElementValue - 1 
  
      getElement.innerText = lifeRest
  
      // and go to game over page
      if(lifeRest === 0){
          showElementById('scoreAndPlay')
          hideElementById('play-ground')
     
      }
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

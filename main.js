// Random Num Generation
const generateRandomNumber = num => {
    return Math.floor(Math.random() * num)
  }
  //Obj of jargon
  const jargon = {
    starSign: ['cancer? sorry', 'Aquarium', 'gem in eye', 'sajittarius'],
    aura: ['no aura', '-1000 aura', '100 aura', '5000 aura', 'duke dennis aura'],
    helpful: ['touch grass', 'get good kid', 'quit the game', 'quit doom scrolling']
  }
  
    let newJargon = []
    
    
      for(let thing in jargon) {
        let optionIdx = generateRandomNumber(jargon[thing].length)
      
        switch(thing) {
          case 'starSign':
            newJargon.push(`Your sign is "${jargon[thing][optionIdx]}".`)
            break
          case 'aura':
            newJargon.push(`You are having: "${jargon[thing][optionIdx]}".`)
            break
          case 'helpful':
            newJargon.push(`You should: "${jargon[thing][optionIdx]}".`)
            break
          default:
            newJargon.push('BEEP BOOP ERROR: UNKNOWN JARGON')
        }
      }
      
        function formatJargon(jargon) {
          const formatted = newJargon.join('\n')
          console.log(formatted)
        }
        
        formatJargon(newJargon);
function hidden(){
const userInput = document.querySelector('input[type="number"]')
const submitBtn = document.querySelector('button[type="submit"]')
const startBtn = document.querySelector('button[type="button"]')
const form = document.querySelector('form');
let randomNumber = undefined
let array = []
const arrayOutput = document.querySelector('.guesses')
const Result = document.querySelector('.result')
// let userInputValue = parseInt(userInput.value)


    startBtn.addEventListener('click',()=>{
        randomNumber = Math.floor(Math.random()*101)
        startBtn.disabled = true
        submitBtn.disabled = false
        Result.textContent = ' '
        arrayOutput.textContent = ' '
    })
    
    form.addEventListener('submit',(e)=>{
        e.preventDefault();
        let userInputValue = parseInt(userInput.value)
     if(userInputValue > randomNumber){
        Result.textContent = 'Too High!';
    }
    else if(userInputValue < randomNumber){
        Result.textContent = 'Too Low!';
    }else{
        Result.textContent =  'You got it, Congrats!';
        startBtn.disabled = false;
        submitBtn.disabled = true;
    }
    array.push(userInputValue)
    arrayOutput.textContent = `Your guesses: ` + array.join(', ' )
    form.reset()
    })
}
hidden()
// function play(){
//     //console.log("playing");
//     //hide the home screen. to hide the screen add the class hidden to the home section
//     const homeScreen=document.getElementById('home-screen');
//     //console.log(homeScreen.classList);
//     homeScreen.classList.add('hidden');
    
//     // show the playground
//     const playGround=document.getElementById('play-ground');
//     playGround.classList.remove('hidden');
    
// }

function continueGame(){
// step-1 generate a random alphabet
const alphabet=getARandomAlphabet();



//set randomly generated alphabet to the screen (show it)
const currentAlphabet=document.getElementById('current-alphabet');
currentAlphabet.innerText=alphabet;
setBackgroundColorById(alphabet);
}




function getARandomAlphabet(){
//get or create an alphabet array
const alphabetString='abcdefghijklmnopqrstuvwxyz';
const alphabets=alphabetString.split('');


//get a random index between 0-25
const randomNumber=Math.random()*25;
const index=Math.round(randomNumber);
const alphabet=alphabets[index];
return alphabet;

}


function play(){
    hideElementById('home-screen');
    removeElementById('play-ground');
    continueGame();
}

function setBackgroundColorById(elementId){
    const element=document.getElementById(elementId);
       element.classList.add('bg-orange-400');

}
function removeBackgroundColorById(elementId){
    const element=document.getElementById(elementId);
       element.classList.remove('bg-orange-400');

}


function hideElementById(elementId){
    const element=document.getElementById(elementId);
       element.classList.add('hidden');
}


function removeElementById(elementId){
    const element=document.getElementById(elementId);
       element.classList.remove('hidden');
}




// function handleKeyboardButtonPress(event){
// const playerPressed=event.key;


// //get the expected to press 
// const currentAlphabetElement=document.getElementById('current-alphabet');
// const currentAlphabet= currentAlphabetElement.innerText;
// const expectedAlphabet= currentAlphabet.toLowerCase();
// console.log(playerPressed,expectedAlphabet);

// //check if matched or not
// if(playerPressed===expectedAlphabet){
//    // console.log('matched');

// //update score
// //1. get the current score
// const currentScoreElement=document.getElementById('current-score');
// const currentScoreText=currentScoreElement.innerText;
// const currentScore=parseInt(currentScoreText);

// //2 increase the score by 1

// const newScore=currentScore+1;

// //3 show the updated score

// currentScoreElement.innerText=newScore;











//    removeBackgroundColorById(expectedAlphabet);
//    continueGame();
    
// }

// else{
// //1 get the current life
// const currentLifeElement=document.getElementById('life-score');
// const currentLifeText=currentLifeElement.innerText;

// const currentLife=parseInt(currentLifeText);


// //2 reduce the life count
// const newLifeCount=currentLife-1;

// //3 display the current life

// currentLifeElement.innerText=newLifeCount;
// }
// }
// // capture keyboard key press
// document.addEventListener('keyup', handleKeyboardButtonPress);



function getTextElementValueById(elementId){
const element= document.getElementById(elementId);
const elementValueText=element.innerText;
const value= parseInt(elementValueText);
return value;

}

function setTextElementValueById(elementId,value){
const element= document.getElementById(elementId);
element.innerText=value;
}


function handleKeyboardButtonPress(event){
    const playerPressed=event.key;
    // console.log(playerPressed)
    const currentAlphabetElement=document.getElementById('current-alphabet');
const currentAlphabet= currentAlphabetElement.innerText;
const expectedAlphabet= currentAlphabet.toLowerCase();




    if(playerPressed===expectedAlphabet){
        const currentScore=getTextElementValueById('current-score');
        console.log(currentScore)
        const newScore=currentScore+1;
         setTextElementValueById('current-score', newScore);
         removeBackgroundColorById(expectedAlphabet);
            continueGame();
             
    }

    else{
        const currentLife=getTextElementValueById('life-score');
        const updatedLife=currentLife-1;
        setTextElementValueById('life-score', updatedLife);

        if(updatedLife===0){
            
        }
        }
}

document.addEventListener('keyup', handleKeyboardButtonPress);
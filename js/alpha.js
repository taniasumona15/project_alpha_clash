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


function hideElementById(elementId){
    const element=document.getElementById(elementId);
       element.classList.add('hidden');
}


function removeElementById(elementId){
    const element=document.getElementById(elementId);
       element.classList.remove('hidden');
}



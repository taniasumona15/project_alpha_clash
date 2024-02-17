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

function play(){
    hideElementById('home-screen');
    removeElementById('play-ground');
}


function hideElementById(elementId){
    const element=document.getElementById(elementId);
       element.classList.add('hidden');
}


function removeElementById(elementId){
    const element=document.getElementById(elementId);
       element.classList.remove('hidden');
}
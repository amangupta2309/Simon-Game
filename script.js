var buttonColour= ["red","blue","green","yellow"];

var gamePattern = [];
var userPattern = [];
var started=false;
var level=0;

buttonColour.forEach((ele,i) => {
  document.querySelector(`.${ele}`).addEventListener('click',()=>{
    if(started){
      userPattern.push(ele);
      if(gamePattern[userPattern.length-1] != ele){
        document.querySelector(`.${ele}`).classList.add('shake');
        document.querySelector('body').classList.add('haveChange');
        buttonColour.forEach(ele => {
          document.querySelector(`.${ele}`).classList.remove("btn");
        });
        setTimeout(()=>{
          document.querySelector('body').classList.remove('haveChange');
          document.querySelector(`.${ele}`).classList.remove('shake');
          document.querySelector('#restart').classList.remove('hidden');
          document.querySelector("#title").innerHTML = "Game over";
        },1000);
        return;
      }
      if(userPattern.length === gamePattern.length){
        userPattern = [];
        addSeq();
      }
    }
  })
  
});

document.querySelector('#restart').addEventListener('click',()=>{
  document.querySelector('#restart').classList.add('hidden');
  newSequence();
})


document.addEventListener("keypress",function(){
  if(!started){
    document.querySelector("#title").innerHTML="Level "+level;
    newSequence();
    started=true;
  }
})
function newSequence(){
  gamePattern = [];
  userPattern = [];
  level = 0;
  buttonColour.forEach(ele => {
    document.querySelector(`.${ele}`).classList.add("btn");
  });
  addSeq();
}
function addSeq(){
  level++;
  document.querySelector("#title").innerHTML="Level "+level;
  var randomNumber=Math.floor(Math.random()*4);
  gamePattern.push(buttonColour[randomNumber]);
  fadeIn(buttonColour[randomNumber]);
}

function fadeIn(gameColour)
{
  document.querySelector(`.${gameColour}`).classList.add("glow");
  setTimeout(()=>{
    document.querySelector(`.${gameColour}`).classList.remove("glow");
  },1000);
}

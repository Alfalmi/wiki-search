// wait until DOM is ready
document.addEventListener("DOMContentLoaded", function(event) {

    function ground() {
  
      var tl = new TimelineMax({
        repeat: -1
      });
  
      tl.to("#ground", 20, {
          backgroundPosition: "1301px 0px",
          force3D:true,
          rotation:0.01,
          z:0.01,
          autoRound:false,
          ease: Linear.easeNone
        });
  
      return tl;
    }
  
    function clouds() {
  
      var tl = new TimelineMax({
        repeat: -1
      });
  
      tl.to("#clouds", 52, {
        backgroundPosition: "-2247px bottom",
        force3D:true,
        rotation:0.01,
        z:0.01,
        //autoRound:false,
        ease: Linear.easeNone
      });
      
      return tl;
    }
  
    var masterTL = new TimelineMax({
      repeat: -1
    });
    
    // window load event makes sure image is 
  // loaded before running animation
  window.onload = function() {
    
    masterTL
    .add(ground(),0)
    .add(clouds(),0)
    .timeScale(0.7)
    .progress(1).progress(0)
    .play();
  
  };
    
  });





var character = document.getElementById("character");
var block = document.getElementById("block");
var game = document.getElementById("game");

function jump(){
    if(character != "animate"){
    character.classList.add("animate");
}
    setTimeout(function(){
        character.classList.remove("animate");
    },500);
    
}

var checkDead = setInterval(function(){

    var characterTop = parseInt(window.getComputedStyle(character).getPropertyValue("top"));
    var blockLeft = parseInt(window.getComputedStyle(block).getPropertyValue("left"));
    if(blockLeft<20 && blockLeft>0 && characterTop>=130){
        block.style.animation = "none";
        block.style.display = "none";
        alert("Perdiste...");
    }

}, 10);



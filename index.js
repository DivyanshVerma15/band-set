
for (var i = 0; i < document.querySelectorAll(".drum").length;i++){

document.querySelectorAll("button")[i].addEventListener("click",function () {
   
    var key = this.innerHTML;

    makesound(key);
    addAnimation(key);
   
      
});

}


document.addEventListener("keypress", function(event){
    makesound(event.key);
    addAnimation(event.key);  
})


function makesound(key) {
  switch (key) {
    case "w":
        var audio = new Audio('tom-1.mp3');
        audio.play();
      break;

    case "a":
        var audio = new Audio('tom-2.mp3');
        audio.play();
      break;

    case "s":
        var audio = new Audio('tom-3.mp3');
        audio.play();
      break;

    case "d":
        var audio = new Audio('tom-4.mp3');
        audio.play();
      break;

    case "j":
        var audio = new Audio('snare.mp3');
        audio.play();
      break;
    
    case "k":
        var audio = new Audio('crash.mp3');
        audio.play();
      break;

    case "l":
        var audio = new Audio('kick-bass.mp3');
        audio.play();
      break;

    default:
        break;
   }
}


function addAnimation(currentkey){

  var selecetedkey = document.querySelector("." + currentkey);

  selecetedkey.classList.add("pressed");

  setTimeout(function (){
      selecetedkey.classList.remove("pressed");
  }, 100)
}

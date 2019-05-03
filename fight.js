document.querySelector("button").onclick = function() {
    var youDice = Math.floor(Math.random() * 6 + 1);
    console.log(youDice);
    var diceOneImage = "images/dice" + youDice + ".png";
    document.querySelector(".you").setAttribute("src", diceOneImage)

    var meDice = Math.floor(Math.random() * 6 + 1);
    console.log(meDice);
    var diceTwoImage = "images/dice" + meDice + ".png";
    document.querySelector(".me img").setAttribute("src", diceTwoImage)

    var laugh = document.getElementById("myAudio");

    function playAudio() {
      laugh.play();
    }

    if(youDice > meDice){
      document.querySelector(".intro").innerHTML = "<span class='red'>Damn!</span> You win.";
    } else if(meDice > youDice){
      document.querySelector(".intro").innerHTML = "<span class='red'>HA! HA! HA!</span> I win.";
      playAudio();
    } else {
      document.querySelector(".intro").innerHTML = "It's a tie. Want to try again?";
    }

}

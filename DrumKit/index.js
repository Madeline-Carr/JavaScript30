window.addEventListener("keydown", function (e) {
    //Selects Audio Element
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    if (!audio) return; //Stops function
    audio.currentTime = 0;
    audio.play();
})
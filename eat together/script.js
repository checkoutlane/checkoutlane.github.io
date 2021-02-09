function runme() {
    var arr = [
        "pages/raspberry.html", 
        "pages/friedrice.html", 
        "pages/popsicle.html",
        "pages/apple.html",
        "pages/egg.html"
    ];
    var value = arr[Math.floor(Math.random() * arr.length)];
    window.location = value;     
}

function togglePlay() {
    var myAudio = document.getElementById("myAudio");
    return myAudio.paused ? myAudio.play() : myAudio.pause();
};

function toggle(e) {
    let txt = e.innerText;
    e.innerText = txt == 'PLAY' ? 'PAUSE' : 'PLAY';
  }

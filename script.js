function runme() {
    var arr = [
        "pages/raspberry.html", 
        "pages/friedrice.html", 
        "pages/popsicle.html",
        "pages/apple.html",
        "pages/egg.html"
    ];
    var value = arr[Math.floor(Math.random() * arr.length)];
    window.location = value;     // remove the comment at the beginning to actually navigate
}



function togglePlay() {
    var myAudio = document.getElementById("myAudio");
    return myAudio.paused ? myAudio.play() : myAudio.pause();
};

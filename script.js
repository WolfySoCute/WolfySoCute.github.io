// function audioPlay() {
//     var audio = document.getElementById("audio");
//     audio.volume = 0.1;
//     audio.play()
// }

function mute() {
    var audio = document.getElementById("audio");
    if (audio.paused) {
        document.getElementById("mute-icon").src="src/unmute.svg"
        audio.play();
        audio.volume = 0.1;
    } else if (audio.volume != 0) {
        document.getElementById("mute-icon").src="src/mute.svg"
        audio.volume = 0;
    } else {
        document.getElementById("mute-icon").src="src/unmute.svg"
        audio.volume = 0.1;
    }
}
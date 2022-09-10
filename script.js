function mute() {
    var audio = document.getElementById("audio");
    if (audio.paused) {
        document.getElementById("mute-icon").src="src/unmute.svg";
        audio.volume = 0.5;
        audio.currentTime = document.getElementById("video").currentTime;
        audio.muted = false;
        audio.play();
    } else if (audio.muted) {
        document.getElementById("mute-icon").src="src/unmute.svg";
        audio.currentTime = document.getElementById("video").currentTime;
        audio.muted = false;
    } else {
        document.getElementById("mute-icon").src="src/mute.svg";
        audio.muted = true;
    };
};
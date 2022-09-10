function mute(audio) {
    var muteIcon = document.getElementById("mute-icon")
    var audio = document.getElementById("audio")
    if (audio.paused) {
        muteIcon.src="src/unmute.svg";
        audio.volume = 0.5;
        audio.currentTime = document.getElementById("video").currentTime;
        audio.muted = false;
        audio.play();
    } else if (audio.muted) {
        muteIcon.src="src/unmute.svg";
        audio.currentTime = document.getElementById("video").currentTime;
        audio.muted = false;
    } else {
        muteIcon.src="src/mute.svg";
        audio.muted = true;
    };
};
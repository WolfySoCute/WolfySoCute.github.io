function mute(elem) {
    var muteIcon = document.getElementById("mute-icon")
    if (elem.paused) {
        muteIcon.src="src/unmute.svg";
        elem.volume = 0.5;
        elem.currentTime = document.getElementById("video").currentTime;
        elem.muted = false;
        elem.play();
    } else if (elem.muted) {
        muteIcon.src="src/unmute.svg";
        elem.currentTime = document.getElementById("video").currentTime;
        elem.muted = false;
    } else {
        muteIcon.src="src/mute.svg";
        elem.muted = true;
    };
};
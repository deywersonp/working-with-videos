let video = document.getElementById("video1");


function displayControl() {
    document.getElementById("control").style.display = 'block';
}

function hideControl() {
    document.getElementById("control").style.display = 'none';
}


function backTime() {
    video.currentTime -= 10;
};

function forwardTime() {
    video.currentTime += 10;
};

function addRate() {
    video.playbackRate += 0.1;
};

function slowRate() {
    video.playbackRate -= 0.1;
};

function play() {
    video.play();
};

function pause() {
    video.pause();
};

function stop() {
    video.pause();
    video.currentTime = 0;
};


var cgpvideo = document.getElementById("video");


function updateChapters() {
    var time = cgpvideo.currentTime;
    if (time >= 0 && time < 66) {
        resetChapters();
        highlightChapter(document.getElementById("intro"));
    } else if (time >= 66 && time < 212) {
        resetChapters();
        highlightChapter(document.getElementById("phyla"));
    } else if (time >= 212 && time < 298) {
        resetChapters();
        highlightChapter(document.getElementById("horse"));
    } else if (time >= 298 && time < 424) {
        resetChapters();
        highlightChapter(document.getElementById("autos"));
    } else if (time >= 424 && time < 552) {
        resetChapters();
        highlightChapter(document.getElementById("shape"));
    } else if (time >= 552 && time < 685) {
        resetChapters();
        highlightChapter(document.getElementById("prof"));
    } else if (time >= 685 && time < 765) {
        resetChapters();
        highlightChapter(document.getElementById("creala"));
    } else if (time >= 765 && time < 900) {
        resetChapters();
        highlightChapter(document.getElementById("conc"));
    }
}
cgpvideo.ontimeupdate = function() {updateChapters() };

function highlightChapter(element) {
    element.style.backgroundColor = "slategrey";
}

function resetChapters() {
    for (var i = 0; i < 8; i++) {
            document.getElementsByClassName("b_ch")[i].style.backgroundColor = "gainsboro";
    }
}

function setChapter(id) {
    resetChapters();
    switch (id) {
        case "intro":
            cgpvideo.currentTime = 0;
            break;
        case "phyla":
            cgpvideo.currentTime = 66;
            break;
        case "horse":
            cgpvideo.currentTime = 212;
            break;
        case "autos":
            cgpvideo.currentTime = 298;
            break;
        case "shape":
            cgpvideo.currentTime = 424;
            break;
        case "prof":
            cgpvideo.currentTime = 552;
            break;
        case "creala":
            cgpvideo.currentTime = 685;
            break;
        case "conc":
            cgpvideo.currentTime = 765;
            break;
        default:
            break;
    }
}

function playPause() {
    if (cgpvideo.paused)
        cgpvideo.play();
    else
        cgpvideo.pause();
}

function stop() {
    if (!(cgpvideo.paused))
        cgpvideo.pause();
    cgpvideo.currentTime = 0;
}

function subtitles() {
    var trackMode = video.textTracks[0].mode; 
    video.textTracks[0].mode = (trackMode == 'showing') ? 'disabled' : 'showing';
}

function fullscreen() {
    cgpvideo.webkitEnterFullscreen();
}

function makeBig() {
    cgpvideo.width = 1280;
    cgpvideo.height = 720;
    document.getElementById("video").style.right = "10px";
}

function makeSmall() {
    cgpvideo.width = 640;
    cgpvideo.height = 360;
    document.getElementById("video").style.right = "300px";
}

window.onkeyup = function (e) {
    var code = e.keyCode ? e.keyCode : e.which;
    if (code === 32) {
        playPause();
    }
};
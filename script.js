//Songs
const sOne = {song:"Starboy", artist:"The Weeknd, Daft Punk", audio:"audio/Starboy.mp3"};
const sTwo = {song:"Bandit", artist:"Juice WRLD, YoungBoy Never Broke Again", audio:"audio/Bandit.mp3"};
const sThree = {song:"Creepin'", artist:"Metro Boomin, The Weeknd, 21 Savage", audio:"audio/Creepin.mp3"};

const songs = [sOne, sTwo, sThree]

//Main
    let count = 0
    const random = Math.floor(Math.random() * songs.length);
    console.log(random, songs[random]);

    let songTitle = songs[random].song;
    let songArtist = songs[random].artist;
    var songTrack = songs[random].audio;

    console.log(songTitle, songArtist);

function itemSelected(selectedSongTitle, selectedSongArtist) {
    if (selectedSongTitle == songTitle && selectedSongArtist == songArtist) {
        var status = true;
    } else {
        var status = false;
        populate(selectedSongTitle, selectedSongArtist)
    }
}

function populate(selectedSongTitle, selectedSongArtist) {
    //Creating Div
    let imageWrapper = document.createElement("div");
    imageWrapper.classList.add("imageWrapper");

    //Image (img)
    var rowImg = new Image();
    rowImg.src = "images/wrong.png";
    rowImg.classList.add("image");

    //p
	let rowName = document.createElement("p");
    let concatSongName = selectedSongTitle + ", " + selectedSongArtist
    rowName.appendChild(document.createTextNode(concatSongName));
    rowName.classList.add("text");

    //Append
    imageWrapper.appendChild(rowImg);
	imageWrapper.appendChild(rowName);

    let allNamesElm = document.getElementById(count);

    allNamesElm.appendChild(imageWrapper);
    count++

    if (count > 5) {
        console.log("Game Lost")
        endGame(false)
    }
}

document.getElementById("textBox").addEventListener('input', function (evt) {
    input = (this.value);

    document.getElementById("slideUp").style.display = "flex";




    if (input == "") {
        document.getElementById("slideUp").style.display = "none";
    }
});

function endGame(condition) {
    if (condition == true) {
        window.alert("You Won!");
    } else if (condition == false) {
        window.alert("You Lost!");
    } else {
        window.alert("Error");
    }
}

const audioElement = document.querySelector("audio");
const audioCtx = new AudioContext();
const track = audioCtx.createMediaElementSource(audioElement);

const playButton = document.querySelector(".player-play-btn");
const playIcon = playButton.querySelector(".player-icon-play");
const pauseIcon = playButton.querySelector(".player-icon-pause");
const progress = document.querySelector(".player-progress");
const progressFilled = document.querySelector(".player-progress-filled");
const playerCurrentTime = document.querySelector(".player-time-current");
const playerDuration = document.querySelector(".player-time-duration");
const volumeControl = document.querySelector(".player-volume")

window.addEventListener("load", () => {
    setTimes();
    audioElement.addEventListener("timeupdate", () => {
    progressUpdate();
    setTimes();
});

playButton.addEventListener("click", () => {
    if (audioCtx.state === "suspended") {
        audioCtx.resume();
    }

    if (playButton.dataset.playing === "false") {
        audioElement.play();

        playButton.dataset.playing = "true";
        playIcon.classList.add("hidden");
        pauseIcon.classList.remove("hidden");
    } else if (playButton.dataset.playing === "true") {
        audioElement.pause();
        playButton.dataset.playing = "false";
        pauseIcon.classList.add("hidden");
        playIcon.classList.remove("hidden");
    }
});

audioElement.addEventListener("ended", () => {
    playButton.dataset.playing = "false";
    pauseIcon.classList.add("hidden");
    playIcon.classList.remove("hidden");
    progressFilled.style.flexBasis = "0%";
    audioElement.currentTime = 0;
    audioElement.duration = audioElement.duration;
});


const gainNode = audioCtx.createGain();
const volumeControl = document.querySelector(".player-volume");

volumeControl.addEventListener("change", () => {
    gainNode.gain.value = volumeControl.value;
});

track.connect(gainNode).connect(audioCtx.destination);


function setTimes() {
    try {
        playerCurrentTime.textContent = new Date(audioElement.currentTime * 1000)
            .toISOString()
            .substr(11, 8);
        playerDuration.textContent = new Date(audioElement.duration * 1000)
            .toISOString()
            .substr(11, 8);
    } catch {
        console.log("Error, Please reload")
        window.location.reload();
    }
}

function progressUpdate() {
    const percent = (audioElement.currentTime / audioElement.duration) * 100;
    progressFilled.style.flexBasis = `${percent}%`;
}

let mousedown = false;

function scrub(event) {
    const scrubTime =
      (event.offsetX / progress.offsetWidth) * audioElement.duration;
    audioElement.currentTime = scrubTime;
}
}, false)
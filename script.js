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

function playAudio() {
    let audio = new Audio(songTrack);
    audio.play();
}
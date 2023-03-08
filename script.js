//Songs
const sOne = {song:"Starboy", artist:"The Weeknd, Daft Punk"};
const sTwo = {song:"Bandit", artist:"Juice WRLD, YoungBoy Never Broke Again"};
const sThree = {song:"Creepin'", artist:"Metro Boomin, The Weeknd, 21 Savage"};

const songs = [sOne, sTwo, sThree]

//Main
    let failCount = 0;

    const random = Math.floor(Math.random() * songs.length);
    console.log(random, songs[random]);

    let songTitle = songs[random].song;
    let songArtist = songs[random].artist;

    console.log(songTitle, songArtist);

function itemSelected(selectedSongTitle, selectedSongArtist) {
    if (selectedSongTitle == songTitle && selectedSongArtist == songArtist) {
        var status = true;
    } else {
        var status = false;
        failCount++;
    }
}

function populate() {

}

document.getElementById("textBox").addEventListener('input', function (evt) {
    input = (this.value);

    document.getElementById("slideUp").style.display = "flex";




    if (input == "") {
        document.getElementById("slideUp").style.display = "none";
    }
});
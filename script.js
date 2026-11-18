let songs = [

    {
        name: "Perfect",
        artist: "Ed Sheeran",
        genre: "Romantic"
    },

    {
        name: "Believer",
        artist: "Imagine Dragons",
        genre: "Rock"
    },

    {
        name: "Faded",
        artist: "Alan Walker",
        genre: "Electronic"
    },

    {
        name: "Shape of You",
        artist: "Ed Sheeran",
        genre: "Pop"
    }

];


let playlist = [];


// 1. Display Songs

function displaySongs(songArray) {

    let container = document.getElementById("song-container");

    container.innerHTML = "";

    songArray.forEach((song) => {

        container.innerHTML += `

            <div class="song-card">

                <div class="song-image">
                    🎵
                </div>

                <h3>${song.name}</h3>

                <p>${song.artist}</p>

                <p>${song.genre}</p>

                <button onclick="addToPlaylist('${song.name}')">
                    Add to Playlist
                </button>

            </div>

        `;

    });


    document.getElementById("song-count").textContent =
        songArray.length + " Songs";

}


// 2. Add To Playlist

function addToPlaylist(songName) {

    let selectedSong = songs.find((song) => {

        return song.name === songName;

    });


    if (selectedSong) {

        playlist.push(selectedSong);

        updatePlaylist();

        alert(songName + " added to your playlist!");

    }

}


// 3. Update Playlist

function updatePlaylist() {

    let recentContainer = document.getElementById("recent-songs");

    recentContainer.innerHTML = "";


    playlist.forEach((song) => {

        recentContainer.innerHTML += `

            <div class="recent-item">
                ${song.name}
            </div>

        `;

    });


    let playlistNames = playlist.map((song) => {

        return song.name;

    });


    let summary = playlistNames.join(", ");


    document.getElementById("playlist-summary").textContent =
        playlist.length > 0
            ? "Playlist: " + summary
            : "Playlist: Empty";

}


// 4. Add New Song

function addSong() {

    let name = prompt("Enter Song Name:");

    if (name === null || name.trim() === "") {
        return;
    }


    let artist = prompt("Enter Artist Name:");

    if (artist === null || artist.trim() === "") {
        return;
    }


    let genre = prompt("Enter Song Genre:");

    if (genre === null || genre.trim() === "") {
        return;
    }


    let newSong = {

        name: name.trim(),
        artist: artist.trim(),
        genre: genre.trim()

    };


    songs.push(newSong);


    displaySongs(songs);

    showRecentSongs();

    alert("New Song Added Successfully!");

}


// 5. Remove Song

function removeSong() {

    if (songs.length === 0) {

        alert("No Songs Available!");

        return;

    }


    let removedSong = songs.splice(songs.length - 1, 1)[0];


    playlist = playlist.filter((song) => {

        return song.name !== removedSong.name;

    });


    displaySongs(songs);

    updatePlaylist();

    showRecentSongs();


    alert(removedSong.name + " Removed Successfully!");

}


// 6. Sort Songs

function sortSongs() {

    songs.sort((a, b) => {

        if (a.name < b.name) {

            return -1;

        }

        else if (a.name > b.name) {

            return 1;

        }

        else {

            return 0;

        }

    });


    displaySongs(songs);

    showRecentSongs();

}


// 7. Reverse Songs

function reverseSongs() {

    songs.reverse();


    displaySongs(songs);

    showRecentSongs();

}


// 8. Show Recent Songs

function showRecentSongs() {

    let recentContainer = document.getElementById("recent-songs");

    recentContainer.innerHTML = "";


    let recentSongs = songs.slice(-3);


    recentSongs.forEach((song) => {

        recentContainer.innerHTML += `

            <div class="recent-item">
                ${song.name}
            </div>

        `;

    });

}


// 9. Initial Function Calls

displaySongs(songs);

showRecentSongs();
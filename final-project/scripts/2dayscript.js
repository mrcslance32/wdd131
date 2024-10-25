const votes = {
    '"This Love" - Maroon 5': 0,
    '"Bodies" - Drowning Pool': 0,
    '"Higher" - Creed': 0,
    '"Forget You" - CeeLo Green': 0,
};

// Initialize vote count from localStorage
let voteCount = localStorage.getItem('voteCount') ? parseInt(localStorage.getItem('voteCount')) : 0;

document.getElementById("pollForm").addEventListener("submit", function (e) {
    e.preventDefault();

    if (voteCount >= 3) {
        alert("You have reached the maximum number of votes (3)! Redirecting to the results page.");
        window.location.href = 'results.html';
        return;
    }

    const formData = new FormData(e.target);
    const selectedSong = formData.get("song");

    console.log("Selected Song:", selectedSong); // Log the selected song for debugging

    if (!selectedSong) {
        alert("Please select a song before voting.");
        return;
    }

    // Increment the vote for the selected song
    votes[selectedSong]++;
    voteCount++;

    localStorage.setItem('pollVotes', JSON.stringify(votes));
    localStorage.setItem('voteCount', voteCount);

    e.target.reset();

    if (voteCount >= 3) {
        alert("You have reached the maximum number of votes (3)! Redirecting to the results page.");
        window.location.href = 'results.html';
    }
});

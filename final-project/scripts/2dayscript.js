const votes = {
    '"This Love" - Maroon 5': 0,
    '"Bodies" - Drowning Pool': 0,
    '"Higher" - Creed': 0,
    '"Forget You" - CeeLo Green': 0,
};

// Initialize vote count from localStorage
let voteCount = localStorage.getItem('voteCount') ? parseInt(localStorage.getItem('voteCount')) : 0;

// Event listener for form submission
document.getElementById("pollForm").addEventListener("submit", function (e) {
    e.preventDefault(); // Prevent default form submission

    // Check if the user has already voted 3 times
    if (voteCount >= 3) {
        alert("You have reached the maximum number of votes (3)! Redirecting to the results page.");

        // Redirect to the results page
        window.location.href = 'results.html';
        return; // Exit the function
    }

    const formData = new FormData(e.target);
    const selectedSong = formData.get("song");

    // Ensure a song is selected
    if (!selectedSong) {
        alert("Please select a song before voting.");
        return; // Prevent blank votes
    }

    // Increment the vote for the selected song
    votes[selectedSong]++;
    voteCount++; // Increment the vote count

    // Store votes and vote count in localStorage
    localStorage.setItem('pollVotes', JSON.stringify(votes));
    localStorage.setItem('voteCount', voteCount);

    // Reset the form
    e.target.reset();

    // Check if max votes reached and redirect if so
    if (voteCount >= 3) {
        alert("You have reached the maximum number of votes (3)! Redirecting to the results page.");
        window.location.href = 'results.html'; // Redirect to results page
    }
});
































































































































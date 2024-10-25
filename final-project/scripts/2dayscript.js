const votes = {
    '"This Love" - Maroon 5"': 0,
    '"Bodies" - Drowning Pool': 0,
    '"Higher" - Creed': 0,
    '"Forget You" - CeeLo Green': 0,
};

let voteCount = 0; // Track the number of votes

document.getElementById("pollForm").addEventListener("submit", function (e) {
    e.preventDefault(); // Prevent default form submission

    if (voteCount >= 3) {
        alert("You have reached the maximum number of votes (3)!");
        return; // Prevent further voting
    }

    const formData = new FormData(e.target);
    const selectedSong = formData.get("song");

    if (!selectedSong) {
        alert("Please select a color before voting.");
        return; // Prevent blank votes
    }

    // Increment the vote for the selected color
    votes[selectedSong]++;
    voteCount++; // Increment the vote count

    displayResults();

    // Reset the form after voting
    e.target.reset();
});

function displayResults() {
    const resultDiv = document.getElementById("result");
    resultDiv.innerHTML = ''; // Clear previous results

    // Create a result message for each color
    for (const song in votes) {
        const voteCountDisplay = votes[song];
        const resultMessage = document.createElement("p");
        resultMessage.textContent = `${song}: ${voteCountDisplay} vote(s)`;
        resultDiv.appendChild(resultMessage);
    }

    resultDiv.classList.remove("hidden");
}

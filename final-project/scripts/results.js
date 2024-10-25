document.addEventListener("DOMContentLoaded", function () {
    const resultDiv = document.getElementById("result");
    const storedVotes = localStorage.getItem('pollVotes');

    if (storedVotes) {
        const votes = JSON.parse(storedVotes);

        // Create a result message for each song
        for (const song in votes) {
            const voteCountDisplay = votes[song];
            const resultMessage = document.createElement("p");
            resultMessage.textContent = `${song}: ${voteCountDisplay} vote(s)`;
            resultDiv.appendChild(resultMessage);
        }
    } else {
        resultDiv.textContent = "No votes have been cast yet.";
    }

    // Optionally clear localStorage if desired
    localStorage.removeItem('pollVotes');
    localStorage.removeItem('voteCount');
});
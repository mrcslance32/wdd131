document.addEventListener("DOMContentLoaded", function () {
    const resultDiv = document.getElementById("result");
    const storedVotes = localStorage.getItem('pollVotes');

    if (storedVotes) {
        const votes = JSON.parse(storedVotes);


        for (const song in votes) {
            const voteCountDisplay = votes[song];
            const resultMessage = document.createElement("p");
            resultMessage.textContent = `${song}: ${voteCountDisplay} vote(s)`;
            resultDiv.appendChild(resultMessage);
        }
    } else {
        resultDiv.textContent = "No votes have been cast yet.🤷";
    }

    localStorage.removeItem('pollVotes');
    localStorage.removeItem('voteCount');
});

document.getElementById('submitBtn').addEventListener('click', function () {
    const songInput = document.getElementById('songSuggestion').value;
    if (songInput) {
        alert(`Your song suggestion: "${songInput}" has been submitted!`);

        document.getElementById('songSuggestion').value = '';
    } else {
        alert('Please enter a song title and artist.');
    }
});
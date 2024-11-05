// ibs.js

document.getElementById("reveal-button").addEventListener("click", function() {
    const hiddenText = document.getElementById("hiddenText");
    hiddenText.classList.toggle("hidden");

    const img = document.querySelector(".center-gif");
    // Check if the hidden text is currently visible
    if (hiddenText.classList.contains("hidden")) {
        // Replace the GIF with the original one
        img.src = "https://media1.tenor.com/m/hz4kyNrxfn0AAAAd/kuromi-eat.gif";
    } else {
        // Replace the GIF with a new one when the button is clicked
        console.log("Changing image to new GIF"); // Check if this line runs
        img.src = "https://media1.tenor.com/m/2xDjVO7wN30AAAAd/onegai-my-melody-kuromi.gif"; // Replace with your new GIF URL
    }
});

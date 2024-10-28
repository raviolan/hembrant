document.addEventListener('DOMContentLoaded', () => {
    const h1Element = document.getElementById('typing-text'); // Get the h1 element by ID
    const text = h1Element.innerHTML; // Store the initial text content
    const typingSpeed = 100; // Typing speed in milliseconds
    let index = 0; // Start at the first character

    h1Element.innerHTML = ''; // Clear the initial text

    // Function to type the text
    function type() {
        if (index < text.length) {
            h1Element.innerHTML += text.charAt(index); // Append the next character
            index++;
            setTimeout(type, typingSpeed); // Call the function again after a delay
        } else {
            // Once the text animation is complete, show the button
            const button = document.querySelector('.kool-aid-button');
            button.style.display = 'flex'; // Show the button
            button.querySelector('#enter').classList.add('active'); // Add active class for animation
        }
    }

    type(); // Start the typing animation
});

document.addEventListener('DOMContentLoaded', () => {
    const h1Element = document.getElementById('typing-text'); // Get the h1 element by ID
    const text = h1Element.innerHTML; // Store the initial text content
    const typingSpeed = 100; // Typing speed in milliseconds
    let index = 0; // Start at the first character

    h1Element.innerHTML = ''; // Clear the initial text

    // Function to type the text
    function type() {
        if (index < text.length) {
            h1Element.innerHTML += text.charAt(index); // Append the next character
            index++;
            setTimeout(type, typingSpeed); // Call the function again after a delay
        } else {
            // Once the text animation is complete, show the button
            const button = document.querySelector('.kool-aid-button');
            button.style.display = 'flex'; // Show the button
            button.querySelector('#enter').classList.add('active'); // Add active class for animation
        }
    }

    type(); // Start the typing animation
});

function showInputSection() {
    const inputSection = document.querySelector('.input-name');
    inputSection.style.display = 'flex'; // Show the input section
}
let nameSubmitted = false; // Variable to track if a name has been submitted

function revealInfo() {

    // Get the value of the character name input field
    var characterName = document.getElementById("character-name").value.toLowerCase();

    // Hide all sections initially
    document.getElementById("tihildur-info").style.display = "none";
    document.getElementById("kjell-info").style.display = "none";
    document.getElementById("unknown-character").style.display = "none";

    // Check if the name matches a specific character and reveal the appropriate info
    if (characterName.includes("tihildur")) {
        document.getElementById("tihildur-info").style.display = "block";
    } else if (characterName.includes("kjell")) {
        document.getElementById("kjell-info").style.display = "block";
    } else if (characterName.includes("odo")) {
        document.getElementById("odo-info").style.display = "block";
    }
    else if (characterName.includes("bange")) {
        document.getElementById("bange-info").style.display = "block";
    }
    else if (characterName.includes("valkrath")) {
        document.getElementById("valkrath-info").style.display = "block";
    }
    else {
        // If the name doesn't match Tihildur or Kjell, show a default message
        document.getElementById("unknown-character").style.display = "block";
    }

    // Set nameSubmitted to true and disable the input and button
    nameSubmitted = true;
    document.getElementById("character-name").disabled = true;
    document.querySelector('.input-name button').disabled = true;
}

document.getElementById("dice-link").addEventListener("click", function (event) {
    event.preventDefault(); // Prevent the default anchor behavior

    const diceContainer = document.getElementById("dice-container");
    const dice = document.getElementById("dice");
    const resultDisplay = document.getElementById("result");

    // Show the dice container
    diceContainer.style.display = "flex";

    // Start rolling animation
    let rollCount = 20; // Number of frames in the animation

    const rollInterval = setInterval(() => {
        // Randomly select an emoji for rolling effect
        const diceFaces = ["🐉", "🧙🏼", "🔮", "🍄", "💀", "🧝🏽‍♀️"];
        dice.innerHTML = diceFaces[Math.floor(Math.random() * diceFaces.length)];

        // Roll the dice
        const rotation = Math.random() * 360;
        dice.style.transform = `rotate(${rotation}deg)`;

        rollCount--;
        if (rollCount <= 0) {
            clearInterval(rollInterval);
            // Final roll
            const finalRoll = Math.floor(Math.random() * 20) + 1; // Roll between 1 and 20
            dice.innerHTML = finalRoll; // Show the final number on the dice

            // Display result message based on the rolled number
            if (finalRoll === 1) {
                resultDisplay.innerHTML = `Critical Fail! u rolled a ${finalRoll}.`;
            } else if (finalRoll === 20) {
                resultDisplay.innerHTML = `You rolled a: ${finalRoll}. Critical success!`;
            } else {
                resultDisplay.innerHTML = `You rolled a: ${finalRoll}`;
            }
        }
    }, 100); // Update every 100 milliseconds
});

// Function to resize image map coordinates based on the image's current size
function resizeImageMap() {
    const img = document.querySelector("img[usemap='#image-map']");
    const map = document.querySelector("map[name='image-map']");
    const originalWidth = 1200; // Replace with the original width of your image
    const originalHeight = 800; // Replace with the original height of your image

    const scaleWidth = img.clientWidth / originalWidth;
    const scaleHeight = img.clientHeight / originalHeight;

    map.querySelectorAll("area").forEach(area => {
        const coords = area.dataset.coords.split(',').map(Number); // Original coords
        const newCoords = coords.map((coord, i) =>
            i % 2 === 0 ? Math.round(coord * scaleWidth) : Math.round(coord * scaleHeight)
        );
        area.coords = newCoords.join(",");
    });
}

// Run the function on load and on window resize
window.addEventListener("load", resizeImageMap);
window.addEventListener("resize", resizeImageMap);

function checkDecodedMessage() {
    const userInput = document.getElementById("cipher-input").value.trim();
    const decodedMessage = "Judgement Awaits";

    // Convert both to lowercase for a case-insensitive comparison
    if (userInput.toLowerCase() === decodedMessage.toLowerCase()) {
        document.getElementById("decode-error").innerText = ""; // Clear any error
        document.getElementById("path-choice").classList.remove("hidden"); // Show path choices
    } else {
        // Array of incorrect messages
        const incorrectMessages = [
            "The flames of Embermaw sense your hesitation.",
            "You have yet to prove your worthiness.",
            "Only the worthy may tread this path; seek deeper.",
            "The echoes of your ancestors whisper: not yet.",
            "The fire waits for a stronger spirit.",
            "You have not yet earned Embermaw's favor.",
            "Your journey is not complete; the flames are still watching.",
            "The flames flicker, revealing your uncertainty.",
            "Embermaw's wrath is reserved for those unprepared."
        ];

        // Pick a random incorrect message
        const randomIndex = Math.floor(Math.random() * incorrectMessages.length);
        const randomMessage = incorrectMessages[randomIndex];
        document.getElementById("decode-error").innerText = randomMessage; // Show a random incorrect message
    }
}


// Step 2: Show error or clue for path choice
function showError() {
    // Get a random error message
    const randomIndex = Math.floor(Math.random() * pathErrorMessages.length);
    document.getElementById("path-error").innerText = pathErrorMessages[randomIndex];
}

function showClue() {
    document.getElementById("path-error").innerText = "You have chosen wisely. Your next destination lies in the shadow of the dragon’s breath.";

    // Show the password gate section
    document.getElementById("password-gate").classList.remove("hidden");
}


// Array of error messages for incorrect password input
const passwordErrorMessages = [
    "The flames flicker, revealing that the secret name eludes you still.",
    "Only those who truly understand fire may pass; try again.",
    "The ashes of forgotten knowledge swirl around you; seek the true name.",
    "Your words lack the heat of truth; the gate remains closed.",
    "The ember's glow dims with each false attempt; remember the ancient whispers.",
    "The path to Embermaw's heart is sealed by your uncertainty; find the right word."
];

// Step 3: Check password input
function checkPassword() {
    const password = document.getElementById("password").value;
    if (password.toLowerCase() === "grasp") {
        document.getElementById("access-granted").classList.remove("hidden");

        // Show the button to reveal the relic
        document.getElementById("reveal-relic-btn").classList.remove("hidden");
    } else {
        // Get a random error message for incorrect password
        const randomIndex = Math.floor(Math.random() * passwordErrorMessages.length);
        document.getElementById("password-error").innerText = passwordErrorMessages[randomIndex];
    }
}


function showRelic() {
    // Hide the "Reveal Your Prize" button
    document.getElementById("reveal-relic-btn").style.display = "none";

    // Display the relic or any other actions for revealing the prize
    document.getElementById("relic-display").classList.remove("hidden");
}
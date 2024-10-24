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

const dragon = document.querySelector('.dragon-container');
let positionX = -200; // Start position off-screen
const speed = 2; // Adjust speed of movement
const amplitude = 20; // Height of the wave
const frequency = 0.05; // Speed of the wave
const delayBeforeReset = 5000; // Delay of 5 seconds

function animateDragon() {
    // Update the dragon's horizontal position
    positionX += speed; // Move the dragon to the right

    // Create a wave effect by adjusting the Y position
    const positionY = Math.sin(positionX * frequency) * amplitude;

    // Set the new position
    dragon.style.transform = `translate(${positionX}px, ${positionY}px)`;

    // Check if the dragon goes off-screen
    if (positionX > window.innerWidth) {
        // Add a delay before resetting the position
        setTimeout(() => {
            positionX = -200; // Reset to start position
            animateDragon(); // Restart the animation
        }, delayBeforeReset);
    } else {
        // Call the next frame
        requestAnimationFrame(animateDragon);
    }
}

// Start the animation
animateDragon();

function checkShape(shape) {
    const errorMessage = document.getElementById("error-message");
    const protectedContent = document.getElementById("protected-content");
    const shapeContainer = document.querySelector('.shape-container');

    // Define the correct shape here
    const correctShape = 'eye'; // Change this to match the correct shape

    if (shape === correctShape) {
        // Display the protected content if the correct shape is clicked
        protectedContent.style.display = "block";
        shapeContainer.style.display = "none"; // Hide shape options
        errorMessage.textContent = ""; // Clear any previous error message
    } else {
        // Customize error messages based on the incorrect shape clicked
        let message;
        switch (shape) {
            case 'sword':
                message = "In depths where lost tales lie in rest, a blade awaits, a sailor's quest. Through storms may crash and waters weep, find the steel where secrets sleep.";
                break;
            case 'door':
                message = "Behind the door where kobolds play, the dragon sleeps, its breath at bay. To seek treasure, you must test. Find the key where dragons rest.";
                break;
            case 'green':
                message = "In the temple where whispers dwell, the wise woman guards a secret spell. Climb to the heights where the horizon sings, and glimpse the truth that knowledge brings.";
                break;
            default:
                message = "Not here.";
        }

        errorMessage.textContent = message; // Set the custom error message
        shapeContainer.classList.add("shake"); // Add shake class

        // Remove shake class after animation ends
        shapeContainer.addEventListener('animationend', function () {
            shapeContainer.classList.remove("shake");
        }, { once: true });
    }
}
function showInputSection() {
    const inputSection = document.querySelector('.input-name');
    inputSection.style.display = 'flex'; // Show the input section
}
let nameSubmitted = false; // Variable to track if a name has been submitted

function revealInfo() {
    // Check if a name has already been submitted
    if (nameSubmitted) {
        return; // Exit the function if a name has been submitted
    }

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
            resultDisplay.innerHTML = `You rolled a: ${finalRoll}`;
            dice.innerHTML = finalRoll; // Show the final number on the dice
        }
    }, 100); // Update every 100 milliseconds
});
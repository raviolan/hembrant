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


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

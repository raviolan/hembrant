// Function to set up event listeners
function setupEventListeners() {
    // Navbar Hamburger Menu Toggle
    const hamburgerIcon = document.getElementById('hamburgerIcon');
    const navbarMenu = document.getElementById('navbarMenu');

    if (hamburgerIcon && navbarMenu) {
        hamburgerIcon.addEventListener('click', () => {
            navbarMenu.classList.toggle('active');
        });
    }

    // Cart Drawer Functionality
    const cartButton = document.querySelector('.cart-button');
    const cartDrawer = document.querySelector('.cart-drawer');
    const closeDrawerButton = document.querySelector('.close-drawer');

    if (cartButton && cartDrawer && closeDrawerButton) {
        cartButton.addEventListener('click', () => {
            cartDrawer.classList.toggle('open');
        });
        closeDrawerButton.addEventListener('click', () => {
            cartDrawer.classList.remove('open');
        });
    }
}

// Function to fetch and display "New In" items
function loadNewInItems() {
    fetch('/products.json') // Ensure the path to your JSON file is correct
        .then(response => {
            if (!response.ok) {
                throw new Error(`Failed to fetch products: ${response.statusText}`);
            }
            return response.json();
        })
        .then(products => {
            const newInGrid = document.querySelector('.new-in-grid');
            if (!newInGrid) {
                console.warn('New In grid not found.');
                return;
            }

            // Filter for "New In" items (e.g., most recently added products)
            const newInItems = products.slice(0, 4); // Adjust the number of items as needed

            // Clear the grid (if needed) and populate items
            newInGrid.innerHTML = ''; // Clear previous content
            newInItems.forEach(item => {
                const productElement = createProductElement(item);
                newInGrid.appendChild(productElement);
            });
        })
        .catch(error => {
            console.error('Error loading New In items:', error);
        });
}

// Helper function to create product elements
function createProductElement(product) {
    const productDiv = document.createElement('div');
    productDiv.classList.add('new-in-item');

    // Add product image with hover functionality
    productDiv.innerHTML = `
        <img class="main-product-img" src="${product.mainImage}" alt="${product.name}">
        <img class="hover-product-img" src="${product.hoverImage}" alt="${product.name}">
        <h3>${product.name}</h3>
        <p>GP ${product.price.toFixed(2)}</p>
    `;

    return productDiv;
}



// Call the loadNewInItems function on DOMContentLoaded
document.addEventListener('DOMContentLoaded', () => {
    loadNewInItems();
});


// Wait for the DOM to be ready
document.addEventListener('DOMContentLoaded', setupEventListeners);

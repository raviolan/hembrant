// Handle "New In" item swipes
const newInItems = document.querySelectorAll('.new-in-item');

newInItems.forEach(item => {
    let touchstartX = 0;
    let touchendX = 0;

    item.addEventListener('touchstart', (e) => {
        touchstartX = e.changedTouches[0].screenX;
    });

    item.addEventListener('touchend', (e) => {
        touchendX = e.changedTouches[0].screenX;
        handleSwipe(item);
    });

    function handleSwipe(item) {
        if (touchendX < touchstartX) {
            // Swipe Left (show second image)
            item.querySelector('.main-product-img').style.display = 'none';
            item.querySelector('.hover-product-img').style.display = 'block';
        }
        if (touchendX > touchstartX) {
            // Swipe Right (show main image)
            item.querySelector('.main-product-img').style.display = 'block';
            item.querySelector('.hover-product-img').style.display = 'none';
        }
    }
});

// Handle Navbar Toggle
document.addEventListener('DOMContentLoaded', () => {
    const hamburger = document.querySelector('.navbar-hamburger');
    const menu = document.querySelector('.navbar-menu');

    hamburger.addEventListener('click', () => {
        menu.classList.toggle('active'); // Toggles the active class
    });
});


// Cart State and Functions
let cartItems = []; // Array to hold cart items

const cartButton = document.querySelector('.cart-button');
const cartCount = document.querySelector('.cart-count');
const cartDrawer = document.querySelector('.cart-drawer');
const closeDrawerButton = document.querySelector('.close-drawer');

// Update Cart Count Badge
function updateCartCount() {
    cartCount.textContent = cartItems.length;
}

// Update the Cart Display in the Drawer
function updateCartDisplay() {
    const cartItemsContainer = document.querySelector('.cart-items');
    const emptyMessage = document.querySelector('.empty-message');
    const totalPrice = document.querySelector('.total-price');

    // Clear the current items
    cartItemsContainer.innerHTML = '';

    if (cartItems.length === 0) {
        emptyMessage.style.display = 'block';
        totalPrice.textContent = 'Total: $0.00';
    } else {
        emptyMessage.style.display = 'none';
        let total = 0;

        // Add items to the drawer
        cartItems.forEach(item => {
            const listItem = document.createElement('li');
            listItem.textContent = `${item.name} - $${item.price.toFixed(2)}`;
            cartItemsContainer.appendChild(listItem);
            total += item.price;
        });

        // Update total price
        totalPrice.textContent = `Total: $${total.toFixed(2)}`;
    }
}

// Add Item to Cart
function addToCart(item) {
    cartItems.push(item);
    updateCartCount();
    updateCartDisplay();
}

// Toggle the Cart Drawer
function toggleCartDrawer() {
    const isOpen = cartDrawer.classList.contains('open');
    if (isOpen) {
        cartDrawer.classList.remove('open');
        document.body.classList.remove('drawer-open'); // Optional: Allow scrolling
    } else {
        cartDrawer.classList.add('open');
        document.body.classList.add('drawer-open'); // Optional: Prevent scrolling
    }
}

// Attach Event Listeners to Cart Drawer Buttons
cartButton.addEventListener('click', toggleCartDrawer);
closeDrawerButton.addEventListener('click', toggleCartDrawer);

// Attach Event Listeners to Add-to-Cart Buttons
document.querySelectorAll('.add-to-cart-button').forEach(button => {
    button.addEventListener('click', () => {
        const item = {
            name: button.dataset.productName,
            price: parseFloat(button.dataset.productPrice)
        };
        addToCart(item);
    });
});

document.addEventListener('DOMContentLoaded', function() {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];

    function updateCart() {
        const cartItemsContainer = document.querySelector('.cart-items');
        const totalPriceElement = document.getElementById('total-price');
        cartItemsContainer.innerHTML = '';
        let totalPrice = 0;

        cart.forEach(item => {
            const itemElement = document.createElement('div');
            itemElement.className = 'cart-item';
            itemElement.innerHTML = `
                <img src="${item.image}" alt="${item.name}">
                <p>${item.name}</p>
                <p>₹${item.price} x ${item.quantity}</p>
                <p>Subtotal: ₹${item.price * item.quantity}</p>
                <button class="remove-btn" data-id="${item.id}">Remove</button>
            `;
            cartItemsContainer.appendChild(itemElement);
            totalPrice += item.price * item.quantity;
        });

        totalPriceElement.textContent = totalPrice.toFixed(2);
    }

    function addToCart(item) {
        const existingItem = cart.find(i => i.id === item.id);
        if (existingItem) {
            existingItem.quantity += 1;
        } else {
            cart.push({ ...item, quantity: 1 });
        }
        localStorage.setItem('cart', JSON.stringify(cart));
        updateCart();
    }

    document.querySelectorAll('.add-to-cart-btn').forEach(button => {
        button.addEventListener('click', function() {
            const item = {
                id: this.dataset.id,
                name: this.dataset.name,
                price: parseFloat(this.dataset.price),
                image: this.dataset.image
            };
            addToCart(item);
        });
    });

    document.querySelector('.cart-items').addEventListener('click', function(event) {
        if (event.target.classList.contains('remove-btn')) {
            const itemId = event.target.dataset.id;
            const itemIndex = cart.findIndex(item => item.id === itemId);
            if (itemIndex !== -1) {
                cart.splice(itemIndex, 1);
                localStorage.setItem('cart', JSON.stringify(cart));
                updateCart();
            }
        }
    });

    updateCart();
});

    

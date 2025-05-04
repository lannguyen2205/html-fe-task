const products = [
    { id: 1, image: "./assets/images/products/headphone.jpg",name: 'Headphones', description: 'Experience high-quality sound without the wires', price: 50 },
    { id: 2, image: "./assets/images/products/watch.jpg",name: 'Smartwatch', description: 'Stay connected and keep track of your fitness goals', price: 100 },
    { id: 3, image: "./assets/images/products/laptop.jpg",name: 'Gaming Laptop', description: 'High-performance laptop designed for gaming and work', price: 1500 },
  ];

const productList = document.getElementById('product-list');

// Function to render the product list
productList.innerHTML = products.map((product, index) => `
<div class="product-card" key=${index}>
    <img class="product-image" src=${product.image} alt="Product image" onclick="openModal(${product.id})">
    <div class="product-info">
        <h2 class="product-name">${product.name}</h2>
        <p class="product-description">${product.description}</p>
        <button class="btn" onclick="openModal(${product.id})">View detail</button>

    </div>
</div>
` ).join('');


//--------------Part 2-1: Quantity Input and Total Calculation--------------
const quantitySection = document.getElementById('quantity-section');

// Render product list for quantity input
quantitySection.innerHTML = products.map(product => `
    <div class="quantity-row">
        <span>${product.name} - $${product.price}</span>
        <input type="number" class="product-quantity" id="quantity-${product.id}" placeholder="0" min="0">
    </div>
`).join('');

// Function to calculate total value
function calculateTotal() {
    let total = 0;

    products.forEach(product => {
        const quantityInput = document.getElementById(`quantity-${product.id}`);
        const quantity = quantityInput.value || 0;

        // Apply 10% discount if quantity > 5
        const price = quantity > 5 ? product.price * 0.9 : product.price; 
        total += price * quantity;
    });
    alert(`Total: $${total}`);
    
    return total;
}


//-------------- Part 2-2: Modal Popup--------------
//Function to open the modal
function openModal(productId) {
    const product = products.find(p => p.id === productId);
    document.getElementById('modal-popup').style.display = 'flex';
    document.getElementById('modal-image').src = product.image;
    document.getElementById('modal-name').innerText = product.name;
    document.getElementById('modal-description').innerText = product.description;   
    document.getElementById('modal-price').innerText = "$"+ product.price;

    setTimeout(() => {
        document.getElementById('modal-content').classList.add('show'); // add class 'show' to trigger CSS transition
    }, 100); 
}


// Function to close the modal
function closeModal() {
    document.getElementById('modal-content').classList.remove('show');

    setTimeout(() => {
        document.getElementById('modal-popup').style.display = 'none';
    }, 200); // wait for the transition to finish before hiding the modal

}